import React, { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convertHandler = (e) => {
    e.preventDefault();
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex h-screen w-full flex-wrap items-center justify-center bg-slate-600">
      <div className="w-full">
        <div className="border-gray-60 mx-auto w-full max-w-md rounded-lg border bg-white/30 p-5 backdrop-blur-sm">
          <form onSubmit={convertHandler}>
            <div className="mb-1 w-full">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>
            <div className="relative h-1 w-full">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-white bg-blue-600 px-2 py-0.5 text-white"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <InputBox
              label="to"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-3 text-white"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;

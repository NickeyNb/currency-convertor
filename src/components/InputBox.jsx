import React from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  return (
    <div className={`flex rounded-lg bg-white p-3 text-sm ${className}`}>
      <div className="w-1/2">
        <label htmlFor="" className="mb-2 inline-block text-black/80">
          {label}
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisable}
          className="w-full rounded-lg border-b border-black px-2 py-1 outline-none"
        />
      </div>
      <div className="flex w-1/2 flex-wrap justify-end text-right">
        <p className="mb-2 w-full text-black/80">Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="cursor-pointer rounded-lg bg-gray-300 py-2 text-center  outline-none"
        >
          {currencyOptions.map((c, idx) => (
            <option key={idx} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;

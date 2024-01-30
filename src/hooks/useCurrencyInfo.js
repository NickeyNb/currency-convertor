import axios from "axios";
import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
      )
      .then(({ data }) => {
        setData(data[currency]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [currency]);

  // console.log(data);
  return data;
};

export default useCurrencyInfo;

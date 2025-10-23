import { useState, useEffect } from "react";
import ConverterForm from "./ConverterForm";
import ResultDisplay from "./ResultDisplay";
import { fetchConversion } from "../services/exchangeApi";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("CLP");
  const [convertedValue, setConvertedValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (amount <= 0 || isNaN(amount)) {
      setConvertedValue(null);
      return;
    }

    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchConversion(fromCurrency, toCurrency, amount);
        setConvertedValue(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setConvertedValue(null);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Currency Converter</h2>
      <ConverterForm
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        onAmountChange={setAmount}
        onFromChange={setFromCurrency}
        onToChange={setToCurrency}
      />
      <ResultDisplay
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        convertedValue={convertedValue}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default CurrencyConverter;

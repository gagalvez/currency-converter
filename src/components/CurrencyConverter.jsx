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
    <div className="max-w-md mx-auto mt-10 rounded-2xl bg-slate-900/90 border border-slate-700 shadow-xl p-6 text-slate-100 backdrop-blur">
      <h2 className="text-2xl font-semibold mb-1 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
        Currency Converter
      </h2>
      <p className="text-sm text-slate-400 mb-6 text-center">
        Convierte entre USD, CLP y EUR en tiempo real.
      </p>

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

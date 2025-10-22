import { useState } from "react";
import ConverterForm from "./ConverterForm";
import ResultDisplay from "./ResultDisplay";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("CLP");

  return (
    <div style={{ padding: "1rem" }}>
      
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
      />
    </div>
  );
}

export default CurrencyConverter;

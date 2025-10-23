function ResultDisplay({
  amount,
  fromCurrency,
  toCurrency,
  convertedValue,
  loading,
  error,
}) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!convertedValue) return <p>Enter an amount to convert.</p>;

  return (
    <div>
      <h4>Result</h4>
      <p>
        {amount} {fromCurrency} = {convertedValue.toFixed(2)} {toCurrency}
      </p>
    </div>
  );
}

export default ResultDisplay;

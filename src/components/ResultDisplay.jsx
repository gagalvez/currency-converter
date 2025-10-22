function ResultDisplay({ amount, fromCurrency, toCurrency }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h4>Result</h4>
      {amount > 0 ? (
        <p>
          {amount} {fromCurrency} = ... {toCurrency}
        </p>
      ) : (
        <p>Enter an amount to convert.</p>
      )}
    </div>
  );
}

export default ResultDisplay;

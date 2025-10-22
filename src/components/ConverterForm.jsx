function ConverterForm({
  amount,
  fromCurrency,
  toCurrency,
  onAmountChange,
  onFromChange,
  onToChange,
}) {
  return (
    <form>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="amount">
          Amount:
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(parseFloat(e.target.value))}
            style={{ marginLeft: "0.5rem", width: "80px" }}
          />
        </label>

        <select
          id="from-currency"
          value={fromCurrency}
          onChange={(e) => onFromChange(e.target.value)}
          style={{ marginLeft: "0.5rem" }}
        >
          <option value="USD">USD</option>
          <option value="CLP">CLP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="to-currency">
          To:
          <select
            id="to-currency"
            value={toCurrency}
            onChange={(e) => onToChange(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          >
            <option value="USD">USD</option>
            <option value="CLP">CLP</option>
            <option value="EUR">EUR</option>
          </select>
        </label>
      </div>

      <p>
        Converting {amount} {fromCurrency} → {toCurrency}
      </p>
    </form>
  );
}

export default ConverterForm;

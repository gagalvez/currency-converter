function ConverterForm({
  amount,
  fromCurrency,
  toCurrency,
  onAmountChange,
  onFromChange,
  onToChange,
}) {
  return (
    <form className="space-y-4 mb-4">
      <div className="space-y-2">
        <label
          htmlFor="amount"
          className="text-sm font-medium text-slate-200 flex justify-between"
        >
          <span>Cantidad</span>
          <span className="text-xs text-slate-400">Mínimo &gt; 0</span>
        </label>

        <div className="flex gap-3">
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(parseFloat(e.target.value))}
            className="flex-1 rounded-xl bg-slate-950/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/80 focus:border-emerald-400 placeholder:text-slate-500"
            placeholder="Ej: 100"
          />

          <select
            id="from-currency"
            value={fromCurrency}
            onChange={(e) => onFromChange(e.target.value)}
            className="w-28 rounded-xl bg-slate-950/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/80 focus:border-emerald-400"
          >
            <option value="USD">USD</option>
            <option value="CLP">CLP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="to-currency"
          className="text-sm font-medium text-slate-200"
        >
          Convertir a
        </label>

        <select
          id="to-currency"
          value={toCurrency}
          onChange={(e) => onToChange(e.target.value)}
          className="w-full rounded-xl bg-slate-950/80 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/80 focus:border-cyan-400"
        >
          <option value="USD">USD</option>
          <option value="CLP">CLP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <p className="text-xs text-slate-400 mt-1">
        Convirtiendo{" "}
        <span className="font-semibold text-slate-100">{amount || 0}</span>{" "}
        <span className="font-mono">{fromCurrency}</span> →{" "}
        <span className="font-mono">{toCurrency}</span>
      </p>
    </form>
  );
}

export default ConverterForm;

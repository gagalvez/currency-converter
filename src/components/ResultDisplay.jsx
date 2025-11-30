function ResultDisplay({
  amount,
  fromCurrency,
  toCurrency,
  convertedValue,
  loading,
  error,
}) {
  if (loading)
    return (
      <div className="mt-4 text-sm text-emerald-300 bg-emerald-950/40 border border-emerald-700/60 rounded-xl px-3 py-2">
        Obteniendo tasa de cambio...
      </div>
    );

  if (error)
    return (
      <div className="mt-4 text-sm text-red-300 bg-red-950/40 border border-red-700/60 rounded-xl px-3 py-2">
        Error: {error}
      </div>
    );

  if (!convertedValue)
    return (
      <p className="mt-4 text-sm text-slate-400">
        Ingresa un monto válido para ver la conversión.
      </p>
    );

  return (
    <div className="mt-5 rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3">
      <h4 className="text-sm font-semibold text-slate-200 mb-1">Resultado</h4>
      <p className="text-lg font-semibold text-emerald-400">
        {amount}{" "}
        <span className="font-mono text-slate-200">{fromCurrency}</span> =
        <span className="ml-2">
          {convertedValue.toFixed(2)}{" "}
          <span className="font-mono text-slate-200">{toCurrency}</span>
        </span>
      </p>
      <p className="text-xs text-slate-500 mt-1">
        Tasa aproximada. Puede variar levemente según la fuente.
      </p>
    </div>
  );
}

export default ResultDisplay;

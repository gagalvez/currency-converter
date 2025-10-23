export async function fetchConversion(from, to, amount) {
  if (!amount || isNaN(amount)) return null;

  const accessKey = "11c8ce5dffcc8def3ad634d9ade46632";
  const url = `http://api.currencylayer.com/live?access_key=${accessKey}&source=USD&currencies=CLP,EUR,GBP`;

  console.log("URL que se está llamando:", url);

  const response = await fetch(url);
  const data = await response.json();

  console.log("Respuesta API:", JSON.stringify(data, null, 2));

  if (!response.ok || !data.success) {
    throw new Error("Error fetching conversion rate");
  }

  const rates = data.quotes;

  let result;

  if (from === "USD") {
    result = amount * rates[`USD${to}`];
  }
  else if (to === "USD") {
    result = amount / rates[`USD${from}`];
  }
  else {
    const fromToUSD = 1 / rates[`USD${from}`];
    const usdToTarget = rates[`USD${to}`];
    result = amount * fromToUSD * usdToTarget;
  }

  return result;
}

export default defineEventHandler(async (event) => {
  const currency = event.context.params?.code;
  const { currencyKey } = useRuntimeConfig();

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${currency}&apikey=${currencyKey}`;

  const { data } = await $fetch<ICurrencies>(uri);

  return data;
});

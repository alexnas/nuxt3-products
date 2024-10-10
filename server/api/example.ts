export default defineEventHandler(async (event) => {
  const { currencyKey } = useRuntimeConfig();
  const { name } = getQuery(event);
  const { age } = await readBody(event);

  const { data: currencies } = await $fetch<ICurrencies>(
    `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`
  );

  return {
    message: `Hello, ${name}! You are ${age} years old.`,
    currencies,
  };
});

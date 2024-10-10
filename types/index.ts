export {};

declare global {
  interface IProduct {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  }

  interface ICurrency {
    code: string;
    value: number;
  }

  interface ICurrencies {
    [key: string]: ICurrency;
  }

  interface IAboutSummary {
    message: string;
    currencies: ICurrencies;
  }
}

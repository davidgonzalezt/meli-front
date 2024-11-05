import axios from "axios";

export interface SearchProducts {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface Author {
  name: string;
  lastname: string;
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: Condition;
  free_shipping: boolean;
}

export enum Condition {
  New = "new",
}

export interface Price {
  currency: Currency;
  amount: number;
  decimals: number;
}

export enum Currency {
  Ars = "ARS",
}


const getSearchProducts = async (search: string): Promise<SearchProducts> => {
  const { data } = await axios.get(
    `http://localhost:4001/api/items?q=${search}`
  );
  return data;
};

export default getSearchProducts;

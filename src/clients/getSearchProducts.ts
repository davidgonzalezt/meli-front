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
const API_URL = import.meta.env.VITE_API_URL;
/**
 * Fetches search products from the server based on a search query.
 *
 * @param {string} search - The search query to fetch products for.
 * @returns {Promise<SearchProducts>} - A promise that resolves with the search products.
 */
const getSearchProducts = async (search: string): Promise<SearchProducts> => {
  const { data } = await axios.get(`${API_URL}/api/items?q=${search}&limit=4`);
  return data;
};

export default getSearchProducts;

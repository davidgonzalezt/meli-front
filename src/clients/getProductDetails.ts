import axios from "axios";

export interface ProductDetails {
  author: Author;
  item: Item;
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
  condition: string;
  free_shipping: boolean;
  description: string;
  categories: string[];
  sold_quantity: number;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
const API_URL =  import.meta.env.VITE_API_URL;
/**
 * Fetches product details from the server.
 *
 * @param {string} id - The id of the product to fetch.
 * @returns {Promise<ProductDetails>} - A promise that resolves with the product details.
 */
const getProductDetails = async (id: string): Promise<ProductDetails> => {
  const { data } = await axios.get(`${API_URL}/api/items/${id}`);
  return data;
};


export default getProductDetails;

import { Product } from '../types/Product';

type ProductsAction = {
  type: "set/products";
  products: Product[];
};

export const ProductsState: Product[] = [];

export const actions = {
  setProducts: (products: Product[]) => ({
    type: "set/products",
    products,
  }),
};

export const selectors = {
  getProducts: (products: Product[]) => products,
};

const productsReducer = (
  products = ProductsState,
  action: ProductsAction,
): Product[] => {
  switch (action.type) {
    case "set/products":
      return action.products;
    default:
      return products;
  }
};

export default productsReducer;
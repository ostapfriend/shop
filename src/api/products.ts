export function getProducts() {
  const BASE_URL = 'https://mate-academy.github.io/react_phone-catalog/api/products.json'

  return fetch(BASE_URL).then((response) => response.json());
}

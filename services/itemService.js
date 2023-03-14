export async function getItems() {
  const request = await fetch("https://fakestoreapi.com/products");
  const items = await request.json();

  return items;
}

export async function getLimitItems() {
  const items = await getItems();

  return items.slice(0, 3);
}


// Take an item object, `{ name, price }`, and a `newPrice`,
// and return a new item with the updated price, without mutating the original.

/*
setPrice = (
  item: { name: String, price: Number },
  newPrice: Number
) => item
*/

const setPrice = ({ name, price }, newPrice) => {
  return { name, price: newPrice }
};

let item = {
  name: 'Book',
  price: 34
};

let updatedItem = setPrice(item, 55);
console.log(updatedItem);

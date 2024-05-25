
// Not pure:
const addToCart = (cart, item, quantity) => {
  cart.items.push({
    item,
    quantity,
  });
  return cart;
};

// Pure addToCart() returns a new cart.
// It does not mutate the original.
const pureAddToCart = (cart, item, quantity) => ({
  ...cart,
  items: cart.items.concat({
    item,
    quantity,
  })
});


// Test the code and see for yourself by giving it some data to act on:
const myCart = {
  id: 'cart123',
  items: [
    { item: 'Apple', quantity: 3 },
  ],
};

console.log(
  pureAddToCart(myCart, 'Orange', 2), // the new cart
  myCart // myCart is unchanged
);


#### In FP side effects include:

- Writing to the disk
- Writing to the network
- Drawing to the screen
- Logging to the console
- Throwing errors
- Mutating the DOM
- Mutating objects or arrays passed in as arguments

#### Not pure example:
```
const addToCart = (cart, item, quantity) => {
  cart.items.push({
    item,
    quantity
  });
  return cart;
};
```

#### Pure example:
Pure addToCart() returns a new cart.It does not mutate the original.
```
const addToCart = (cart, item, quantity) => ({
  ...cart,
  items: cart.items.concat([{
    item,
    quantity
  }])
});
```
#### To test the result:
```
const myCart = {
  id: 'cart123',
  items: [
    { item: 'Apple', quantity: 3 }
  ]
};

console.log(
  addToCart(myCart, 'Orange', 2), // the new cart
  myCart // myCart is unchanged
);
```
In this example, we have an array nested in an object. For complex state like this, I sometimes reach for tools like **Immer** to simplify pure functions.

**Redux** lets you compose reducers rather than deal with the entire app state inside each reducer. The result is that you don’t have to create a deep clone of the entire app state every time you want to update just a small part of it. Instead, you can use non-destructive array methods, or `Object.assign()` to update a small part of the app state.

Source: https://ericelliottjs.com/premium-content/lesson-pure-functions

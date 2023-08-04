export let cart = [
  {
    productID: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 1
  },
  {
    productID: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 10
  },
];


export function addToCart(productID){
  let matchingProduct;

  cart.forEach(item => {
    if(productID === item.productID){
      matchingProduct = item;
    }
  });

  if(matchingProduct){
    matchingProduct.quantity += 1;
  }
  else{
    cart.push({
      productID,
      quantity:1
    });
  }
}

export function removeFromCart(id) {
  cart = cart.filter(i => id !== i.productID);
}

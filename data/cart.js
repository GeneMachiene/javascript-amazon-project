export let cart = JSON.parse(localStorage.getItem('cart')) || [];

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

  saveToStorage();
}

export function removeFromCart(id) {
  cart = cart.filter(i => id !== i.productID);

  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

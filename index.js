var cart=[];

function setCart(newCart) {
  cart = newCart;
}
function getCart(){
  return cart;
}
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function addToCart(item){
  var price=Math.floor(Math.random()*100)
  //cart[`${item}`]=price;
  cart.push({[item] : price})
  console.log(`${item} has been added to your cart.`)
  return cart
}


function viewCart(){
  if(cart.length===0){
    console.log("Your shopping cart is empty.")
  }else{
    var array=[]
    for(let i=0;i<cart.length;i++){

      for(var itemName in cart[i]){
        array.push(`${itemName} at $${cart[i][itemName]}`)
      }
    }
    console.log(`In your cart, you have ${array.join(", ")}.`)
  }
}



function removeFromCart(item){
  //for(let i=0;i<cart.length;i++){
  for(var items in cart){
    //if(cart[i].hasOwnProperty(item)){ using the first for loop
    if(cart[items].hasOwnProperty(item)){
      //console.error(cart.hasOwnProperty(item));
      //cart.splice(i,1) using the first for loop
      cart.splice(items,1);
      return cart;
    }
  }
    console.log('That item is not in your cart.')
}

function placeOrder(cardNumber){
  if(cardNumber===undefined){
    console.log('We don\'t have a credit card on file for you to place your order.')
  }else{
    const t=total()
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);
    cart=[]
  }
}

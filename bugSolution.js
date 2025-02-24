function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    const price = typeof items[i].price === 'number' ? items[i].price : 0; // Input validation
    total += price;
  }
  return total;
}
//Alternative solution using error handling
function calculateTotal(items){
    let total = 0;
    for(let i = 0; i < items.length; i++){
        if(typeof items[i].price !== 'number'){
            throw new Error("Invalid price type for item at index " + i);
        }
        total += items[i].price;
    }
    return total;
}
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price; // Potential error here if items[i].price is not a number
  }
  return total;
}
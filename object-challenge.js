const customerOrder = {
  name: "Ellie"
  drink: "Coffee",
  sugar: 5,
  ready: true
}

if (customerOrder.ready) {
  console.log(
    "ready for pickup: " +
    customerOrder.name +
    " with " +
    customerOrder.sugar +
    " sugars."
  )
}
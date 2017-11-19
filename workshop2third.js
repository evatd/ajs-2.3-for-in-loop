// Each line ends with a comma, except for the last line: no comma
var prop,
  methodTotal = 0,
  propertyTotal = 0,
  basket = {
    items: 0,
    totalPrice: 0.5,
    addItem: function() {},
    removeItem: function() {}
  };

// Iterate the object: basket
for (prop in basket) {
  // Check the type of each property
  // Note that methods and functions are mutually exclusive
  // Thus we will check type and display them separately
  if (typeof basket[prop] === "function") {
    // myObject[propertyName] is a function, thus it's a method
    methodTotal++;
  } else {
    // myObject[propertyName] is not a function, thus it's a property
    propertyTotal++;
  }
}

// Print the results: number of properties and methods
console.log("Property number: " + propertyTotal + ". ");
console.log("Method number: " + methodTotal + ". ");

// Or all in one sentence
console.log(
  "The object has " +
    propertyTotal +
    " properties and " +
    methodTotal +
    " methods."
);

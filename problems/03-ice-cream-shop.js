/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/

// 1. Create function, takes in flavors + favorite
// 2.  Checks if flavors includes favorite
// 3. Returns a boolean.
// 4. Checks one flavor at a time vs favorite
// 5. Return iceCreamShop if flavor isn't favorite

function iceCreamShop(flavors, favorite) {
  let flavor = flavors.pop();
  if (flavor === favorite) {
    return true;
  } else if (flavors.length === 0) {
    return false;
  }
  return iceCreamShop (flavors, favorite)
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}

console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Declare basket variable
let basket = [];

// Function to add item to basket
function addItem(item) {
basket.push(item);
return true;
}

// Test addItem function. Returns true.
console.log(addItem('Socks'));
console.log(addItem('Shoes'));
console.log(`Items in your basket: ${basket}`);

// Function to log each item in the basket
function listItems(item) {
for (item of basket) {
    console.log(item);
}
}
console.log(basket)
// Test listItems function
listItems()

// Function to empty basket
function empty() {
while (basket.length > 0) {
    basket.pop()
}
}

// Test empty function
empty();
console.log(basket)

// STRETCH GOALS:

// 1. Declare maxItems variable
const maxItems = 5;

// 2. Create isFull function
function isFull(maxItems) {
    if (basket.length < maxItems) {
        return false
    } else {
        return true 
    }
}

// Test isFull function -- returns true
console.log(basket);
console.log(isFull());

// Add more items and test again
console.log(addItem('Socks'));
console.log(addItem('Shoes'));
console.log(addItem('Pants'));
console.log(addItem('Shirt'));
console.log(addItem('Sweatshirt'));
console.log(basket);

// Test isFull
console.log(isFull());


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}

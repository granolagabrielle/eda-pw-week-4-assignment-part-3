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
console.log(addItem('New shoes'));
console.log(`Items in your basket: ${basket}`);

// Function to log each item in the basket
function listItems(item) {
for (item of basket) {
    console.log(item);
}
}

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

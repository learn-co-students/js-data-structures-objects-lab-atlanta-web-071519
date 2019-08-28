// Write your solution in this file!
const driver = {}; 

// use bracket notation for adding/updating/deleting

function updateDriverWithKeyAndValue(driver, key, value){
    // non-destructively creates a new object with the key value
    // pairs of the const driver and the new ones
    return Object.assign({}, driver, {[key]: value}); 
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    // have to use bracket notation to update/add key values in an Object
    driver[key] = value; 
    return driver; 
}

function deleteFromDriverByKey(driver, key){
    let x = Object.assign({}, driver); 
    delete x[key]; 
    return x; 
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]; 
    return driver; 
}
// Write your solution in this file!


let driver = {
    name: 'Sam',
    address: '11 Broadway'
}

function updateDriverWithKeyAndValue(driver, anything , value) {
   let newDriver =  {...driver}
   newDriver[anything] = value
   return newDriver
}

// updateDriverWithKeyAndValue(driver, "new", "value")

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}
function deleteFromDriverByKey(driver, keyToChange) {
    newDriver = {...driver}
    delete newDriver[keyToChange]
    return newDriver
}

deleteFromDriverByKey(driver, "name")

function destructivelyDeleteFromDriverByKey(driver, key) {
    console.log(driver)
    delete driver[key]
    return driver
}

destructivelyDeleteFromDriverByKey(driver, "key")

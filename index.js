const driver ={};


function updateDriverWithKeyAndValue(driver, key, value)
{
    const newDriver = Object.assign({}, driver, {[key]: value})
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
{
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key)
{
    const remove = Object.assign({}, driver)
    delete remove[key];
    return remove;
}

function destructivelyDeleteFromDriverByKey(driver, key)
{
    delete driver[key];
    return driver;
}
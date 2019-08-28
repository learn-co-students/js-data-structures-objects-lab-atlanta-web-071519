// Write your solution in this file!
const driver = {}; 

const updateDriverWithKeyAndValue = (driverObject, key, value) => {
    const newDriverObj = Object.assign({}, driverObject); 
    newDriverObj[key] = value; 
    return newDriverObj; 
};

const destructivelyUpdateDriverWithKeyAndValue = (driverObject, key, value) => {
    driverObject[key] = value;
    return driverObject; 
};

const deleteFromDriverByKey = (driverObject, key) => {
    const newDriverObj = Object.assign({}, driverObject); 
    delete newDriverObj[key]; 
    return newDriverObj; 
};

const destructivelyDeleteFromDriverByKey = (driverObject, key) => {
    delete driverObject[key];
    return driverObject; 
}; 
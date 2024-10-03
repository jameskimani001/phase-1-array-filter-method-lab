// Example array of driver names
const drivers = ['Alice', 'Bob', 'Charlie', 'alice', 'charlie', 'David'];

// Example array of driver objects
const driverObjects = [
    { name: 'Alice', hometown: 'New York' },
    { name: 'Bob', hometown: 'Los Angeles' },
    { name: 'Charlie', hometown: 'Chicago' },
    { name: 'alice', hometown: 'Boston' },
    { name: 'charlie', hometown: 'Miami' },
    { name: 'David', hometown: 'Seattle' }
];

// Function to find matching drivers (case insensitive)
const findMatching = (driversArray, name) => {
    return driversArray.filter(driver => driver.toLowerCase() === name.toLowerCase());
};

// Function to perform fuzzy matching (drivers whose names start with the given letters)
const fuzzyMatch = (driversArray, letters) => {
    return driversArray.filter(driver => driver.startsWith(letters));
};

// Function to match driver objects by name property
const matchName = (driverObjectsArray, name) => {
    return driverObjectsArray.filter(driver => driver.name === name);
};


// 1. Return the value of key name 'color' from obj
const prob1 = (obj) => {
    return obj.color;
}

// 2. Return the value of key name 'all wheel drive' from obj
const prob2 = (obj) => {
    return obj['all wheel drive'];
}

// 3. Change the value of 'color' in obj to 'pink'. Return the obj
const prob3 = (obj) => {
    obj.color = 'pink';
    return obj;
}

// 4. Key 'all wheel drive' in obj is a boolean
// Change the value of 'all wheel drive' in object to the opposite of what it is now and return the obj
const prob4 = (obj) => {
    obj['all wheel drive'] = !obj['all wheel drive'];
    return obj;
}

// 5. Add a key called 'seats' to obj and set it to the param called 'seatsValue'. Return obj
const prob5 = (obj, seatsValue) => {
    obj.seats = seatsValue;
    return obj;
}

// 6. Add the paramter 'keyName' as a key to obj and assign it the parameters called 'value'. Return the obj.
const prob6 = (obj, keyName, value) => {
    obj[keyName] = value;
    return obj;
}

module.exports = {
    prob1,
    prob2,
    prob3,
    prob4,
    prob5,
    prob6
}




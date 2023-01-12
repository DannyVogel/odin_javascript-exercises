const findTheOldest = function(arr) {
    let ageArr = arr.map(item => {
        if(!item.hasOwnProperty("yearOfDeath")){
            const currentYear = new Date().getFullYear()
            return currentYear - item.yearOfBirth
        } else {
            return item.yearOfDeath - item.yearOfBirth
        }
    })

    const oldestAge = Math.max(...ageArr)
    
    return arr[ageArr.indexOf(oldestAge)]
};

// Do not edit below this line
module.exports = findTheOldest;

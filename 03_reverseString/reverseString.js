const reverseString = function(str) {
    let strArr = str.split("")
    let revStrArr = []
    for(let i=str.length+1; i >= 0; i--){
        revStrArr.push(strArr[i])
    }
    return revStrArr.join("")
};

// Do not edit below this line
module.exports = reverseString;

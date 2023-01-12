const palindromes = function (str) {
    let strArr = str.toLowerCase().replace(/[^\w\']|_/g,"").split("");
    let revStrArr = []
    for(let i = strArr.length-1 ; i>=0; i--){
        revStrArr.push(strArr[i])
    }
    return strArr.join("") == revStrArr.join("")
};

// Do not edit below this line
module.exports = palindromes;

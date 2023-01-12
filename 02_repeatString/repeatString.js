const repeatString = function(str, num) {
    if(num < 0){
        return "ERROR"
    }
    let start = 0;
    let strArr = []
    while(start < num){
        strArr.push(str)
        start++
    }
    console.log(strArr)
    return strArr.join("")
};

// Do not edit below this line
module.exports = repeatString;

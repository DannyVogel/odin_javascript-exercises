const removeFromArray = function(arr, ...arg) {
    const argumentsArr = [...arg]
    
    for(let i=0; i<argumentsArr.length; i++){
        if(arr.includes(argumentsArr[i])){
            arr.splice(arr.indexOf(argumentsArr[i]),1)
        } else {
            continue
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;

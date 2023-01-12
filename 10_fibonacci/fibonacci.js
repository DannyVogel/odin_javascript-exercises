const fibonacci = function(num) {
    let result = [1,1];
    if(typeof num == "string"){
        num = Number(num)
    }
    
    if(num < 0) {
        return "OOPS"
    } else if(num == 1 || num == 2){
        return 1
    } else {
        for(let i=2; i<=num; i++){
           result.push(result[i-1] + result[i-2])
        }
    }
    return result[num - 1]
};

// Do not edit below this line
module.exports = fibonacci;

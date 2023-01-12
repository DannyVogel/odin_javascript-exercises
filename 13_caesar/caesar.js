const caesar = function(str, num) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  let strArr = str.split('')
  
  let encryptStrArr = []
  
  for(let i=0; i<strArr.length; i++){
    if(strArr[i].match(/\W/g)){
        encryptStrArr.push(strArr[i])
        continue;
    }
    
    let ltrIndex = alphabet.indexOf(strArr[i].toLowerCase())
    let newLtrIndex = 0
    
    if(ltrIndex + num > 26){
      newLtrIndex = (ltrIndex + num) % 26
    } else if(ltrIndex + num < 0) {
        newLtrIndex = ltrIndex + num + 26
    } else if(ltrIndex + num == 26){
        newLtrIndex = 0
    } else {
        newLtrIndex = ltrIndex + num
    }
    if(strArr[i] == strArr[i].toUpperCase()){
      encryptStrArr.push(alphabet[newLtrIndex].toUpperCase())
    } else {
      encryptStrArr.push(alphabet[newLtrIndex])
    }
  }
  return encryptStrArr.join("")
};

// Do not edit below this line
module.exports = caesar;

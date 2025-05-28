const caesarCipher = (str, value) => {
    const newArray = [];
    let cipheredString = '';
// alphabet wrap xyz to be abc
const array = str.split('').map(element => {
    
    const code = element.charCodeAt(0) ;    

 if (code <= 122 && code >= 97){
        newArray.push(((code - 97 + value) % 26) +97);
    }     else if (code <= 90 && code >= 65){
        newArray.push(((code - 65 + value) % 26) +65);
    } else {
        newArray.push(code)
    }
    return code;
});
newArray.map(element => {
    cipheredString += String.fromCharCode(element)
})

return cipheredString;
}


module.exports = {
    caesarCipher,
}



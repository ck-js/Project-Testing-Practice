const reverseStr = (str) => {
// convert string to array
const strToArray = str.split('');
// reverse array items
const reversedArray = strToArray.reverse();
// convert reversed array back to string
const arrayToStr = reversedArray.join('')

return arrayToStr;
}


module.exports = {
    reverseStr,

}

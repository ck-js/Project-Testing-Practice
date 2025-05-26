 const capitalize = (str) => {
  // capitalize the first character of the str
  const firstCharacter = str.charAt(0).toUpperCase();
  const subString = str.slice(1);
  return firstCharacter + subString;

} 

module.exports = {
    capitalize,
}
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const counts = {};
  str.split("").map((char) => {
    counts[char] = counts[char] ? counts[char] + 1 : 1;
  });
  const maxCount = Math.max(Object.values(counts));
  const maxArray = Object.keys(counts).reduce((acc, key) => {
    if (counts[key] === maxCount) {
      acc.push(key);
    }
    return acc;
  });
  return maxArray[0];
}

module.exports = maxChar;

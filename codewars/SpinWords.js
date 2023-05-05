/**
 * @param {string} string event
 */
export function spinWords(string) {
  const myArray = string.split(" ");
  let newArray = myArray.map(transform); // map returns result of func, (forEach not)

  return newArray.join(" ");
}

function transform(element) {
  if (element.length >= 5) {
    return element.split("").reverse().join("");
  } else {
    return element;
  }
}

/* Better solution
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}
*/

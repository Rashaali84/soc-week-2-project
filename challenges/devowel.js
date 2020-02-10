console.log('devowel script has loaded');

// write this function!
function devowel(stringValue) {


  return stringValue.replace(/[aeiou]/ig, '');

  /*Regular-exp instead of using a string as a first input
    to reduce code lines.
    g --> find all matches not only the first -- global match
    i --> case insensitive .
    /  / -- > the pattern
    [] tells to match any character in the set
    aeiou the set of characters. */
}

// remove all vowels, lower and upper case!
console.assert(devowel('alphAbet') === 'lphbt', 'first');
console.assert(devowel('If it must bE') === 'f t mst b', 'second');
console.assert(devowel('Over and out') === 'vr nd t', 'third');
console.assert(devowel('Up!') === 'p!', 'fourth');
console.assert(devowel('AaEeIiOoUuAaEeIiOoUu') === '', 'fifth');


function devowelHandler() {
  // prompt the user for a noun, verb and adjective
  const userText = prompt('enter some text');

  // perform core logic
  const result = devowel(userText);

  // alert result for the user
  alert(result);

  // log action for the developer
  console.log('\n--- devowel ---');
  console.log('userText:', '(' + typeof userText + '),', userText);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('devowel-button').addEventListener('click', devowelHandler);

console.log('padLefts script has loaded');

// write this function!
function padLeft(string, length) {
  //strubg,padstrat()
  if (string.length >= length) {
    return string;
  }
  else {
    let extraDashs = string.length;
    extraDashs = length - extraDashs;
    for (i = 0; i < extraDashs; i++) {
      string = '-' + string;

    }
    return string;
  }
}

// if the string is already as long as or longer than the length
console.assert(padLeft('farenheit', 3) === 'farenheit', 'first');
console.assert(padLeft('celcius', 7) === 'celcius', 'second');
console.assert(padLeft('', 0) === '', 'third');

// if the string is too short
console.assert(padLeft('', 2) === '--', 'fourth');
console.assert(padLeft('abc', 6) === '---abc', 'fifth');
console.assert(padLeft('computers', 10) === '-computers', 'sixth');


function padLeftHandler() {
  // prompt the user for a noun, verb and adjective
  const userString = prompt('enter a string to pad');

  const userLengthStr = prompt('what is the shortest this string should be?');
  // cast userLengthStr to a Number, and assign the value to userLength

  console.assert(typeof userLength === 'number', "don't forget to cast userLength to a string!");

  // perform core logic
  // write this line!
  let result = padLeft(userString, userLengthStr);
  alert(result);
  // alert result for the user
  // write this line!

  // log action for the developer
  console.log('\n--- padLeft ---');
  console.log('userString:', '(' + typeof userString + '),', userString);
  console.log('userLength:', '(' + typeof userLength + '),', userLength);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('pad-left-button').addEventListener('click', padLeftHandler);

console.log('tempConverter script has loaded');

// write this function!
function tempConverter(degrees, temperature) {
  var resultValue;
  if (temperature === 'f' || temperature === 'F') {
    resultValue = degrees * 9 / 5 + 32;
  }
  else {
    resultValue = (degrees - 32) * 5 / 9;
  }
  return Math.round(resultValue).toFixed(2);
}

// if the user wants to convert to farenheit
console.assert(tempConverter(53, 'farenheit') === 127.4, 'first');
console.assert(tempConverter(0, 'farenheit') === 32, 'second');
console.assert(tempConverter(-40, 'farenheit') === -40, 'third');

// if the user wants to convert to celcius
console.assert(tempConverter(0, 'celcius') === 32, 'fourth');
console.assert(tempConverter(4, 'celcius') === 39.2, 'fifth');
console.assert(tempConverter(12.4, 'celcius') === 54.32, 'sixth');

// if the user inputs an invalid degree
console.assert(tempConverter(34, 'toad') === 'toad is not supported', 'seventh');
console.assert(tempConverter(2.5, '') === ' is not supported', 'eighth');
console.assert(tempConverter(500, 'Farenheit') === 'Farenheit is not supported', 'ninth');


function tempConverterHandler() {
  // perform core logic
  // write this line!
  let result;
  // prompt the user for a noun, verb and adjective
  const userTempStr = prompt('would you like to convert to "f" for farenheit or "c" celcius? , please write "f" or "c" only!');
  if (String(userTempStr) === 'f' || String(userTempStr) === 'c' || String(userTempStr) === 'C' || String(userTempStr) === 'F') {
    // cast userDegreesStr to a Number, and assign the value to userDecrees
    const userDegrees = prompt('enter a temperature to convert');
    if (Number(userDegrees)) {
      result = tempConverter(userDegrees, userTempStr);
      alert(result);
    } else {
      alert('Write a valid number please .try again!');
      console.assert(typeof userDegrees === 'number', "don't forget to cast userDegrees to a string!");
    }
  }
  else
    alert('Write a valid convert choice please, try again !');

  //alert(result);

  // log action for the developer
  console.log('\n--- tempConverter ---');
  console.log('userTemp:', '(' + typeof userTemp + '),', userTemp);
  console.log('userDegrees:', '(' + typeof userDegrees + '),', userDegrees);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('temp-converter-button').addEventListener('click', tempConverterHandler);

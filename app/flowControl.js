exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    by3 = num % 3 === 0;
    by5 = num % 5 === 0;
    by3And5 = by3 && by5;
    if (by3And5) {
    	return 'fizzbuzz';
    } 
  else if (by3) {
   	return 'fizz';
   } 
  else if (by5) {
  	return 'buzz';
   } else if (isNaN(num)) {
  	return false;
  } else {
  	return num;
  } 
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

  }
};

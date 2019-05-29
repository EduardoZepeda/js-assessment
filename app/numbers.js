exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    binaryNumber = (num >>> 0).toString(2);

    return parseInt(binaryNumber[binaryNumber.length - bit]);

  },

  base10: function(str) {
    return parseInt(parseInt(str, 2).toString(10));
  },

  convertToBinary: function(num) {
    var binaryNumber = (num >>> 0).toString(2);
    if(binaryNumber.length!=8){
        let zeros= "0".repeat(8-binaryNumber.length);
        binaryNumber = zeros + binaryNumber;    
    }
    return binaryNumber;

  },

  multiply: function(a, b) {
    return (a*1000)*(b*1000)/1000000;
  }
};

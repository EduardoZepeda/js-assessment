exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var regNum = /\d+/;
    return regNum.test(str);
  },

  containsRepeatingLetter: function(str) {
    var repeatLetter = /([a-zA-Z])\1{1,}/g; 
    return repeatLetter.test(str);
  },

  endsWithVowel: function(str) {
    var endsVowel = /[aeiouAEIOU]$/
    return endsVowel.test(str);
  },

  captureThreeNumbers: function(str) {
    var ThreeNumbers = /\d{3}/
    var result = ThreeNumbers.exec(str);
    if(result){
       return result[0];}
    else {
       return false;
    }
  },

  matchesPattern: function(str) {
     var pattern = /^\d{3}-\d{3}-\d{4}$/
     return pattern.test(str);
  },

  isUSD: function(str) {
      var usdPattern = /^\$\d{1,3},?(\d{3},?)*(\.\d{2})?$/ 
      return usdPattern.test(str);
  }
};

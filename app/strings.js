exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var lettersArray = str.match(/([a-zA-Z])\1{0,}/g);
    var newText = "";
    for(let element of lettersArray){
        newText += element.slice(0, amount);
        }
    return newText;
  },

  wordWrap: function(str, cols) {
    var stringArrays = str.split(" ");
    var formattedString = stringArrays.reduce(function(prev, post){
	if(prev.length + post.length>cols){
		prev+="\n";
    }else{
        prev+=" ";
    }
    return prev + post;});
    return formattedString;
  },

  reverseString: function(str) {
    var reversedString = "";
    for(let i=str.length-1; i>=0; i--){
        reversedString+= str[i];

        }
    return reversedString;
  }
};

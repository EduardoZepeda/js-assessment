exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
	  return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
          return fn.call(obj);
  },

  functionFunction: function(str) {
	  return function(arg){
	  	return str + ", " + arg;
	  }
  },

  makeClosures: function(arr, fn) {
  	var functionArray = [];
	var createFunction = function(value){
		return function(){
			return fn(value);
		} 
	} 
	for(var i = 0; i<arr.length; i++){
		functionArray.push(createFunction(arr[i]));

	}
  	return functionArray;
  },

  partial: function(fn, str1, str2) {
  	
  	return function(str3){
		return fn(str1, str2, str3);
	}
  },

  useArguments: function() {
	var total = 0;
        for(var i = 0; i<arguments.length; i++){
		total+= arguments[i];
	}
	return total;
  },

  callIt: function(fn) {
	  var argumentsArray = [];
	  //The first argument is the function to be passed
	  for(var i = 1; i<arguments.length; i++){
  	  	argumentsArray.push(arguments[i]);	
	  };
	  return fn.apply(null, argumentsArray);

  },
  partialUsingArguments: function(fn) {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments, 1);
    return function() {
    return fn.apply(this, args.concat(slice.call(arguments, 0)));}
  },

  curryIt: function(fn) {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments, 1);
    function resolver(num){
        args.push(num);
        if(args.length>=fn.length){
            return fn.apply(null, args);        
        }
        return resolver;
    }
    return resolver;
    
  }
};

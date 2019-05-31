exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
    return 0;
  },

  iterate: function(obj) {
    var listOfProperties = [];

    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
        listOfProperties.push(property + ': ' + obj[property]);
      }
    }

    return listOfProperties;
  }
};

exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var result = arr.indexOf(item);
    return result;
  },

  sum: function(arr) {
    var result = arr.reduce(function(value, valuePlusOne){ return value + valuePlusOne });
    return result;

  },

  remove: function(arr, item) {
    var result = _.without(arr, item);
    return result;

  },

  removeWithoutCopy: function(arr, item) {
    for(var i=0; i<arr.length; i++){
        if(arr[i] == item){
            delete arr[i];
            arr.splice(i, i+1);     
        }
    }
    return arr;
  },

  append: function(arr, item) {
    var list = arr;
    list.push(item);
    return list;
  },

  truncate: function(arr) {
    var list = arr;
    list.pop();
    return list;

  },

  prepend: function(arr, item) {
    var list = arr;
    list.unshift(item);
    return list;

  },

  curtail: function(arr) {
    var list = arr;
    list.shift();
    return list;

  }, 

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);

  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    counter = 0;
    for(var i = 0; i<arr.length; i++){
            if(arr[i] == item){
                counter+=1;            
            }
        }
        return counter;

  },

  duplicates: function(arr) {
    duplicates_array = []
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length; j++){
            if(arr[i] == arr[j]  && i!=j && duplicates_array.indexOf(arr[i]) == -1){
                duplicates_array.unshift(arr[i]);
            }
        }
    }
    return duplicates_array;
  },

  square: function(arr) {
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i]**2;
        }
    return arr;

  },

  findAllOccurrences: function(arr, target) {
    keepSearching = true;
    ocurrenceArray = [];
    searchAfter = 0;
    while(keepSearching){
        ocurrence = arr.indexOf(target, searchAfter);
        if(ocurrence != -1){
            searchAfter = ocurrence + 1;
            ocurrenceArray.unshift(ocurrence);
        }else{
            keepSearching = false;
        }
    }
    return ocurrenceArray;
  },
}

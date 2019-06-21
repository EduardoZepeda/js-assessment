exports = typeof window === 'undefined' ? global : window;
exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var addFiles = true;
    if(dirName != undefined && dirName != data.dir){
        addFiles = false;
    }
    var FilesInData = [];
    for(let f of data.files){
      if(f.hasOwnProperty('files')){
           if(addFiles){dirName = f.dir}
           FilesInData = FilesInData.concat(this.listFiles(f, dirName));
      }else{
       if(addFiles){
	     FilesInData = FilesInData.concat(f);
       }
      }
    } 
    return FilesInData

  },

  permute: function(arr) {
    let result = [];

    const permutation = function(arr, size) {
        if(size === 1){
            let copyArray = arr.slice()
            result.push(copyArray)
        }
        for(let i = 0; i<size; i++){
            permutation(arr, size-1)
            if(size % 2 === 0){
                [arr[i], arr[size-1]] = [arr[size-1], arr[i]]
            } else {
                [arr[0], arr[size-1]] = [arr[size-1], arr[0]]
            }
        }
    }
    permutation(arr, arr.length)

    return result;
  },

  fibonacci: function(n) {
    if(n<2){
        return n    
        }
    else {
        return this.fibonacci(n-1) + this.fibonacci(n-2)
    }
  },

  validParentheses: function(n) {

  }
};

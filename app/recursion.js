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

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};

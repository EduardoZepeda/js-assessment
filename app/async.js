exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve, reject){
            if(value === true){resolve(true)};
            if(value === 'success'){resolve('success')}
            
            
    });
  },

  manipulateRemoteData: function(url) {
        return fetch(url)
            .then(function(response){
                return response.json();
            }).then(function(response){
                arr = []
                for(var i=0; i<response["people"].length; i++){
                   arr.unshift(response["people"][i].name);  
                }
                return arr.sort();
            })
     

  }
};

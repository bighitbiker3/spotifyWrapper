var request = require('request');
var Promise = require('bluebird');

function getAuth(client_id, client_secret){

  //Promisifying this
  return new Promise(function(resolve, reject){
      var request = require('request');
      var together = new Buffer(client_id + ':' + client_secret).toString('base64').trim();
      console.log(together)
      var options = {
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + together
        },
        body: 'grant_type=client_credentials'
      };
      //Callback for request
      function cb(err, response, body){
        if(!err){
          var data = JSON.parse(response.body);
          resolve(data);
        } else {
          reject(err);
        }
      }
      request(options, cb);
  });
};

//DEFINE CONSTRUCTOR HERE
var SpotifyWrapper = function(obj){
  var self = this;
  this.client_id = obj.client_id;
  this.client_secret = obj.client_secret;
};


module.exports = {
  SpotifyWrapper: SpotifyWrapper,
  getAuth: getAuth
}

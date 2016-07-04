var getAuth = require('./getAuth').getAuth;
var baseUrl = 'https://api.spotify.com';
var request = require('request')

function makeUrl(baseUrl, endpoint, param, optionalEnding){
  if(!param) return baseUrl + endpoint;
  if(optionalEnding) return baseUrl + endpoint + param + optionalEnding;
  else return baseUrl + endpoint + param;
};

function baseFunction(endpoint, method, id, optionalEnding){
  var self = this;
  console.log(makeUrl(baseUrl, endpoint, id, optionalEnding))
  return new Promise(function(resolve, reject){
  getAuth(self.client_id, self.client_secret)
    .then(function(token){
        console.log(token.access_token)
        //Options for Request
          var options = {
            url: makeUrl(baseUrl, endpoint, id, optionalEnding),
            method: method,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + token.access_token
            }
          };
          //Callback for re  quest
          function cb(err, response, body){
            if(!err){
              var data = JSON.parse(response.body);
              resolve(data);
            } else {
              reject(err);
            }
          }
          //Call request
          request(options, cb);
    })
    .catch(function(err){console.log(err)});
  });
};

module.exports = baseFunction;

var SpotifyWrapper = require('./getAuth').SpotifyWrapper;
var request = require('request');
var Promise = require('bluebird');
var getAuth = require('./getAuth').getAuth;
var baseFunction = require('./baseFunction');

var test = new SpotifyWrapper({
  client_id: 'b4800c774e454fc0a730add3bb243e50',
  client_secret: '291ab63300ef4a398718fefe042a5bce'
});

SpotifyWrapper.prototype.getAlbums = function(albumId){
  return baseFunction.call(this, '/v1/albums/', 'GET', albumId);
};

SpotifyWrapper.prototype.getArtist = function(artistId){
  return baseFunction.call(this, '/v1/artists/', 'GET', artistId);
};

SpotifyWrapper.prototype.getTrack = function(trackId){
  return baseFunction.call(this, '/v1/tracks/', 'GET', artistId);
};

SpotifyWrapper.prototype.getMultipleTracks = function(trackId){
  return baseFunction.call(this, '/v1/tracks/?ids=', 'GET', artistId);
};

SpotifyWrapper.prototype.getArtistAlbums = function(artistId){
  return baseFunction.call(this, '/v1/artists/', 'GET', artistId, '/albums');
};

SpotifyWrapper.prototype.getArtistTopTracks = function(artistId, country){
  return baseFunction.call(this, '/v1/artists/', 'GET', artistId, '/top-tracks?country=' + country);
};

SpotifyWrapper.prototype.getRelatedArtists = function(artistId){
  return baseFunction.call(this, '/v1/artists/', 'GET', artistId, '/related-artists');
};

SpotifyWrapper.prototype.getAudioFeatures = function(songId){
  return baseFunction.call(this, '/v1/audio-features/', 'GET', songId);
};

SpotifyWrapper.prototype.getMultipleAudioFeatures = function(songIdCommaDelimited){
  return baseFunction.call(this, '/v1/audio-features?ids=', 'GET', songIdCommaDelimited);
};

SpotifyWrapper.prototype.getFeaturedPlaylists = function(){
  return baseFunction.call(this, '/v1/browse/featured-playlists', 'GET');
};

SpotifyWrapper.prototype.getNewReleases = function(){
  return baseFunction.call(this, '/v1/browse/new-releases', 'GET');
};





//song Id - 06AKEBrKUckW0KREUWRnvT
//artist Id - 2BTZIqw0ntH9MvilQ3ewNY
test.getNewReleases().then(function(data){console.log(data.albums)}).catch(console.log)
// test.getAlbums('0sNOF9WDwhWunNAHPD3Baj').then(console.log)

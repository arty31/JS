define('server_test_module',['chai', 'request','server_module'], function(chai,request,server ) {
/*
var requirejs = require('requirejs');

requirejs.config({
    baseUrl: 'app/',
  paths: {
          nodeRequire: require
      }

});

requirejs(['server_module'], function(server){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
*/
var expect  = chai.expect;
//var request = require("request");
//var server = requirejs("../../app/server_module");



describe("Color Code Converter API", function() {

before (function(){
          server.start();
      });
      
      after (function(){
          server.stop();
      }); 

  describe("RGB to Hex conversion", function() {  

    var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in hex", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("ffffff");
        done();
      });
    });

  });

  describe("Hex to RGB conversion", function() {
      
    var url = "http://localhost:3000/hexToRgb?hex=00ff00";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in RGB", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("[0,255,0]");
        done();
      });
    });
  });

});




});

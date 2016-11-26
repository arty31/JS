define('server_test_module',['chai', 'sinon','server_module'], function(chai,sinon,server ) {
//var requirejs = require('requirejs');

//requirejs.config({
//    baseUrl: 'app/',
//  paths: {
//          nodeRequire: require
//     }
//
//});

//requirejs(['server_module'], function(server){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function

/*
var expect  = require("chai").expect;
var request = require("request");
var sinon = require("sinon");
*/
var expect  = chai.expect;

describe("Sinon Tests Color Code Converter API", function() {
    
      before (function(){
          server.start();
      });
      
      after (function(){
          server.stop();
      }); 
      
  //Create a spy for the Request function
  var requestSpy = sinon.spy(request, 'Request');

  describe("RGB to Hex conversion", function() {

    var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
        printSpyInfo();
      });
    });

    it("returns the color in hex", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("ffffff");
        done();
        printSpyInfo();
      });
    });

  });

  describe("Hex to RGB conversion", function() {
    var url = "http://localhost:3000/hexToRgb?hex=00ff00";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
        printSpyInfo();
      });
    });

    it("returns the color in RGB", function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal("[0,255,0]");
        done();
        printSpyInfo();
      });
    });
  });
  
  
  function printSpyInfo(){
    console.log('requestSpy.callCount:'+ requestSpy.callCount); 
    console.log('requestSpy.returned:'+ requestSpy.returned());
    requestSpy.reset();
  }
  
});

});
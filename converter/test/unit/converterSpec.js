//define('converter_test_module',['chai','converter_module'], function(chai,converter) {
//define('converter_test_module',['../../app/converter_module'], function(converter) {
    
describe("Converter module", function() {

//var converter = require ('../../app/converter_module');
var converter = require ('../../app/converter');


var expect = chai.expect;
console.log('before describe');
describe("Color Code Converter", function() {

console.log('after describe');

    
    describe("RGB to Hex conversion", function() {
    it("converts the basic colors", function() {
      var redHex   = converter.rgbToHex(255, 0, 0);
      var greenHex = converter.rgbToHex(0, 255, 0);
      var blueHex  = converter.rgbToHex(0, 0, 255);

      expect(redHex).to.equal("ff0000");
      expect(greenHex).to.equal("00ff00");
      expect(blueHex).to.equal("0000ff");
    });
  });

  describe("Hex to RGB conversion", function() {
    it("converts the basic colors", function() {
      var red   = converter.hexToRgb("ff0000");
      var green = converter.hexToRgb("00ff00");
      var blue  = converter.hexToRgb("0000ff");

      expect(red).to.deep.equal([255, 0, 0]);
      expect(green).to.deep.equal([0, 255, 0]);
      expect(blue).to.deep.equal([0, 0, 255]);
    });
  });
  
 });
 
});

//});

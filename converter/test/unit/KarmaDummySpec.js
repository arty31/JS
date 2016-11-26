/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
describe ('Karma Dummy Test Spec', function () {
    var expect = chai.expect;
    
    it ('true to be true ', function (){
        
        var isTrue = true;
        expect(isTrue).to.equal(true); 
        console.log("dummy"); 
        
    });    
   
     it ('module to be difined ', function (){
        var test = require('../../app/converter_module');
        expect(test).to.be.defined; 
        console.log("dummy2"); 
        
    });   
    
    
    
}) ;



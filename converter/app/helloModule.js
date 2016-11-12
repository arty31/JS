/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define([], function () {
        
    function helloModule(name) {
        this.name = name;
    }
    
    helloModule.prototype = {
    
        printName : function (){
            return this.name;
        }

    };
    
     return helloModule;
 
});


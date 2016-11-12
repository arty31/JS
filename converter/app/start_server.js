var requirejs = require('requirejs');

requirejs.config({
  paths: {
          nodeRequire: require
  }

});

requirejs([
  // Load our app module and pass it to our definition function
  'server_module'
], function(server){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  server.start();
});




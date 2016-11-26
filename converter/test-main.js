var allTestFiles = []
var TEST_REGEXP = /(spec|test)\.js$/i

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '')
    allTestFiles.push(normalizedTestModule)
    console.info(allTestFiles);
  }
});
/*
require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',
  
      paths: {
                    //nodeRequire: require,
                    //'server_module':'app/server_module',
                    'converter_module':'app/converter_module',
                    'converter_test_module':'test/unit/converterSpec'
                    //'express':'./node_modules/express/lib/express',
                    //'sinon':'./node_modules/sinon/lib/sinon',
                    //'chai':'./node_modules/chai/lib/chai',
                    //'request':'./node_modules/request/lib/'
    },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
})
*/
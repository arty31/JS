// Karma configuration
// Generated on Sun Nov 20 2016 12:24:01 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha','browserify','requirejs','sinon-chai'],

    // list of files / patterns to load in the browser
    files: [
      //'node_modules/requirejs/require.js',
      //'node_modules/karma-requirejs/lib/adapter.js', 
      //'test-main.js',
      //'app/*.js',
      'test/**/*Spec.js',
       { pattern: 'app/*.js', included: false }           
       //{ pattern: 'test/**/*Spec.js', included: false }
       //{ pattern: 'test-main.js', included: true }
    ],


    // list of files to exclude
    exclude: [
        //'test/**/Karma*Spec.js',
        'app/start_server.js',
        'test/bit/serverSpec.js',
        'test/bit/server_sinonSpec.js'        
    ],
            client: {
            chai: {
                includeStack: true
            },
            mocha: {
                reporter: 'html',
                ui: 'bdd'
            }
        },
        


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
              'app/**/*.js':  ['browserify'],
              'test/**/*Spec.js': ['browserify']
    },

browserify: {
    watch:true,
debug: true,
//transform: [ 'brfs', 'browserify-shim' ]

transform: [
        ["babelify", { presets: "es2015" }]
]
},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
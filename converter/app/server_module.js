define([
    'express',
    './converter_module'
], function (express, converter) {

    return {

        start: function () {

            var app = express();

            app.get("/rgbToHex", function (req, res) {
                console.info('got request rgbToHex');
                var red = parseInt(req.query.red, 10);
                var green = parseInt(req.query.green, 10);
                var blue = parseInt(req.query.blue, 10);

                var hex = converter.rgbToHex(red, green, blue);

                res.send(hex);
            });

            app.get("/hexToRgb", function (req, res) {
                console.info('got request hexToRgb');
                var hex = req.query.hex;

                var rgb = converter.hexToRgb(hex);

                res.send(JSON.stringify(rgb));
            });
            
            httpServer = require('http').createServer(app);
            httpServer.listen('3000');
            console.info('Server started.');

        },
        
        stop : function () {
            console.info('Server stopped.');
            httpServer.close();
        }


    };


});



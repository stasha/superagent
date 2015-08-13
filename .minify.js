var compressor = require('node-minify');

// Using Google Closure
new compressor.minify({
    type: 'gcc',
    fileIn: 'lib/client.js',
    fileOut: 'lib/client.min.js',
    callback: function(err, min){
        console.log(err);
//        console.log(min);
    }
});
const fs = require('fs');
const prefix = 'data/';
const filename = 'transnon-palette-bitmap.bmp';

function transformNPBMP (buffer, callback) {

  fs.readFile(buffer, function (err, buffer ) {
    const bitsPerPixel = buffer.readInt16LE(28);
    console.log(bitsPerPixel); // 24 verifies non-palette bmp; other values means palette bmp
    const startPalette = buffer.readInt32LE(10);
    console.log(startPalette);  // 54 for non-palette bmp
    for (var i = startPalette; i < buffer.length; i++) {
      buffer[i] = 255 - buffer[i];
    }
    var newBuffer = Buffer.from(buffer);
    console.log(newBuffer);
    fs.writeFile(prefix + 'trans' + filename, newBuffer, function(err) {
      if(err) { 
        return console.log(err);
      }
    });
    callback(err, newBuffer);
  });

}

// transformNPBMP(prefix + filename, function (){console.log('transform ended');});

module.exports = transformNPBMP;
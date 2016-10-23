const fs = require('fs');
//next two separated for file-naming purposes
const prefix = 'data/';
const filename = 'transnon-palette-bitmap.bmp';

function transformNPBMP (buffer, callback) {

  fs.readFile(buffer, function (err, buffer ) {
    // const bitsPerPixel = buffer.readInt16LE(28); // 24 verifies non-palette bmp; other values are for paletted .bmps
    const startPalette = buffer.readInt32LE(10); // 54 for non-palette .bmp
    //the above two values would be needed for this app to handle both kinds of .bmps
    for (var i = startPalette; i < buffer.length; i++) {
      buffer[i] = 255 - buffer[i];
    }
    var newBuffer = Buffer.from(buffer);
    fs.writeFile(prefix + 'trans' + filename, newBuffer, function(err) {
      if(err) { 
        return console.log(err);
      }
    });
    callback(err, newBuffer);
  });

}

module.exports = transformNPBMP;
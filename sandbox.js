//palette-bitmap.bmp

var fs = require('fs');

// function createNewBuffer (buffer, callback){

//   fs.readFile(buffer, function (err, buffer ) {
//     console.log(buffer);
//     var newBuffer = Buffer.from(buffer);
//     console.log(newBuffer);
//     callback(err, newBuffer);
//   });
// }

// function createFileHeaderInfo (newBuffer, callback) {

//   //if bitsPerPixel = 24, it is non-palette
//   const startPalette = newBuffer.readInt32LE(10);
//   console.log(startPalette);  // 54 for non-palette; 1078 for palette
//   const bitsPerPixel = newBuffer.readInt16LE(28);
//   console.log(bitsPerPixel); // 24 for non-palette; 8 for palette


//   callback(null, startPalette);
  
// }

// createNewBuffer('data/non-palette-bitmap.bmp', function(err, newBuffer) {
//   createFileHeaderInfo(newBuffer, function() {

//   });
// });

function transformNP (buffer, callback) {

  fs.readFile(buffer, function (err, buffer ) {
    console.log(buffer);
    const bitsPerPixel = buffer.readInt16LE(28);
    console.log(bitsPerPixel); // 24 for non-palette; 8 for palette
    const startPalette = buffer.readInt32LE(10);
    console.log(startPalette);  // 54 for non-palette; 1078 for palette
    var newBuffer = Buffer.from(buffer);
    console.log(newBuffer);
    callback(err, newBuffer);
  });

  

}

allInOne('data/non-palette-bitmap.bmp', function(err, newBuffer)
var fs = require('fs');

function createNewBuffer (buffer, callback){

  fs.readFile(buffer, function (err, buffer ) {
    console.log(buffer);
    var newBuffer = Buffer.from(buffer);
    console.log(newBuffer);
    callback(err, newBuffer);
  });
}

function getOffset (newBuffer, callback) {

	size = newBuffer.slice(2,6);
	console.log(size);  // 66 75 = 26,229
  offset = newBuffer.slice(10,14);
  console.log(offset); // = 36 = 54
  callback(null, offset); // = 36 = 54
}

createNewBuffer('data/non-palette-bitmap.bmp', function(err, newBuffer) {
  getOffset(newBuffer, function() {

  });
});




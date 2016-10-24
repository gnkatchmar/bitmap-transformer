// running transformNPBMP already transformed .bmp should then equal original .bmp

const assert = require("chai").assert;
const transformNPBMP = require("../lib/transformNPBMP");
const fs = require("fs");
const buffer = "data/transnon-palette-bitmap.bmp";

//path of original .bmp (changing it to a different .bmp produces desired mocha fail)
var expectedResult;
fs.readFile("data/non-palette-bitmap.bmp", function read(err, data) {
	if (err) {
		throw err;
	}
	expectedResult = data;
});

describe("transformNPBMP", function() {
	it("twice-transformed .bmp should equal original .bmp", done => {
		transformNPBMP(buffer, (err, contents) => {
			if (err) return done(err);
			assert.deepEqual(contents,expectedResult);
			done();
		});
	});
});
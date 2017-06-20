var assert = require('assert');
var arrayToXML = require('../array_to_xml');

describe('Test array to XML', function() {
    describe('convert()', function() {
        it('average case', function() {
            assert.equal('<1>\n  <2>\n  </2>\n</1>\n', arrayToXML.convert([1, 2]));
        });
    });

    describe('convert()', function() {
        it('null case', function() {
            assert.equal('', arrayToXML.convert(null));
        });
    });

    describe('convert()', function() {
        it('empty case', function() {
            assert.equal('', arrayToXML.convert([]));
        });
    });
});

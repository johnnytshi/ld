var assert = require('assert');
var formatXML = require('../format_xml');

function invalidXMLError() {
    throw new Error("Invalid xml");
}

describe('Test string to XML', function() {
    describe('format()', function() {
        it('average', function() {
            assert.equal('<a>\n  <b>\n  </b>\n</a>\n', formatXML.format('<a><b></b></a>'));
        });
    });

    describe('format()', function() {
        it('peer nodes', function() {
            assert.equal('<a>\n  <b>\n  </b>\n  <c>\n  </c>\n</a>\n', formatXML.format('<a><b></b><c></c></a>'));
        });
    });

    describe('format()', function() {
        it('mismatch element', function() {
            assert.throws(
                () => {
                    formatXML.format('<a><b></c></a>');
                },
                /Invalid xml/, 'did not throw with expected message'
            );
        });
    });

    describe('format()', function() {
        it('malformatted element', function() {
            assert.throws(
                () => {
                    formatXML.format('<a><b>>/b></a>');
                },
                /Invalid xml/, 'did not throw with expected message'
            );
        });
    });

    describe('format()', function() {
        it('missing element', function() {
            assert.throws(
                () => {
                    formatXML.format('<a><b></b>');
                },
                /Invalid xml/, 'did not throw with expected message'
            );
        });
    });
});

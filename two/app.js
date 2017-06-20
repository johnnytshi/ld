!'use strict';
/*
    1. Tokenize the string
    2. Process the array

    NOTE: can also do this with state machine like SAX
*/
var input = "<a><b><c><d><e><f></f></e></d></c></b></a>";
var formatXML = require('./format_xml');
console.log(formatXML.format(input));

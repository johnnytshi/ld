!'use strict';

// since this just holds a utility function (statless), singlton makes more sense
module.exports = {
    _error: function() {
        throw new Error('Invalid xml');
    },

    format: function(xml_str) {
        if (!xml_str || xml_str.length === 0) this._error();

        // trim the string
        xml_str = xml_str.trim();
        if (xml_str.length === 0) this._error();

        // the first char should be <, and the last char should be >
        if (xml_str[0] !== '<' || xml_str[xml_str.length - 1] !== '>') this._error();

        // remove the the first '<' and last '>'
        xml_str = xml_str.slice(1, xml_str.length - 1);

        // split the token with regex, result should be [ 'a', 'b', 'c', '/c', '/b', '/a' ]
        var tokens = xml_str.split(/ *> *< */g);

        // process each token
        var formatted_xml = '';
        var xml_validator = new RegExp(/^\/? *[a-zA-Z]*$/); // in real life, this is more complex
        var self = this;
        var matcher = []; // works like a stack, used to make sure the elements match
        var inden = '';
        tokens.forEach(function(e) {
            e = e.trim(); // empty spaces will get removed as part of the formatting
            // validate the token itself, no < or > and with a possible leading /
            if (e.length === 0 || !xml_validator.test(e)) self._error();

            // check if the current element starts with /
            if (e[0] === '/') {
                // if so, check if the last element on matcher matches it
                if (matcher.length === 0 || matcher[matcher.length - 1] !== e.substr(1)) {
                    self._error();
                } else { // remove the last element from matcher, and remove 2 spaces from the inden
                    matcher.pop();
                    inden = inden.substr(2);
                    formatted_xml += `${inden}<${e}>\n`;
                }
            } else { // add the element to the matcher, and add 2 spaces to the inden
                formatted_xml += `${inden}<${e}>\n`;
                matcher.push(e);
                inden += '  ';
            }
        });

        return formatted_xml;
    }
};

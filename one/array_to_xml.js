!'use strict';

// since this just holds a utility function (statless), singlton makes more sense
module.exports = {
    convert: function(arr) {
        if (!arr) return "";

        // inden: is the '  ' we put in front of the line. This can easily be done iteratively with a stack
        function recursiveConvert(arr, inden) {
            // when reached the end, return the string
            if (arr.length === 0) return "";

            // build the first half
            str = `${inden}<${arr[0]}>\n`;

            // continue, add one more indentation (2 space)
            str += recursiveConvert(arr.slice(1), inden + '  ');

            // build the sec half, indentation should be back to the current stack value, which is the same as the first half
            str += `${inden}</${arr[0]}>\n`;

            return str;
        }

        return recursiveConvert(arr, "");
    }
}

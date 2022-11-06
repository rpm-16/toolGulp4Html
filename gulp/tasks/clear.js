
const del = require('del');
const path = require("../config/path.js");

// del build
const clear = () => {
    return del(path.root);

}

module.exports = clear;
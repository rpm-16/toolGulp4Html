const {src, dest} = require("gulp");
const path = require("../config/path.js");

// Плагины
const pugs = require('gulp-pug');

// Pug build
const pug = () => {
    return src(path.pug.src) 
     // plugins
    .pipe(pugs({
        pretty: true
    }))
    .pipe(dest(path.pug.dest))
}

module.exports = pug;
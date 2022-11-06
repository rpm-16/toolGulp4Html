const {src, dest} = require("gulp");

// Плагины
const pugs = require('gulp-pug');

// Css build
const css = () => {
    return src("./src/pug/pages/*.pug") 
     // plugins
    .pipe(pugs({
        pretty: true
    }))
    .pipe(dest("./build"))
}

module.exports = pug;
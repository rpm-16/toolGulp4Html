const {src, dest} = require("gulp");
const path = require("../config/path.js");

// Плагины
    // make one css file from several
    const concat = require("gulp-concat");
    // make prefixes for support old browsers
    const autoprefixer = require("gulp-autoprefixer");
    const csso = require("gulp-csso");
    const rename = require("gulp-rename");
    const groupCssMediaQueries = require("gulp-group-css-media-queries");


// Css build
const css = () => {
    return src(path.css.src,{sourcemaps: true}) 
     // plugins
    .pipe(concat("main.css"))
    .pipe(autoprefixer())
    .pipe(groupCssMediaQueries())
    .pipe(dest(path.css.dest,{sourcemaps: true}))
    .pipe(rename({suffix: ".min"}))
    .pipe(csso())
    .pipe(dest(path.css.dest,{sourcemaps: true}))
}

module.exports = css;
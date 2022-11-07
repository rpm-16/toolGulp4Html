const {src, dest} = require("gulp");
const path = require("../config/path.js");

// Плагины
    // make prefixes for support old browsers
    const autoprefixer = require("gulp-autoprefixer");
    const csso = require("gulp-csso");
    const rename = require("gulp-rename");
    const groupCssMediaQueries = require("gulp-group-css-media-queries");
    const sass = require("gulp-sass")(require("sass"));


// Css build
const scss = () => {
    return src(path.scss.src,{sourcemaps: true}) 
     // plugins
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(groupCssMediaQueries())
    .pipe(dest(path.scss.dest,{sourcemaps: true}))
    .pipe(rename({suffix: ".min"}))
    .pipe(csso())
    .pipe(dest(path.scss.dest,{sourcemaps: true}))
}

module.exports = scss;
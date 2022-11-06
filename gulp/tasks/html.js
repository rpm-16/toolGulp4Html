const {src, dest} = require("gulp");
const path = require("../config/path.js");

// Html build
const html = () => {
    return src(path.html.src) 
    // plugins
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(dest(path.html.dest))
    .pipe(browserSync.stream())
}

module.exports = html;
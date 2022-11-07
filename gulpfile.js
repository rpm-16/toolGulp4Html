// https://www.youtube.com/watch?v=qSZvGlIKGPg&list=WL&index=1  видео по настройке Галпа
const {watch, series, parallel} = require("gulp");
const browserSync = require('browser-sync').create();
const path = require("./gulp/config/path.js");

// Задачи
const clear = require('./gulp/tasks/clear.js');
const pug = require('./gulp/tasks/pug.js');
// const css = require('./gulp/tasks/css.js');
const scss = require('./gulp/tasks/scss.js');


// Плагины
const htmlmin = require('gulp-htmlmin');
const pugs = require('gulp-pug');



// server
const server = () =>{
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
} 

// watch
const watcher = () => {
    watch(path.pug.watch, pug).on ("all", browserSync.reload);
    watch(path.scss.watch, scss).on ("all", browserSync.reload);
}

// exports.css = css;
exports.scss = scss;

//Construction
exports.dev= series(
    clear,
    parallel(pug, scss),
    parallel(watcher, server)
);
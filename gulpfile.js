// https://www.youtube.com/watch?v=qSZvGlIKGPg&list=WL&index=1  видео по настройке Галпа
const {watch, series, parallel} = require("gulp");
const browserSync = require('browser-sync').create();
const path = require("./gulp/config/path.js");

// Задачи
const clear = require('./gulp/tasks/clear.js');
const pug = require('./gulp/tasks/pug.js');


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
}

//Construction
exports.dev= series(
    clear,
    pug,
    parallel(watcher, server)
);
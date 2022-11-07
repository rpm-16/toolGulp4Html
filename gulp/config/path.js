const pathSrc="./src";
const pathDest = "./build";

module.exports ={
    root: pathDest,
    
    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },

    pug: {
        src: pathSrc + "/pug/pages/*.pug",
        watch: pathSrc + "/pug/**/*.pug",
        dest: pathDest
    },

    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest +"/css/"
    },

    scss: {
        src: pathSrc + "/sass/*.{sass,scss}",
        watch: pathSrc + "/sass/**/*.{sass,scss}",
        dest: pathDest +"/css/"
    }
}
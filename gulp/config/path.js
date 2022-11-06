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
    }
}
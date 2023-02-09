const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()

// Compile the scss files
function build() {
    console.log('Compiling styling')
    // Where are my scss file
    return gulp.src('./src/**/*.scss')
    // pass files through sass compiler
    .pipe(sass())
    // where I want to save the compiled main CSS
    .pipe(gulp.dest('./src'))
    // Stream to all browsers -- Auto reload
    .pipe(browserSync.stream())

}

// Browser live reload -- not working yet
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./src/**/*.scss', build)
}

exports.build = build;
exports.watch = watch;
const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const sass = gulpSass(require('sass'));

gulp.task('sass',async function(){
    gulp.src('index.scss').pipe(sass()).pipe(gulp.dest('css'))
})






























// // task
// gulp.task('log',function(){
//     console.log("logging")
// })
// // src - dest
// gulp.task('move', function(){
//     gulp.src('css1/*').pipe(gulp.dest('css2'))
// })
// // watch
// gulp.task('watching',function(){
//     gulp.watch('css1/style.css',async function(){
//         gulp.src('css1/*').pipe(gulp.dest('css2'))
//     })
// })
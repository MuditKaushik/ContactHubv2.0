import * as gulp from 'gulp'
import * as path from 'path'
import * as gulpUtil from 'gulp-util'
import * as uglify from 'gulp-uglify'
import * as sequence from 'run-sequence'

gulp.task('appmin', () => {
    let srcPath = path.join(__dirname, "/app/**/*.js");
    let destPath = path.join(__dirname, "/appmin/");
    return gulp.src(srcPath).pipe(uglify()).pipe(gulp.dest(destPath));
});



gulp.task('default', () => {
    return sequence('appmin');
});
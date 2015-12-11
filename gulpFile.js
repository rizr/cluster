var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('default', function () {
    var target = gulp.src('./index.html');
    var sources = gulp.src(['./js/**/*.js'], {read: false});
    return target.pipe(inject(sources))
        .pipe(gulp.dest('./'));
});
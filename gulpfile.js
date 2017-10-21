var gulp    = require('gulp'),
    uglyfly = require('gulp-uglyfly'),
    watch   = require('gulp-watch'),
    rename  = require('gulp-rename');

// Watch tasks.
gulp.task( 'watch', function() {
	gulp.watch( './sass/**/*.{scss,sass}', ['sass'] );
} );

// Compress JS.
gulp.task('compress', function() {
  gulp.src('app/assets/js/*.js')
    .pipe(gulp.dest('app/assets/js'))
    .pipe(uglyfly())
    .pipe(rename('admin.min.js'))
    .pipe(gulp.dest('app/assets/js'));
});

gulp.task('default', [ 'watch', 'compress' ]);
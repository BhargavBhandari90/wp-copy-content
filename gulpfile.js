var gulp    = require('gulp'),
    minify = require('gulp-minify'),
    watch   = require('gulp-watch'),
    rename  = require('gulp-rename');

// Compress JS.
gulp.task('compress', function() {
    gulp.src('app/assets/js/*.js')
    .pipe(gulp.dest('app/assets/js'))
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('app/assets/js'));
});

gulp.task('default', [ 'compress' ]);
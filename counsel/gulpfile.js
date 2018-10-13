var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');


var notify = require("gulp-notify");

gulp.task('sass', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .on('error', notify.onError('<%= error.message %>'))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({stream: true}));
});
gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('scss/**/*.scss', ['sass']);			
	gulp.watch('*.html', browserSync.reload);	
	gulp.watch('*.js', browserSync.reload);
});

gulp.task('browser-sync', function() {	
	browserSync({						
		server: {						
      baseDir: './'      			
		},		
		notify: false
	});
});
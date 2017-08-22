var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/materialize-css/dist/js/materialize.js', 'src/js/main.js', 'src/js/typed.js'])
		.pipe(concat('script.js'))
		// carpeta dist
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('style', function(){
	gulp.src(['node_modules/materialize-css/dist/css/materialize.css', 'src/css/*.css'])
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function() {
	gulp.watch('src/css/*.css', ['style']);
});


gulp.task('default', ['script', 'style', 'watch']);
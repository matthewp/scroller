var gulp = require("gulp");
var concat = require('gulp-concat');
var wrap = require("gulp-wrap");

var files = [
  'src/Animate.js',
  'src/Scroller.js'
];

var template = 'steal(function() {\n' +
  'if(steal.isRhino) return;\n' +
  '<%= contents %>' + '\n' +
  'return Scroller;\n' +
  '});';

gulp.task("build", function() {
  gulp.src(files)
    .pipe(concat('all.js'))
    .pipe(wrap(template))
    .pipe(gulp.dest('./dist/'))
});

gulp.task("default", ["build"]);

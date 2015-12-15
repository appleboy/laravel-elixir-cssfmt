var elixir = require('laravel-elixir');
var gulp = require('gulp');
var cssfmt = require('gulp-cssfmt');

elixir.extend('cssfmt', function(src, outputDir) {
  new elixir.Task('cssfmt', function() {
    return gulp.src(src)
      .pipe(cssfmt())
      .pipe(gulp.dest(outputDir))
      .pipe(new elixir.Notification('CSSfmt Compiled!'));
  }).watch(src);
});

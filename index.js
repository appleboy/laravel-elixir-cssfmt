var gulp = require("gulp");
var Elixir = require('laravel-elixir');
var cssfmt = require('gulp-cssfmt');

/**
 * CSSfmt Compilation
 *
 * @param  {string} src source path
 * @param  {string} output destination path
 */
Elixir.extend('cssfmt', function(src, output) {
  new Elixir.Task('cssfmt', function() {
    return gulp.src(src)
      .pipe(cssfmt())
      .pipe(gulp.dest(output))
      .pipe(new Elixir.Notification('CSSfmt Compiled!'));
  }).watch(src);
});

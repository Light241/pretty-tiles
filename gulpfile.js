var gulp = require('gulp');
var concat = require('gulp-concat');
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var changed = require('gulp-changed');
var stylus = require('gulp-stylus');
var nib = require('nib');


gulp.task('stylus', function () {
    var src = 'src/stylus/**/*.styl';
    var dest = 'dist/pretty_tiles.css';

    return gulp.src(src)
        //.pipe(changed(dest))
        .pipe(concat("app.styl"))
        .pipe(stylus({use: [nib()], compress: true}))
        .on('error', console.log)
        .pipe(gulp.dest(dest));
});

gulp.task("jade", function () {
    var src = 'examples/dev.jade';
    var dest = 'examples';

    return gulp.src([src])
        .pipe(changed(dest, {extension: '.html'}))
        .pipe(jade({pretty: true}))
        .on('error', console.log)
        .pipe(gulp.dest(dest));
});

gulp.task('watch', function () {
    gulp.watch(['examples/dev.jade'], ['jade']);
    gulp.watch(['src/stylus/**/*.styl'], ['stylus']);
});

gulp.task("build", function () {
    gulp.start("jade");
    gulp.start("stylus");
});

gulp.task("default", function () {
    gulp.start("build");
    gulp.start("watch");
});
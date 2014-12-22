var gulp = require('gulp');
var concat = require('gulp-concat');
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var changed = require('gulp-changed');
var stylus = require('gulp-stylus');
var nib = require('nib');
var connect = require('gulp-connect');

gulp.task('stylus', function () {
    var src = 'src/stylus/**/*.styl';
    var dest = 'dist';

    return gulp.src(src)
        //.pipe(changed(dest))
        .pipe(concat("pretty_tiles.styl"))
        //.pipe(stylus({use: [nib()], compress: true}))
        .pipe(stylus({use: [nib()]}))
        .on('error', console.log)
        .pipe(gulp.dest(dest))
        .pipe(connect.reload());
});

gulp.task("jade", function () {
    var src = 'tests/**/*.jade';
    var dest = 'tests';

    return gulp.src([src])
        .pipe(changed(dest, {extension: '.html'}))
        .pipe(jade({pretty: true}))
        .on('error', console.log)
        .pipe(gulp.dest(dest))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['tests/**/*.jade'], ['jade']);
    gulp.watch(['src/stylus/**/*.styl'], ['stylus']);
});

gulp.task("build", function () {
    gulp.start("jade");
    gulp.start("stylus");
});

gulp.task('webserver', function () {
    connect.server({
        root: [__dirname],
        port: 8001,
        livereload: true
    });
});

gulp.task("default", function () {
    gulp.start("build");
    gulp.start("watch");
    gulp.start("webserver");
});
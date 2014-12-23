var gulp = require('gulp');
var concat = require('gulp-concat');
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var changed = require('gulp-changed');
var stylus = require('gulp-stylus');
var nib = require('nib');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');

gulp.task('stylus', function () {
    var src = 'src/stylus/**/*.styl';
    var dest = 'dist';

    return gulp.src(src)
        //.pipe(changed(dest))
        .pipe(concat("t_under.styl"))
        //.pipe(stylus({use: [nib()], compress: true}))
        .pipe(stylus({use: [nib()]}))
        .on('error', console.log)
        .pipe(gulp.dest(dest))
        .pipe(connect.reload());
});

gulp.task('min', function () {
    var src = 'src/stylus/**/*.styl';
    var dest = 'dist';

    return gulp.src(src)
        .pipe(concat("t_under.styl"))
        .pipe(stylus({use: [nib()], compress: true}))
        .on('error', console.log)
        .pipe(rename('t_under.min.css'))
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

gulp.task('lint', function () {
    return gulp.src('tests/**/*.js')
        .pipe(jshint({
            globalstrict: true,
            strict: false,
            globals: {
                angular: true,
                localStorage: true,
                console: true
            }
        }))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task("js", function () {
    var src = 'tests/src/**/*.js';
    var dest = 'tests';

    return gulp.src([src])
        .pipe(changed(dest))
        .pipe(concat("app.js"))
        .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
        .on('error', console.log)
        .pipe(gulp.dest(dest));
});

gulp.task('watch', function () {
    gulp.watch(['tests/**/*.jade'], ['jade']);
    gulp.watch(['src/stylus/**/*.styl'], ['stylus']);
});

gulp.task("build", function () {
    gulp.start("jade");
    gulp.start("stylus");
    gulp.start("min");
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
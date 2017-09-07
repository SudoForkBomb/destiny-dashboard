let clean = require('gulp-clean');
let gulp = require('gulp');
let replace = require('gulp-replace');
let runSequence = require('run-sequence');
let shell = require('gulp-shell');

// This is main task for production use
gulp.task('build', function (done) {
    console.log("Starting build");
    runSequence('version', 'clean', 'aot_compile', 'service-worker', 'publish', function () {
        done();
    });
});


gulp.task('version', shell.task([
    'npm version patch'
]));

gulp.task('clean', function (done) {
    // Clean Java dir
    gulp.src('../java/src/main/webapp/*.js').pipe(clean({ force: true }));
    gulp.src('../java/src/main/webapp/*.png').pipe(clean({ force: true }));
    gulp.src('../java/src/main/webapp/*.css').pipe(clean({ force: true }));
    gulp.src('../java/src/main/webapp/*.zip').pipe(clean({ force: true }));
    gulp.src('../java/src/main/webapp/favicon.ico').pipe(clean({ force: true }));
    gulp.src('../java/src/main/webapp/manifest.json').pipe(clean({ force: true }));
    gulp.src('../java/src/main/webapp/index.html').pipe(clean({ force: true }));

    // Clean cordova dir
    gulp.src('../cordova/www/*').pipe(clean({ force: true }));

    done();
});

gulp.task('aot_compile', shell.task([
    'ng build --prod --aot --build-optimizer --no-sourcemap --base-href ./'
]));

gulp.task('service-worker', shell.task([
    'npm run precache'
]));

gulp.task('publish', function (done) {
    //Copy files to Java directory
    gulp.src('./build/*.js').pipe(gulp.dest('../java/src/main/webapp'));
    gulp.src('./build/*.png').pipe(gulp.dest('../java/src/main/webapp'));
    gulp.src('./build/*.css').pipe(gulp.dest('../java/src/main/webapp'));
    gulp.src('./build/*.zip').pipe(gulp.dest('../java/src/main/webapp'));
    gulp.src('./build/favicon.ico').pipe(gulp.dest('../java/src/main/webapp'));
    gulp.src('./build/manifest.json').pipe(gulp.dest('../java/src/main/webapp'));
    //Defer js
    gulp.src('./build/index.html').pipe(replace('src=', 'defer src=')).pipe(gulp.dest('../java/src/main/webapp'));

    
    //Copy files to Cordova directory
    gulp.src('./build/*.js').pipe(gulp.dest('../cordova/www'));
    gulp.src('./build/*.png').pipe(gulp.dest('../cordova/www'));
    gulp.src('./build/*.css').pipe(gulp.dest('../cordova/www'));
    gulp.src('./build/*.zip').pipe(gulp.dest('../cordova/www'));
    gulp.src('./build/favicon.ico').pipe(gulp.dest('../cordova/www'));
    gulp.src('./build/manifest.json').pipe(gulp.dest('../cordova/www'));
    
});


gulp.task('cordova-build'), shell.task([
    'cordova build android'
]);
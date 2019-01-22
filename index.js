'use strict';

var gulp = global.gulp = global.gulp || require('gulp');

gulp.task('copy-files', function (done) {
    var fs = require('fs-extra');
    fs.copy('', '', {
            clobber: true,
            filter: n => {
                if (fs.lstatSync(n).isDirectory()) {
                    return true;
                }
                var result = /pro/g.test(n);
                return result;
            }
        },
        () => {
            console.log('done');
            done();
        }
    );
});
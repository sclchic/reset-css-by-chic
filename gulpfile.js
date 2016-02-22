/**
 * @file  : gulp配置文件
 * @author: Chic
 * @update: 2/22/2016
 */
var gulp = require('gulp');

// 引入组件
var less = require('gulp-less');//编译Less

//引入PostCss
var postcss = require('gulp-postcss');
var px2rem = require('postcss-px2rem');//px转换成rem
var autoprefixer = require('autoprefixer-core');

gulp.task('less', function() {
    gulp.src('./wap/css/demo.less')
        .pipe(less())
        .pipe(postcss([
            px2rem({
                remUnit: 75
            })
        ]))
        .pipe(gulp.dest('./wap/css/'));
});

gulp.task('default', function(){
    gulp.run('less');
    // 监听文件变化，若有改动则执行以下三个任务
    gulp.watch('./wap/css/demo.less', function(){
        gulp.run('less');
    });
});

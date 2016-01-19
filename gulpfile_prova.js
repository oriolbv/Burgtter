var gulp = require('gulp')

gulp.task('welcome', function () {
    console.log('welcome to gulp!')
})

// if you run the hello task (gulp hello), it will first wait for the welcome task to complete
gulp.task('hello', ['welcome'],function () {
    console.log('hello world')
})
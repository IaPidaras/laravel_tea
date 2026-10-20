const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 */

// Указываем, что корень для сборки — папка public
mix.setPublicPath('public');

// Складываем файлы сразу в assets/, без дублирования слова public
mix.js('resources/js/app.js', 'assets/js')
    .js('node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'assets/js')

    .sass('resources/css/app.scss', 'assets/css')
    .sass('node_modules/bootstrap/scss/bootstrap.scss', 'assets/css');

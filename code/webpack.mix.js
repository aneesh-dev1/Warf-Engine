const mix = require('laravel-mix');


mix.disableNotifications()
.options({processCssUrls: false})



/* ----------------------------
Compile Warf Engine script
------------------------------ */

// Template related global css
.copy('warf_engine/develop/css/global.css','build/warf_engine/dist/global.css')

// Warf Engine builder css
.sass('warf_engine/develop/sass/gramateria.scss','build/warf_engine/dist/gram.min.css')

// Template related global js
.copy('warf_engine/develop/js/global.js','build/warf_engine/dist/global.js')

// Warf Engine builder js
.js('warf_engine/develop/js/gramateria.js','build/warf_engine/dist/gram.min.js')


// Comment this off when there is no change for warf_engine fonts and svg.
// const assets_data = [
//     'fonts',
//     'svg'
// ]
// for(let asset of assets_data){
//     mix.copyDirectory(`warf_engine/develop/${asset}`,`warf_engine/dist/${asset}`)
// }
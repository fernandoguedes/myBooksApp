const fs = require('fs');
const uglify = require('uglify-js');
const concat = require('concat');

const files = concat([
  'app/app.module.js',
  'app/components/search/search.controller.js',
  'app/shared/services/book.service.js',
  'app/shared/services/storage.service.js',
  'app/components/details/details.controller.js',
  'app/components/favorites/favorites.controller.js',
  'app/shared/directives/book-card/book-card.directive.js',
  'app/shared/directives/tabs/tabs.directive.js',
  'app/shared/filters/highlight.filter.js'
]).then(compress);

function compress(code) {
    const minified = uglify.minify(code);

    fs.writeFile('dist/app.min.js', minified.code, err => {
        if (err) {
            console.log(err)
        }

        console.log('Build realizado com sucesso.');
    })
}

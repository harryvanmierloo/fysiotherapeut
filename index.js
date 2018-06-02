var Metalsmith  = require('metalsmith');
var collections = require('metalsmith-collections');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var assets      = require('metalsmith-assets');

Metalsmith(__dirname)
  .metadata({
    title: "fysiotherapeut.nl",
    description: "Dé website voor de fysiotherapeut",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(collections({
    instruments: {
      pattern: 'instruments/*.md',
    },
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  
  .use(assets({
    source: './src/assets',
    destination: './assets'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });

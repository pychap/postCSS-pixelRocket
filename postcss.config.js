module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-partial-import')({ 
      prefix: '_', 
    }),
    require('postcss-nested'),
    require('postcss-import'),
    require('postcss-for'),
    require('postcss-each'),
    require('postcss-each-variables'),
    require('postcss-custom-media'),
    require('postcss-at-rules-variables')
  ],
}
/**
 * Deploys to gh-pages
 */
const ghpages = require('gh-pages')
const fse = require('fs-extra')

fse.copySync('./CNAME', './dist/CNAME')

ghpages.publish('dist', (e) => {
  if (e) {
    console.log(e)
    return
  }

  console.log('published')
})

/**
 * Deploys to gh-pages
 */
const ghpages = require('gh-pages')

ghpages.publish(['./CNAME', './dist'], () => {
  console.log('published')
})

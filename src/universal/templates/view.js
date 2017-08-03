import { html } from 'common-tags'

const view = ({ title, children, initialState = { } }) => {
  const tracking = `
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-39611341-3', 'auto');
  ga('send', 'pageview');

</script>`
  return (html`
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>${title}</title>
${tracking}
      <link rel="stylesheet" type="text/css" href="site.css">
    </head>
    <body>
      <div id="app">
${children}
      </div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="bundle.js"></script>
    </body>
  </html>
  `)
}

export default view

import React from 'react'
import { renderToString } from 'react-dom/server'
import writeFile from 'write'

import Home from '../src/pages'
import view from '../src/universal/templates/view'

const run = () => {
  const content = renderToString(<Home />)
  const out = view({ title: 'Hire K', children: content })
  writeFile.sync('./dist/index.html', out)
}

run()

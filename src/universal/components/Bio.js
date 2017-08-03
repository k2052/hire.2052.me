import React from 'react'
import remark from 'remark'
import reactRenderer from 'remark-react'

import content from './BioText.md'

const Bio = () => {
  return (
    <div className="Bio">
      {remark().use(reactRenderer).processSync(content).contents}
    </div>
  )
}

export default Bio

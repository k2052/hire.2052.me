import React from 'react'
import remark from 'remark'
import reactRenderer from 'remark-react'

import content from './WhatICanDoText.md'

const WhatICanDo = () => {
  return (
    <div className="WhatICanDo">
      {remark().use(reactRenderer).processSync(content).contents}
    </div>
  )
}

export default WhatICanDo

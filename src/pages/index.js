import React from 'react'

import Bio from '../universal/components/Bio'
import WhatICanDo from '../universal/components/WhatICanDo'
import Availability from '../universal/components/Availability'
import Rates from '../universal/components/Rates'
import Contact from '../universal/components/Contact'

const Home = () => {
  return (
    <div className="Home page Main">
      <Bio />
      <WhatICanDo />
      <Availability />
      <Rates />
      <Contact />
    </div>
  )
}

export default Home

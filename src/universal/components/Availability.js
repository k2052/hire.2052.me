import React from 'react'

const weeks = {
  'Aug 7–Aug 11': {
    booked: false,
  },
  'Aug 14–Aug 18': {
    booked: false,
  },
  'Aug 21–Aug 25': {
    booked: false,
  },
  'Aug 28–Sep 1': {
    booked: false,
  },
  'Sep 4–Sep 8': {
    booked: false,
  },
  'Sep 11–Sep 15': {
    booked: false,
  },
  'Sep 18–Sep 22': {
    booked: false,
  },
  'Sep 25–Sep 29': {
    booked: false,
  },
}

const Week = ({ date, booked }) => {
  const dates = date.split('–')
  const subject = `I want to hire you from ${dates[0]} to ${dates[1]}`
  return (
    <div>
      <span className="Date">{date}: </span>
      { !booked && <a href={`mailto=k@2052.me?subject=${subject}`}>Available</a> }
      { booked && <span className="booked">Booked</span>}
    </div>
  )
}

const Availability = () => {
  const weeksJSX = []
  Object.keys(weeks).forEach((k) => {
    const week = weeks[k]
    weeksJSX.push(<li key={k}><Week date={k} {...week} /></li>)
  })

  return (
    <div className="Availability">
      <h2>Availability</h2>
      <p>
        You can hire me in weekly blocks (40 hours) or full-time. I am willing to
        go anywhere for onsite work if you pay my travel expenses (upfront) and
        rent me an Airbnb. I am willing to relocate. Remote flexibility is not a must but highly desired.
      </p>
      <ul className="Availability">
        {weeksJSX}
      </ul>
    </div>
  )
}

export default Availability

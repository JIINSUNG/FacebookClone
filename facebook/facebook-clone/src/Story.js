import React from 'react'
import './Story.css'
import { Avatar } from '@material-ui/core'

function Story({image, profilesrc, title}) {
  return (
    <div style = {{backgroundImage: `url(${image})`}} className="Story">
      <Avatar className='story__avatar' src={profilesrc} />
      <h4>{title}</h4>
    </div>
  )
}

export default Story 
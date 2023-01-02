import React from 'react'
import './Widgets.css'
function Widgets() {
  return (
    <div className='widgets'>
      <iframe src= "http://daum.net" width="340" height = "100%" style = {{border : "none", overflow : "hidden"}} allowTransparency="true" allow="encrypted-media"></iframe>
    </div>
  )
}

export default Widgets

import React from 'react'

function MyCatch(props) {
  return(
    <div className='MyCatch'>
      {props.loggedIn &&
        <h1>My catches will appear here</h1>
      }
    </div>
  )
}

export default MyCatch;
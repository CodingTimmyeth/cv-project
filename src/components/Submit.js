import React from 'react'

const Submit = () => {

  const displayCV = (e) => {
  }

  return (
    <div className='submit'>
      <div className='title'>
        <h2>Create CV!</h2>
      </div>
        <button onClick={displayCV}> Create </button>
        <div></div>
    </div>
  )
}

export default Submit
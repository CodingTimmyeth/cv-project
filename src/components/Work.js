import React from 'react'
import { useState } from 'react'

const Work = () => {
    const [companyName, setCompanyName] = useState('')
    const [position, setPosition] = useState('')
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showError, setShowError] = useState(false)

    const handleCompanyName = (e) => {
        setCompanyName(e.target.value)
    }
    const handlePosition = (e) => {
        setPosition(e.target.value)
    }
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
      }
    
      const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
      }
      const handleSubmit = (e) => {
        e.preventDefault()
        if(
            companyName === '' ||
            position === '' ||
            startDate === '' ||
            endDate === ''
        ) {
            setShowError(true)
            console.log('empty');
        } else {
            setShowError(false)
        }
      }
    
  return (
    <div>
    <h1>Work Experience</h1>
        <section>
            <div className='first-input'>
                <label> Company: </label>
                <input 
                type="text" 
                placeholder='Company'
                value={companyName}
                onChange={handleCompanyName}
                onBlur={handleCompanyName}/>
                {showError && companyName === '' && (
                    <p className='error'>Can't Leave Blank!</p>
                )}
            </div>
            <div className='first-input'>
                <label> Position: </label>
                <input 
                type="text" 
                placeholder='Frontend Developer' 
                value={position}             
                onBlur={handlePosition} 
                onChange={handlePosition}
                />
                {showError && position === '' && (
                    <p className='error'>Can't Leave Blank!</p>
                )}
            </div>
            <div className='first-input'>
                <label> From:</label>
                <input 
                type="date" 
                value={startDate} 
                onBlur={handleStartDateChange} 
                onChange={handleStartDateChange}
                required
                />
                {showError && startDate === '' && (
                    <p className='error'>Can't Leave Blank!</p>
                )}
            </div>
            <div className='first-input'>
                <label> To: </label>
                <input 
                type="date" 
                placeholder='e.g. 123-456-7890' 
                value={endDate}
                onBlur={handleEndDateChange} 
                onChange={handleEndDateChange}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                />
                {showError && endDate === '' && (
                    <p className='error'>Can't Leave Blank!</p>
                )}
            </div>
        </section>
        <div className='btn-div'>
         <button onClick={handleSubmit}> Add + </button>
        </div>
    </div>
  )
}

export default Work
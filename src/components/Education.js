import React from 'react'
import { useState } from 'react'

const Education = () => {
    const [college, setCollege] = useState('')
    const [degreeType, setDegreeType] = useState('')
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showError, setShowError] = useState(false)

    const handleCollege = (e) => {
        setCollege(e.target.value)
    }
    const handleDegreeType = (e) => {
        setDegreeType(e.target.value)
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
            college === '' ||
            degreeType === '' ||
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
                <h1>Education:</h1>
        <section>
            <div className='first-input'>
                <label> College Name: </label>
                <input 
                type="text" 
                placeholder='UCLA'
                value={college}
                onChange={handleCollege}
                onBlur={handleCollege}/>
                {showError && college === '' && (
                    <p className='error'>Can't Leave Blank!</p>
                )}
            </div>
            <div className='first-input'>
                <label> Degree Type: </label>
                <input 
                type="text" 
                placeholder='Bachelor' 
                value={degreeType}             
                onBlur={handleDegreeType} 
                onChange={handleDegreeType}
                />
                 {showError && degreeType === '' && (
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

export default Education

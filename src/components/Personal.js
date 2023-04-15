import React from 'react'
import { useState } from 'react'

const Peronsal = () => {
    // Personal Information
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [showError, setShowError] = useState(false)

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(
        firstName === '' ||
        lastName === '' ||
        email === '' ||
        phoneNumber === ''
    ) {
        setShowError(true)
        console.log('empty');
    } else {
        setShowError(false)
    }
  }

  return (
    <main>
        <h1>Personal Information:</h1>
        <section>
            <div className='first-input'>
                <label> First Name: </label>
                <input 
                type="text" 
                placeholder='John'
                value={firstName}
                onChange={handleFirstNameChange}
                onBlur={handleFirstNameChange}/>
                {showError && firstName === '' && (
                    <p className='error'>Can't Leave Blank!</p>
                )}
            </div>
            <div className='first-input'>
                <label> Last Name: </label>
                <input 
                type="text" 
                placeholder='Doe' value={lastName}             
                onBlur={handleLastNameChange} 
                onChange={handleLastNameChange}
                />
                 {showError && lastName === '' && (
                    <p className='error'>Can't Leave Blank!</p>
                )}
            </div>
            <div className='first-input'>
                <label> Email:</label>
                <input 
                type="email" 
                placeholder='example@gmail.com' 
                value={email} 
                onBlur={handleEmailChange} 
                onChange={handleEmailChange}
                required
                />
                 {showError && email === '' && (
                    <p className='error'>Can't Leave Blank!</p>
                )}
            </div>
            <div className='first-input'>
                <label> Phone Number: </label>
                <input 
                type="tel" 
                placeholder='e.g. 123-456-7890' 
                value={phoneNumber}
                onBlur={handlePhoneNumberChange} 
                onChange={handlePhoneNumberChange}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                />
                 {showError && phoneNumber === '' && (
                    <p className='error'>Can't Leave Blank!</p>
                )}
            </div>
        </section>

        <div className='btn-div'>
            <button onClick={handleSubmit}>Add +</button>
        </div>
    </main>
    
  )
}

export default Peronsal
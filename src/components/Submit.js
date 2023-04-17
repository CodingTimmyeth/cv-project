import React from 'react'
import { useState } from 'react';

const Submit = () => {

  const [coverLetter, setCoverLetter] = useState('');

  const displayCV = (e) => {
    // create the cover letter using a template string
    const name = "John Doe";
    const email = "johndoe@example.com";
    const position = "Software Developer";
    const coverLetterText = `Dear Hiring Manager,

    I am writing to express my interest in the ${position} position at your company. I have the skills and experience needed to succeed in this role, as well as a passion for software development.

    As you can see from my attached resume, I have several years of experience in the industry, including experience with [list your relevant skills and experiences]. I am confident that I can bring value to your team and help your company achieve its goals.

    Thank you for considering my application. I look forward to the opportunity to discuss my qualifications further.

    Sincerely,

    ${name}
    ${email}`;

    setCoverLetter(coverLetterText);
  }

  return (
    <div className='submit'>
      <div className='title'>
        <h2>Create CV!</h2>
      </div>
      <button onClick={displayCV}> Create </button>
      <div className='cv-con'>
        {coverLetter}
      </div>
    </div>
  )
}

export default Submit;

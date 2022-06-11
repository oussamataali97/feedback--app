import React from 'react'
import {Link } from 'react-router-dom'
import { AiFillQuestionCircle } from 'react-icons/ai';

function QuestionAbout() {
  return (
    <div className='about-link'>
        <Link to='/About'>
         <AiFillQuestionCircle size={30}/>
        </Link>
      
    </div>
  )
}

export default QuestionAbout

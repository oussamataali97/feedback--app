import React from 'react'
import Card from './shared/Card'
import {useState,useContext,useEffect} from 'react'
import Button from './shared/Button'
import FeedbackRating from './FeedbackRating'
import FeedbackContext from './context/FeedbackContext'
function FeedbackForm() {
  const [Rating,setRating]=useState()
  const [text,setText]=useState('')
  const [btnDisabled,setBtnDisabled]=useState(true)
  const [error,setError]=useState('')
  const {addFeed,feedbackEdit,updatefeedback}=useContext(FeedbackContext)

  useEffect(()=>{
    if(feedbackEdit.edit ===true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.Rating)
    }
  },[feedbackEdit])

  const handleChange=(e)=>{
    if(text === ''){
      setBtnDisabled(true)
      setError(null)
    }else if(text !== '' && text.trim().length <= 10){
      setBtnDisabled(true)
      setError('review mustt be 10 char at lest')
    }else{
      setBtnDisabled(false)
      setError(null)
    }
    setText(e.target.value)    
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(text.trim().length > 10){

   let newFeedback={
        Rating,
        text
      }

      if(feedbackEdit.edit===true){
        updatefeedback(feedbackEdit.item.id,newFeedback)
      }else{
        addFeed(newFeedback)
      }


      setText('')

    }
  }

  return (
    
    <Card>
      <form onSubmit={handleSubmit}>
      <h1 className='title'>How would you rate us ?</h1>
      <FeedbackRating select={(Rating)=>setRating(Rating)} />
      <div className="input-group">
        <input type="text" onChange={handleChange} value={text} placeholder='Enter review'
        />
        <Button type='text' version='secondary' isDisabled={btnDisabled}>
          Send
        </Button>
       
      </div>
      
      { error && <div>{error}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm

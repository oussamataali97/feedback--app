import React,{useContext} from 'react'
import Card from './shared/Card'
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';


import FeedbackContext from './context/FeedbackContext';



function FeedbackItem({item}) {

  const {deleteF,editFeed}=useContext(FeedbackContext)
  return (
      <Card dark={false}>
      <div className="num-display">{item.Rating}</div>
        <button className='close' onClick={()=>deleteF(item.id)}>
          <AiFillCloseCircle color='red'/>
        </button>
        <button className='edit' onClick={()=>editFeed(item)}>
          <FiEdit color='green'/>
        </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem

import React,{useContext} from 'react';
import { motion,AnimatePresence } from "framer-motion"
import FeedbackItem from './FeedbackItem'
import FeedbackContext from './context/FeedbackContext';

function FeedbackList() {
  const {feedback}=useContext(FeedbackContext)
    if(!feedback || feedback.length ===0){
        return <h1>No feedback</h1>
    }
  return (
    
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item)=>(
            <motion.div  
            key={item.id}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}>
            <FeedbackItem key={item.id} item={item}/>

            </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList

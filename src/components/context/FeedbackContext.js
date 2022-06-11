import React, { createContext ,useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import Feed from '../../dat/Feed'




const FeedbackContext=createContext();

export const FeedbackProvider =({children})=>{
    const [feedback,setFeedback]=useState(Feed);
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false,
    })

    //set Feedback to be edited
    
    const editFeed=(item)=>{
        setFeedbackEdit({
            item,
            edit:true,
        })
    }

    //update feedback 
 const updatefeedback =(id,updatedFeed)=>{
     setFeedback(feedback.map(item=>(
         item.id===id ? {...item,...updatedFeed} : item
     )))
  }

    //Delete Feedback
    let deleteF=(id)=>{
    
        setFeedback(feedback.filter((item)=>(
          item.id!==id
        ) ))
    }

    //Add Feedback

    let addFeed=(newFeed)=>{
        newFeed.id=uuidv4();
        console.log(newFeed)
        setFeedback([newFeed, ...feedback]) 
     }
   

    return <FeedbackContext.Provider value={{
        feedback,
        deleteF,
        addFeed,
        editFeed,
        feedbackEdit,
        updatefeedback,
    }}>
       
        {children}
    </FeedbackContext.Provider>
    
} 

export default FeedbackContext

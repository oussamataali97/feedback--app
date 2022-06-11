import React from 'react'

function Card({children,dark}) {
  return (
  /*   <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div> */


    <div className='card' style={{backgroundColor : dark? 'rgba(0, 0, 0, 0.4)':'#fff',
    color:dark ?'#fff' : 'black'
    }}>
      {children}
    </div>
    
  )
}


export default Card

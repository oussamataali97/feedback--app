import React from 'react'

function Button({children,version,type,isDisabled}) {
  return (
 <button type='text' className={`btn btn-${version}`} disabled={isDisabled}>
    {children}
 </button>
  )
}

Button.defaultProps={
    version:'primary',
    type:'text',
    
}

export default Button

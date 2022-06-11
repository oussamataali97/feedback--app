import React from 'react'

import PropTypes from 'prop-types';
function Header({title,bgColor,textColor}) {

    const headerStyle={
        backgroundColor:'rgb(45, 0, 119)',
        padding:'10px 500px',
        color:'white',
    }

  return (
    <header style={headerStyle}>
        <center><h1 className='title-page'>{title}</h1></center>
    </header>
  )
}



Header.propTypes={
    title:PropTypes.string,
}
export default Header

import React from 'react'
import Card from './shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <h1>About this Project</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt necessitatibus quibusdam nulla eveniet eum harum tempora architecto, iste dolorem!</p>
        <Link to='/'>Back Home</Link>
    </Card>
  )
}

export default AboutPage

import React from 'react'
import './Feature.css'

const FeatureCard = (props) => {
  return (
    <div className='feature-card'>
      <i>{props.icon}</i>
      <h2>{props.title}</h2>
    </div>
  )
}

export default FeatureCard

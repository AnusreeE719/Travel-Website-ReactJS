import React from 'react'
import { featuresData } from '../../Data/FeatureData'
import './Feature.css'
import FeatureCard from './FeatureCard'

const Feature = () => {
  return (
    <div className='feature'>
      <div className="section-head">
      <p className='title'>Features</p>
      <h1 className='caption'>Why Choose Us?</h1>
      </div>
      <div className='feature-card-section'>
        {featuresData.map((value, index) => {
            return(
                <FeatureCard key={index} icon={value.icon} title={value.title} />
            )
        })}
      </div>
    </div>
  )
}

export default Feature

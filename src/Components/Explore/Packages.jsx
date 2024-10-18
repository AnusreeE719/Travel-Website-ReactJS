import React from 'react'
import { useState } from 'react'
import { packageData } from '../../Data/PackageData'
import PackageCard from './PackageCard'
import './Packages.css'

const Packages = () => {

  const [visible, setVisible] = useState(6);

  const totalItems = packageData.length;

  const showMore = () => {
    setVisible((prevCount) => prevCount + 6);
  }

  const showMoreButton = totalItems > visible;

  return (
    <div className='packages'>
      <div className="section-head">
      <p className='title'>Recommended Packages</p>
      <h1 className='caption'>Discover the world at your fingertips</h1>
      </div>
      <div className='package-card-sec'>
        {packageData.slice(0,visible).map((value, index) => {
            return(
                <PackageCard key={index} imageUrl={value.imageUrl} duration={value.duration} cost={value.cost} place={value.destination} id={value.id} />
            )
        })}
      </div>
      {showMoreButton &&
      <button className='show-more' onClick={showMore}>Load More</button>
      }
    </div>
  )
}

export default Packages

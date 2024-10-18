import React from 'react'
import './TopDestination.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const TopDestinationCard = ({id, imageUrl, place}) => {
  
  return (

    <div className='top-destination-box'>
       <div className='destination-img'>
         <img src={imageUrl} alt='' />
      </div>
       <div className='destination-text'>
         <Link to={`/TopDestinationDetails/${id}`} className='d-link'><h3>{place}</h3></Link>
       </div>
   </div>
  
    

  )
}

export default TopDestinationCard

import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { topDestinationData } from '../../Data/TopDestinationData';
import './TopDestination.css';
import { useState } from 'react';

const TopDestinationDetails = () => {

  const {id} = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    let location = topDestinationData.find((item) => item.id === (id));
    if(location){
      setDestination(location);
    } 
  }, [id])

  return (
    <>
    {destination ? (
      <div className='des-details'>
        <div className='des-details-sec'>
        <div className='des-details-img'>
          <img src={destination.imageUrl} />
        </div>
        <div className='des-details-txt'>
        <h3>{destination.place}</h3>
        <p>{destination.description}</p>

        </div>
      </div>
      </div>
    ) : null }
    </>
  )
}

export default TopDestinationDetails

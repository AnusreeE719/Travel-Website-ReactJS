import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { packageData } from '../../Data/PackageData';
import './Packages.css'

const PackageDetails = () => {

    const {id} = useParams();

    const [packages, setPackages] = useState(null);

    useEffect(() => {
        let tourPlan = packageData.find((item) => item.id === (id));
        if(tourPlan){
            setPackages(tourPlan);
        }
    }, [id])


  return (
    <>
    {packages ? (
        <div className='package-details'>
        <div className='package-details-sec'>
          <div className='details-img'>
            <img src={packages.imageUrl} />
          </div>
          <div className='details-txt'>
          <span><h2>{packages.destination}</h2></span>
          <ul>
            {packages.tourplan.map((value, index) => {
                return(
                    <li key={index}>
                        <h1>{value.day} - {value.destination}</h1>
                        <p>{value.description}</p>
                    </li>
                )
            })}
          </ul>
          </div>
          </div>
          </div>
    ) : null}
    </>
  )
}

export default PackageDetails

import React from 'react'
import './TopDestination.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { topDestinationData } from '../../Data/TopDestinationData';
import TopDestinationCard from './TopDestinationCard';
import { useRef } from 'react';




const TopDestination = () => {

  const sliderRef = useRef(null);

  const slideLeft = () => {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft - 340;
  };

  const slideRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft = slider.scrollLeft + 340;
  };

  return (

    <div className='top-destination'>
      <div className="section-head">
      <h1 className='caption'>Top Destination</h1>
      </div>
      <div className='top-destination-card'>
           <div className='slide-btns'>
           <button className='left-btn' onClick={slideLeft}><i><FaArrowLeft /></i></button>
           <button className='right-btn' onClick={slideRight}><i><FaArrowRight /></i></button>
           </div>
           <div className="wrap" ref={sliderRef}>
            <div className='top-destination-content'>
            {topDestinationData.map((item) => {
                return(
                    <TopDestinationCard key={item.id} imageUrl={item.imageUrl} place={item.place} description={item.description} id={item.id}  />
                )
            })}
            </div>
           
           </div>
           
           
       
      </div>
    </div>


    // <div className='top-destination'>
    //   <div className="section-head">
    //   <h1 className='caption'>Top Destination</h1>
    //   </div>
    //   <div className='scroll-btns'>
    //     <button><i><FaArrowLeft /></i></button>
    //     <button><i><FaArrowRight /></i></button>
    //   </div>
    //   <div className='con-ref'>
        // {/* <div className='destination-box'> */}
          // {topDestinationData.map((item) => {
          //   return(
          //     <TopDestinationCard key={item.id} id={item.id} imageUrl={item.imageUrl} place={item.place} description={item.description} />
                  
              
          //   )
          // })}
        // {/* </div> */}
      // </div>
      
      // {/* <div className="section-head">
      // <h1 className='caption'>Top Destination</h1>
      // </div>
      // <div className='top-destination-card'>

       
      //       {topDestinationData.map((value) => {
      //           return(
                  
      //               <TopDestinationCard key={value.id} id={value.id} imageUrl={value.imageUrl} place={value.place} description={value.description} />
                  
      //           )
      //       })}
        
      // </div> */}
//     </div>
  )
}

export default TopDestination

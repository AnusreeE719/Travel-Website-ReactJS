import './Testimonial.css'
import TestimonialSlide from './TestimonialSlide'
import {TestimonialData} from '../../Data/TestimonialData'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const TestimonialPrevArrow = (props) => {
  const { onClick } = props;
  return(
    <div className='slideBtn'>
      <button className='prevBtn' onClick={onClick}>
        <i><FaArrowLeft /></i>
      </button>
    </div>
  )
}

const TestimonialNextArrow = (props) => {
  const { onClick } = props;
  return(
    <div className='slideBtn'>
      <button className='nextBtn' onClick={onClick}>
        <i><FaArrowRight /></i>
      </button>
    </div>
  )
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <TestimonialNextArrow />,
  prevArrow: <TestimonialPrevArrow />
}

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <div className="section-head">
      <p className='title'>Testimonial</p>
      <h1 className='caption'>Our Happy Customers</h1>
      </div>
      <div className="testimonial-slide">
        <Slider {...settings}>
        {TestimonialData.map((value, index) => {
          return(
            <TestimonialSlide key={index} imageUrl={value.imageUrl} name={value.name} review={value.review} />
          )
        })}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial

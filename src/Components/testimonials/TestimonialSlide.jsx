import { FaQuoteRight } from 'react-icons/fa'
import profile from '../../assets/jane-smith.jpg'
import './Testimonial.css'

const TestimonialSlide = (props) => {
  return (
    <div className='testimonial-slide-section'>
      <div className="testimonial-left">
        <div className="testimonial-image">
            <img src={props.imageUrl} alt="" />
        </div>
        <p className='name'>{props.name}</p>
      </div>
      <div className="testimonial-right">
      <i><FaQuoteRight /></i>
      <p className='review'>{props.review}</p>
      </div>
    </div>
  )
}

export default TestimonialSlide

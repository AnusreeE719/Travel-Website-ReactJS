import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = (props) => {
  return (
    <div className='hero'>
      <div className='hero-img'>
        <img src={props.image} alt="" />
      </div>
      <div className='hero-content'>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        <button className={props.btnClassname}>
        <Link className={props.linkClassname} to={props.url}>{props.section}</Link>
        </button>
      </div>
    </div>
  )
}

export default Hero

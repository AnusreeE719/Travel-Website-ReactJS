import Hero from '../hero/Hero'
import beach from '../../assets/hills.jpg'
import Testimonial from '../testimonials/Testimonial'
import Feature from '../features/Feature'
import TopDestination from '../topDestinations/TopDestination'

const Home = () => {
  return (
    <div>
      <Hero 
      image = {beach}
      title = "EXPLORE DREAM DISCOVER"
      subtitle = "It's Time For New Experinces"
      btnClassname = "hero-btn"
      linkClassname = "hero-link"
      url = "/explore"
      section = "Explore"
      />
      <TopDestination />
      <Feature />
      <Testimonial />
    </div>
  )
}

export default Home

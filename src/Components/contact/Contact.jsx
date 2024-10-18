
import Hero from '../hero/Hero';
import contactImg from '../../assets/contact.jpg';
import './Contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
    <Hero
    image = {contactImg} 
    title = "Contact Us"
    btnClassname = "hide"
    />
    <ContactForm />
    </>
  )
}

export default Contact

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useRef } from 'react';
import { FaPhoneVolume, FaLocationDot} from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import './Contact.css'

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lzj778m', 'template_97fezza', form.current,{publicKey: 'i6_0HY-fdgfF0Q0yT'})
    .then((result) => {
      console.log(result.text);
          console.log("message sent");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
    }, (error) => {
      console.log(error.text)
    })
  }

  return (
    <div className='contact'>

      <div className='contact-left'>
        <h1 className='contact-title'>Reach Out To Us</h1>
        <ul>
            <li className='contact-info'>
                <i><FaPhoneVolume /></i>
                <span>+1 2345678910</span>
            </li>
            <li className='contact-info'>
                <i><MdEmail /></i>
                <span>info@travel.com</span>
            </li>
            <li className='contact-info'>
                <i><FaLocationDot /></i>
                <span>245 Lorem Ipsum, Neque porro 2530 quisquam</span>
            </li>
        </ul>
      </div>

      <div className="contact-right">

        <p className='contact-description'>
            <b>Lorem Ipsum.</b>
            It is a long established fact that a reader will be distracted.
        </p>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Name' value={name} name="user_name" onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Email' value={email} name="user_email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Subject' value={subject} name='subject' onChange={(e) => setSubject(e.target.value)} />
            <textarea rows="5" placeholder='Messsage' value={message} name="message" onChange={(e) => setMessage(e.target.value)} />
            <button type='submit' className='submitBtn'>Submit</button>
        </form>
        
      </div>

    </div>
  )
}

export default ContactForm

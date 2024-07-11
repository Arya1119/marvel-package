import React, { useEffect } from 'react'
import "./ContactUsPage.css"
import ContactInfo from './ContactInfo/ContactInfo'
import ContactForm from './ContactForm/ContactForm'
import Banner from './../../components/Banner/Banner';

const ContactUsPage = () => {
  useEffect(() => {
    document.title = 'Contact Page';
}, []);
  return (
    <>
        
        <Banner bannerNav="Contact Us"/>
        <ContactInfo />
        <ContactForm/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3946338791757!2d72.76283227604021!3d23.55426609627639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395db584f95df409%3A0xfe501cc92f7e95ea!2savkar%20warehouse%2C%2018-20%2C%20Vijapur%2C%20Gujarat%20382870!5e0!3m2!1sen!2sin!4v1720675430717!5m2!1sen!2sin" width="100%" height="450" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default ContactUsPage
import React from 'react'
import "./ContactUsPage.css"
import Banner from "./Banner/Banner"
import ContactInfo from './ContactInfo/ContactInfo'
import ContactForm from './ContactForm/ContactForm'

const ContactUsPage = () => {
  return (
    <main>
        
        <Banner/>
        <ContactInfo />
        <ContactForm/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.00058830273!2d72.79880547600797!3d23.02375061628293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e7d9998ee21bd%3A0x8e25716069feb7df!2sMarvel%20Pack%20Industries-%20Corrugated%20Box%20Manufacturers!5e0!3m2!1sen!2sin!4v1720507610941!5m2!1sen!2sin" width="100%" height="450" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </main>
  )
}

export default ContactUsPage
import React from 'react'
import "./FormSection.css"
const FormSection = () => {
  return (
    <section className="formBox">
    <form>
        <div className="title">
            <h1>Say hello</h1>
            <p>Lorem Ipsum is simply dummy text of the printing .</p>
        </div>
        <div className="name">
            <p>
            <label for="fn">First Name</label>
            <input type="text" id="fn" required/></p>
            <p>
            <label for="ln">Last Name</label>
            <input type="text" id="ln" required/>
        </p>
        </div>
        <div className="name">
            <p>
            <label for="email">Email</label>
            <input type="email" id="email" required/></p>
            <p>
            <label for="phone">Phone</label>
            <input type="tel" id="phone" required/>
        </p>
        </div>
      
        <label for="message">Message</label>
        <textarea  id="message" rows="20" required></textarea>
        <button id="btn">Get in touch</button>
    </form>
</section>
  )
}

export default FormSection
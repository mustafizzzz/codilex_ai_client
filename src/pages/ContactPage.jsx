import React from 'react'
import SiteHeader from '../components/reuseComponent/SiteHeader'
import ContactInfo from './ContactComponent/ContactInfo'
import ContactForm from './ContactComponent/ContactForm'
import LocationMap from './ContactComponent/LocationMap'

import RectangleContact from ".././assets/RectangleContact.png";

const ContactPage = () => {
  return (
    <div className="min-h-screen">

      <SiteHeader
        backgroundImage={RectangleContact}
        title="Contact"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero. egestas malesuada viverra gravida"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <ContactInfo />
          <ContactForm />
        </div>

        <LocationMap />
      </div>
    </div>
  )
}

export default ContactPage
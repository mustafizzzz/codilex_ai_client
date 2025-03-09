import React from 'react'
import ContactHeader from './ContactComponent/ContactHeader'
import ContactInfo from './ContactComponent/ContactInfo'
import ContactForm from './ContactComponent/ContactForm'
import LocationMap from './ContactComponent/LocationMap'

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <ContactHeader />

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
import React from 'react'
import SiteHeader from '@/components/reuseComponent/SiteHeader';
import ContactInfo from './ContactComponent/ContactInfo'
import ContactForm from './ContactComponent/ContactForm'
import LocationMap from './ContactComponent/LocationMap'

import RectangleContact from ".././assets/HeaderBanner/RectangleContact.png";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"


const ContactPage = () => {

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com" },
    { icon: Instagram, url: "https://instagram.com" },
    { icon: Linkedin, url: "https://linkedin.com" },
  ];


  return (
    <div className="min-h-screen">

      <SiteHeader
        backgroundImage={RectangleContact}
        title="Contact"
        description="We're here to assist you! Whether you have questions or need support, feel free to reach out to us, and we'll get back to you as soon as possible."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

          <ContactInfo
            title="Let's talk"
            description="Connect with us directly, and we'll ensure you receive the support you need"
            email="contact@legalai.com"
            phone="+123 456 7892"
            address="123 Legal St, Law City"
            socialLinks={socialLinks}
          />

          <ContactForm />

        </div>

        <LocationMap />
      </div>
    </div>
  )
}

export default ContactPage
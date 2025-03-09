import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">Let's talk</h2>
        <p className="text-gray-600 mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="bg-black p-3 rounded-full">
            <Mail className="text-white size-5" />
          </div>
          <div>
            <h3 className="font-semibold">Our email</h3>
            <p className="text-gray-600">hello@example.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-black p-3 rounded-full">
            <Phone className="text-white size-5" />
          </div>
          <div>
            <h3 className="font-semibold">Call us</h3>
            <p className="text-gray-600">+123 456 7892</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-black p-3 rounded-full">
            <MapPin className="text-white size-5" />
          </div>
          <div>
            <h3 className="font-semibold">Find us</h3>
            <p className="text-gray-600">Open Google Maps</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <a href="#" className="bg-black p-3 rounded-full hover:bg-gray-800 transition-colors">
          <Facebook className="text-white size-5" />
        </a>
        <a href="#" className="bg-black p-3 rounded-full hover:bg-gray-800 transition-colors">
          <Instagram className="text-white size-5" />
        </a>
        <a href="#" className="bg-black p-3 rounded-full hover:bg-gray-800 transition-colors">
          <Linkedin className="text-white size-5" />
        </a>
      </div>
    </div>
  )
}

export default ContactInfo


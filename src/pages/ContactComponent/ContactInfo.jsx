import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

const ContactInfo = ({ title, description, email, phone, address, socialLinks }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-medium mb-4 font-serif">{title}</h2>
        <p className="text-gray-600 mb-8 font-sans">{description}</p>
      </div>

      <div className="space-y-6">

        <div className="flex items-center gap-4">
          <div className="bg-black p-3 rounded-full">
            <Mail className="text-white size-5" />
          </div>
          <div>
            <h3 className="font-semibold font-serif">Our email</h3>
            <p className="text-gray-600 font-sans">{email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-black p-3 rounded-full">
            <Phone className="text-white size-5" />
          </div>
          <div>
            <h3 className="font-semibold font-serif">Call us</h3>
            <p className="text-gray-600 font-sans">{phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-black p-3 rounded-full">
            <MapPin className="text-white size-5" />
          </div>
          <div>
            <h3 className="font-semibold font-serif">Find us</h3>
            <p className="text-gray-600 font-sans">{address}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        {socialLinks.map(({ icon: Icon, url }, index) => (
          <a key={index} href={url} className="bg-black p-3 rounded-full hover:bg-gray-800 transition-colors">
            <Icon className="text-white size-5" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo


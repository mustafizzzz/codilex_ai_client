import { Button } from "@/components/ui/button"

const ContactForm = () => {
  return (
    <form className="bg-gray-100 p-8 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={2}
          className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none"
        />
      </div>
      <Button className="px-6 py-5 rounded-full cursor-pointer">
        Submit Now
      </Button>
    </form>
  )
}

export default ContactForm


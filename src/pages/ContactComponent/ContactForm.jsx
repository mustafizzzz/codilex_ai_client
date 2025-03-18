import { Button } from "@/components/ui/button"
import { contactFormSchema } from "@/FormValidationSchema/ContactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";


const submitFormData = async (data) => {
  const response = await axios.post(`http://localhost:8080/codilex/api/v1/lead/save`, {
    name: data.firstName,
    email: data.email,
    phoneNumber: data.phone,
    query: data.message
  });
  return response.data;
};


const ContactForm = () => {


  //react hook form using zod validation
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactFormSchema)
  });

  //api call
  const submitContactFormMutation = useMutation({
    mutationFn: submitFormData,
    onSuccess: () => {
      alert("Form submitted successfully!");
    },
    onError: (error) => {
      console.error("Submission failed:", error);
    },
  })


  const handleContactUs = async (data) => {
    console.log("Form Data:", data);
    submitContactFormMutation.mutate(data);
  }




  return (

    <form onSubmit={handleSubmit(handleContactUs)} className="bg-gray-100 p-8 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First name
          </label>
          <input
            {...register("firstName")}
            type="text"
            id="firstName"
            className="w-full px-4 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
          />
          {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last name
          </label>
          <input
            {...register("lastName")}
            type="text"
            id="lastName"
            className="w-full px-4 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
          />
          {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full px-4 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            {...register("phone")}
            type="text"
            id="phone"
            className="w-full px-4 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={2}
          className="w-full px-4 py-2 border-b border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
      </div>
      <Button type="submit" className="px-6 py-5 rounded-full cursor-pointer" disabled={submitContactFormMutation.isLoading}>
        {submitContactFormMutation.isLoading ? "Submitting..." : "Submit Now"}
      </Button>
      {submitContactFormMutation.isError && <p className="text-red-500">Error submit form</p>}
      {submitContactFormMutation.isSuccess && <p className="text-green-500">Form submit successfully!</p>}
    </form>
  )
}

export default ContactForm


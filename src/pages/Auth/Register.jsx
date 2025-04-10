import AuthLayout from "@/components/layout/AuthLayout"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "@/FormValidationSchema/AuthSchema"
import AuthPageBackground from '../../assets/AuthPage/AuthPageBackground.png'
import companyLogo from '../../assets/companyLogo.png';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import axios from "axios"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


const Register = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      lastName: "",
      email: "",
      phone: "",
      terms: false,
    },
  })

  // console.log(`API is : ${import.meta.env.VITE_API_URL}`); [LITIGANT, OTHERS, LAWYER]


  const onSubmit = async (data) => {
    console.log(data);

    setIsSubmitting(true)
    try {

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/create`, {
        firstName: data.fullName,
        lastName: data.lastName,
        emailId: data.email,
        mobileNumber: data.phone,
        isPhoneNumberVerified: false,
        isEmailIdVerified: false,
        termsAccepted: data.terms,
        userType: data.userType
      })

      if (response.status !== 200) {
        toast.error("Registration failed. Please try again.");
        return;
      }

      console.log("Registration response:", response.data);

      toast.success("Registration successful! Redirecting to OTP verification...");

      await new Promise((resolve) => setTimeout(resolve, 3000));// wait for 3 sec
      // Navigate to OTP verification page with phone number 
      navigate("/verify-otp", { state: { flow: "registration", phone: data.phone } });
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.message);
      form.setError("root", {
        type: "manual",
        message: error.message || "Registration failed. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthLayout backgroundImage={AuthPageBackground}>


      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">

        {/* Logo part */}
        <div className="flex flex-col items-center mb-6">
          {/* Logo */}
          <Link to="/register" className="flex items-center space-x-1 mb-4">
            <img src={companyLogo} alt="company logo" className='h-12 w-full object-cover' />
          </Link>
          <h2 className="text-2xl font-semibold font-serif">Register Now!</h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} className="rounded-full p-6 border border-black font-sans" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} className="rounded-full p-6 border border-black font-sans" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} className="rounded-full p-6 border border-black font-sans" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Phone" {...field} className="rounded-full p-6 border border-black font-sans" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="userType"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start justify-center space-x-1 space-y-0">
                  <div className="space-y-1 leading-none w-full flex flex-col items-center justify-center">
                    <div className="w-full flex gap-2 items-center">
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="w-full text-sm rounded-full p-6 border border-black font-sans">
                            <SelectValue placeholder="Select user type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="LITIGANT">LITIGANT</SelectItem>
                            <SelectItem value="LAWYER">LAWYER</SelectItem>
                            <SelectItem value="OTHERS">OTHERS</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </div>
                    <FormMessage className="text-xs" />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start justify-center space-x-1 space-y-0">
                  <div className="space-y-1 leading-none w-full flex flex-col items-center justify-center">
                    <div className="flex gap-2">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel className="text-xs text-black font-sans font-normal">Lorem ipsum is dummy text</FormLabel>
                    </div>
                    <FormMessage className="text-xs" />
                  </div>
                </FormItem>
              )}
            />



            {form.formState.errors.root && <p className="text-sm text-red-500">{form.formState.errors.root.message}</p>}

            <Button
              type="submit"
              className="w-full py-6 bg-black text-white hover:bg-gray-800 rounded-full font-sans font-normal cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </Button>
          </form>
        </Form>

        <div className="mt-4 text-center text-sm font-sans">
          Already a user?{" "}
          <Link to="/login" className="text-black font-medium hover:underline font-sans">
            Login
          </Link>
        </div>
      </div>

    </AuthLayout>


  )
}

export default Register
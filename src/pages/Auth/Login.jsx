"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from "react-router-dom"

import { loginSchema } from "@/FormValidationSchema/AuthSchema"
import AuthLayout from "@/components/layout/AuthLayout"

import AuthPageBackground from '../../assets/AuthPage/AuthPageBackground.png'
import companyLogo from '../../assets/companyLogo.png';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"




const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
    },
  })

  // Form submission handler
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate("/verify-otp", { state: { flow: "login", phone: data.phone } })
    } catch (error) {
      console.error("Login error:", error)
      form.setError("root", {
        type: "manual",
        message: error.message || "Login failed. Please try again.",
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
          <h2 className="text-3xl font-semibold font-serif">Welcome Back!</h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Enter Your Phone" {...field} className="rounded-full p-6 font-sans border" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.formState.errors.root && <p className="text-sm text-red-500">{form.formState.errors.root.message}</p>}

            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800 rounded-full font-sans py-6 cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending OTP..." : "Login"}
            </Button>
          </form>
        </Form>

        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-black font-medium hover:underline">
            Register
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Login


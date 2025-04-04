import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { otpValidationSchema } from '@/FormValidationSchema/AuthSchema';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/components/layout/AuthLayout';
import AuthPageBackground from '../../assets/AuthPage/AuthPageBackground.png'
import { useLocation, useNavigate } from 'react-router-dom';



function VerifyOtp() {

  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [countdown, setCountdown] = useState(50);
  const [resendDisabled, setResendDisabled] = useState(true);


  const location = useLocation()
  const navigate = useNavigate()

  const { flow, phone } = location.state || { flow: "registration", phone: "" }

  const form = useForm({
    resolver: zodResolver(otpValidationSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = async (data) => {
    const otpValue = data.pin;
    console.log(data);

    toast.success("You submitted the following values:", {
      description: `${data.pin}`
    });

    try {
      // In a real app, you would make an API call here
      // For demo purposes, we'll simulate the API call and always succeed with "1234"
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (otpValue !== "1234") {
        throw new Error("Invalid OTP. Please try again.")
      }

      if (flow === "registration") {
        // Registration flow - navigate to success page
        navigate("/sucess")
      } else if (flow === "login") {
        // Login flow - navigate to contact page
        // In a real app, you would set authentication state here
        // localStorage.setItem("isAuthenticated", "true")
        navigate("/contact")
      }
    } catch (error) {
      console.error("OTP verification error:", error)
      setError(error.message || "Invalid OTP. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      setResendDisabled(false);
    }

    return () => clearTimeout(timer);
  }, [countdown]);

  const handleResend = async () => {
    if (resendDisabled) return

    setResendDisabled(true)
    setCountdown(50) // 30 seconds countdown

    try {
      // In a real app, you would make an API call here
      // For demo purposes, we'll just simulate the API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message
      setError("")
      // You could show a success toast here
    } catch (error) {
      console.error("Resend OTP error:", error)
      setError("Failed to resend OTP. Please try again.")
      setResendDisabled(false)
      setCountdown(0)
    }
  }

  return (
    <AuthLayout backgroundImage={AuthPageBackground}>

      <div className="flex justify-center items-center bg-gray-50 rounded-xl">
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-semibold font-serif">Enter OTP</h2>
            <p className="text-center text-sm mt-3 font-sans">
              Please enter the OTP code that we've sent to your phone number
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <FormControl>
                      <InputOTP
                        maxLength={4}
                        {...field}
                        className="gap-4"
                      >
                        <InputOTPGroup className="gap-3">
                          <InputOTPSlot
                            index={0}
                            className="w-16 h-16 text-2xl border-2 rounded-md"
                          />
                          <InputOTPSlot
                            index={1}
                            className="w-16 h-16 text-2xl border-2 rounded-md"
                          />
                          <InputOTPSlot
                            index={2}
                            className="w-16 h-16 text-2xl border-2 rounded-md"
                          />
                          <InputOTPSlot
                            index={3}
                            className="w-16 h-16 text-2xl border-2 rounded-md"
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full py-6 text-lg font-medium font-sans cursor-pointer bg-black"
              >
                Submit
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={handleResend}
                disabled={resendDisabled}
                className={`text-sm font-medium  font-sans ${resendDisabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:text-blue-800 hover:underline"
                  }`}
              >
                {resendDisabled
                  ? `Resend OTP in ${countdown}s`
                  : "Didn't receive a code? Resend"}
              </button>
            </div>

          </Form>

        </div>
      </div>
    </AuthLayout>
  );
}

export default VerifyOtp;
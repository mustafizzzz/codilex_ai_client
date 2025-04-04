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
import axios from 'axios';



function VerifyOtp() {

  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [countdown, setCountdown] = useState(50);
  const [resendDisabled, setResendDisabled] = useState(true);


  const location = useLocation()
  const navigate = useNavigate()

  const { flow, phone } = location.state || { flow: "registration", phone: "" };


  useEffect(() => {
    if (!phone) {
      toast.error("Phone number is missing. Please register or login first.");
      navigate("/login");
      return;
    }
    sendOtp(); // Automatically send OTP when the page loads
  }, []);

  const form = useForm({
    resolver: zodResolver(otpValidationSchema),
    defaultValues: {
      pin: "",
    },
  });


  // For countdown
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


  //to send otp
  const sendOtp = async () => {
    setIsSubmitting(true);
    try {
      // const response = await axios.get(`${import.meta.env.VITE_API_URL}/otp/phone/${phone}`);
      const response = await axios.get(`http://localhost:8080/codilex/api/v1/otp/phone/9999574213`);
      console.log("OTP send data:", response.data);

      toast.success("OTP sent successfully to " + phone);
    } catch (error) {
      console.error("OTP sending error:", error);
      toast.error("Failed to send OTP. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    if (resendDisabled) return;

    setResendDisabled(true)
    setCountdown(50) // 30 seconds countdown

    try {
      await sendOtp();
    } catch (error) {
      console.error("Resend OTP error:", error)
      toast.error("Failed to send OTP. Try again later.");
      setResendDisabled(false);
      setCountdown(0);
    }
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const otpValue = data.pin;

    //Only numbers, exact length 6
    if (!/^\d{6}$/.test(otpValue)) {
      toast.error("Invalid OTP. Please enter a 6-digit number.");
      setIsSubmitting(false);
      return;
    }

    try {
      // const response = await axios.get(`${import.meta.env.VITE_API_URL}/otp/${data.pin}/phone/${phone}`);

      const response = await axios.get(`http://localhost:8080/codilex/api/v1/otp/123456/phone/9999574213`);
      console.log("OTP verification data: ", response.data);

      const { jwtToken, refreshToken, userProfile } = response.data.body;

      //  Store tokens in localStorage or sessionStorage
      if (!jwtToken || !refreshToken || !userProfile) {
        toast.error("Data not found. Please try again/");
        return;
      }
      localStorage.setItem("jwt", jwtToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(userProfile));

      toast.success("OTP verified successfully!");

      console.log("OTP sucess data:", response.data);


      // Redirect based on flow
      if (flow === "registration") {
        navigate("/success");
      } else if (flow === "login") {
        navigate("/");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      toast.error("Invalid OTP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout backgroundImage={AuthPageBackground}>

      <div className="flex justify-center items-center bg-gray-50 rounded-xl">
        <div className="w-full max-w-xl mx-auto bg-white rounded-lg shadow-md p-8">

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
                        maxLength={6}
                        {...field}
                        className="gap-2"
                      >
                        <InputOTPGroup className="gap-2 justify-center">
                          {[0, 1, 2, 3, 4, 5].map((index) => (
                            <InputOTPSlot
                              key={index}
                              index={index}
                              className="w-12 h-12 text-xl border-2 rounded-md"
                            />
                          ))}
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
                disabled={isSubmitting}
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
import { useNavigate } from "react-router-dom"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import AuthLayout from "@/components/layout/AuthLayout";
import AuthPageBackground from '../../assets/AuthPage/AuthPageBackground.png'
import { Confetti } from "@/AceternityUi/ConfettiButtonComponent";
import { useEffect, useRef } from "react";



const SucessMessageCard = () => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate("/login")
  }

  const confettiRef = useRef(null);

  useEffect(() => {
    if (confettiRef.current) {
      confettiRef.current.fire({});
    }
  }, []);

  return (
    <>

      <Confetti ref={confettiRef}
        className="absolute inset-0 z-10 w-full h-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }} />

      <AuthLayout backgroundImage={AuthPageBackground}>

        <div className="relative w-full max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">

          <div className="relative flex flex-col items-center z-10">
            <div className="w-25 h-25 bg-black rounded-full flex items-center justify-center mb-4">
              <Check className="text-white w-20 h-20" />
            </div>

            <div className="flex flex-col items-center mb-6">
              <h2 className="text-4xl font-semibold font-serif">Success!</h2>
            </div>

            <p className="text-center text-sm mb-6 font-sans">
              Please check your OTP and verify your account to access your account.
            </p>

            <Button
              onClick={handleButtonClick}
              className="w-full bg-black text-white hover:bg-gray-800 rounded-full cursor-pointer font-sans py-6"
            >
              Back to Login
            </Button>
          </div>
        </div>

      </AuthLayout>
    </>
  )
}

export default SucessMessageCard


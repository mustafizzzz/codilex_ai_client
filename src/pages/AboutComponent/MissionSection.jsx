import React from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'
import CountUp from 'react-countup'
import AnimatedTooltip from '../../AceternityUi/AnimatedTooltip'

const MissionSection = ({
  subtitle = "Our Mission",
  title = "Lorem ipsum is dummy text.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus.",

  bulletPoints = [
    "Lorem ipsum is simply dummy",
    "Lorem ipsum is simply dummy",
    "Lorem ipsum is simply dummy",
    "Lorem ipsum is simply dummy",
    "Lorem ipsum is simply dummy",
    "Lorem ipsum is simply dummy",
  ],

  items = [
    { id: 1, name: "John Doe", designation: "Senior Lawyer", image: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 2, name: "Jane Smith", designation: "Legal Analyst", image: "https://randomuser.me/api/portraits/men/8.jpg" },
    { id: 3, name: "John Doe", designation: "Senior Lawyer", image: "https://randomuser.me/api/portraits/men/9.jpg" },
    { id: 4, name: "Jane Smith", designation: "Legal Analyst", image: "https://randomuser.me/api/portraits/men/10.jpg" },
    { id: 5, name: "John Doe", designation: "Senior Lawyer", image: "https://randomuser.me/api/portraits/men/11.jpg" },
    { id: 6, name: "Jane Smith", designation: "Legal Analyst", image: "https://randomuser.me/api/portraits/women/12.jpg" },
  ],

  className = "",
}) => {
  return (

    <section className={cn("bg-black text-white py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:h-160">

          {/* Left Content - Mission and Bullet Points */}
          <div className="lg:col-span-7 space-y-8 h-full flex flex-col justify-center">

            <div className="space-y-8">
              <span className="text-teal-400 text-medium font-semibold font-serif">{subtitle}</span>
              <h2 className="text-4xl md:text-6xl font-semibold mt-6 font-serif max-w-xl">{title}</h2>
              <p className="text-gray-300 max-w-xl font-sans">{description}</p>
            </div>

            {/* Bullet Points in 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300 font-sans">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats with Images */}
          <div className="lg:col-span-5 h-full">


            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 h-full">

              {/* Left stat */}
              <div className="flex flex-col items-center justify-center md:items-start md:pr-8">

                {/* Left Image */}
                <div className="w-full max-w-md overflow-hidden rounded-lg mb-8">
                  <img
                    src="https://dummyimage.com/250x300"
                    alt="Business professionals in conversation"
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* Left Stats */}
                <div className="relative w-full h-40 flex items-center">

                  <div className="absolute left-1/2 top-10 bottom-0 w-[1px] bg-white transform -translate-x-1/2 h-25"></div>

                  <div className="w-1/2 h-full flex flex-col justify-center items-center text-center pr-4">
                    <h2 className="text-3xl font-semibold mb-2 font-serif">
                      <CountUp
                        end={70}
                        suffix={'%'}
                        duration={2.5}
                        enableScrollSpy={false}
                        scrollSpyDelay={0}
                      />
                    </h2>
                    <p className="max-w-xs text-sm font-light font-sans">Faster drafting</p>
                  </div>

                  <div className="w-1/2 h-full flex flex-col justify-end items-center text-center pl-4">
                    <h2 className="text-3xl font-semibold mb-2 font-serif">
                      <CountUp
                        end={1000}
                        suffix={'+'}
                        duration={2.5}
                        enableScrollSpy={false}
                        scrollSpyDelay={0}
                      />
                    </h2>
                    <p className="max-w-xs text-sm font-light font-sans">Litigants Assisted</p>
                  </div>

                </div>

                {/*Animated Tooltip  */}
                <div className="md:hidden flex flex-col justify-center items-center bg-white rounded-xl p-3 mt-10 w-full shadow-lg">
                  <h3 className="text-black text-medium font-medium font-sans block mb-2">Our Users Worldwide</h3>
                  <div className="w-full flex flex-row items-center justify-center">
                    <AnimatedTooltip items={items} />
                  </div>
                </div>

              </div>

              {/* Right Image */}
              <div className="flex flex-col items-center justify-end md:pl-8">

                <div className="w-full max-w-md overflow-hidden rounded-lg">
                  <img
                    src="https://dummyimage.com/250x300"
                    alt="Business professionals working with laptop"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Animated Tooltip */}
              <div className="absolute hidden md:block md:top-20 md:left-60 flex flex-col items-center bg-white rounded-xl p-3 shadow-lg">
                <h3 className="text-black text-base font-medium font-sans mb-2">
                  Our Users Worldwide
                </h3>
                <div className="w-full flex items-center justify-center pr-5">
                  <AnimatedTooltip items={items} />
                </div>
              </div>



            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default MissionSection


// <div div className = "grid grid-cols-1 gap-8" >
// {
//   stats.map((stat, index) => (

//     <div key={index} className="relative">
//       {/* Stat Card */}
//       <div className="bg-gray-900 p-6 rounded-lg relative z-10">
//         <div className="text-3xl md:text-4xl font-bold mb-2">
//           {stat.value}
//           {stat.suffix}
//         </div>
//         <p className="text-sm text-gray-300">{stat.title}</p>
//       </div>

//       {/* Image Placeholder */}
//       <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-24 h-24 rounded-lg overflow-hidden border-2 border-gray-700 z-20">
//         <div className="w-full h-full bg-gray-800 flex items-center justify-center text-xs text-gray-500">
//           Image
//         </div>
//       </div>

//     </div>

//   ))
// }
//           </div >
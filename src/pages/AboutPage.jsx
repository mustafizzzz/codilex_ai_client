import React from 'react'
import TeamSection from './AboutComponent/TeamSection'
import VideoSection from './AboutComponent/VideoSection'
import StatsSection from './AboutComponent/StatsSection'
import MissionSection from './AboutComponent/MissionSection'
import BrandsSection from './AboutComponent/BrandsSection'
import AboutHeroSection from './AboutComponent/AboutHeroSection'



import teamMember1 from '.././assets/TeamMemberImage/teamMember1.png'
import teamMember2 from '.././assets/TeamMemberImage/teamMember2.png'
import teamMember3 from '.././assets/TeamMemberImage/teamMember3.png'
import videoThumbnail1 from '.././assets/VideoThumbnail/videoThumbnail1.png'

import logo1 from '.././assets/TrustedBrandLogo/logo1.png';
import logo2 from '.././assets/TrustedBrandLogo/logo2.png';
import logo3 from '.././assets/TrustedBrandLogo/logo3.png';
import logo4 from '.././assets/TrustedBrandLogo/logo4.png';
import logo5 from '.././assets/TrustedBrandLogo/logo5.png';
import logo6 from '.././assets/TrustedBrandLogo/logo6.png';

import AboutSection1 from '.././assets/AboutSection/AboutSection1.png';





const AboutPage = () => {

  const teamMembers = [
    {
      image: teamMember1 || "/placeholder.svg?height=400&width=300",
      name: "Esther Howards",
      title: "Founder & CEO",
      facebookUrl: "#",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      image: teamMember2 || "/placeholder.svg?height=400&width=300",
      name: "Cameron Williamson",
      title: "Marketing Head",
      facebookUrl: "#",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
    {
      image: teamMember3 || "/placeholder.svg?height=400&width=300",
      name: "Liam Cooper",
      title: "Marketing Head",
      facebookUrl: "#",
      linkedinUrl: "#",
      instagramUrl: "#",
    },
  ]



  const stats = [
    {
      value: 200,
      suffix: "+",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      value: 99,
      suffix: "%",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      value: 1.5,
      prefix: "",
      suffix: "M+",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
  ]


  const brands = [
    { logo: logo1 || "/placeholder.svg?height=40&width=120", name: "Brand 1", url: "#" },
    { logo: logo2 || "/placeholder.svg?height=40&width=120", name: "Brand 2", url: "#" },
    { logo: logo3 || "/placeholder.svg?height=40&width=120", name: "Brand 3", url: "#" },
    { logo: logo4 || "/placeholder.svg?height=40&width=120", name: "Brand 4", url: "#" },
    { logo: logo5 || "/placeholder.svg?height=40&width=120", name: "Brand 5", url: "#" },
    { logo: logo6 || "/placeholder.svg?height=40&width=120", name: "Brand 6", url: "#" },
  ]

  const handleTrialButtonClick = () => {
    console.log("Trail button clicked in about");

  }
  const handleContactButtonClick = () => {
    console.log("Contact us button clicked");

  }

  return (
    <div>

      <AboutHeroSection
        subtitle="Lorem Ipsum is simply dummy text"
        title="Ready to take"
        highlightedText="Lorem Dummy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar."
        image={AboutSection1}
        buttonText="Contact Us"
        buttonOnClick={handleContactButtonClick}
      />

      <StatsSection stats={stats} />

      <MissionSection
        subtitle="Our Mission"
        title="Lorem ipsum is dummy text."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus."

        bulletPoints={[
          "Lorem ipsum is simply dummy",
          "Lorem ipsum is simply dummy",
          "Lorem ipsum is simply dummy",
          "Lorem ipsum is simply dummy",
          "Lorem ipsum is simply dummy",
          "Lorem ipsum is simply dummy",
        ]}

        items={[
          { id: 1, name: "John Doe", designation: "Senior Lawyer", image: "https://randomuser.me/api/portraits/men/4.jpg" },
          { id: 2, name: "Jane Smith", designation: "Legal Analyst", image: "https://randomuser.me/api/portraits/men/8.jpg" },
          { id: 3, name: "John Doe", designation: "Senior Lawyer", image: "https://randomuser.me/api/portraits/men/9.jpg" },
          { id: 4, name: "Jane Smith", designation: "Legal Analyst", image: "https://randomuser.me/api/portraits/men/10.jpg" },
          { id: 5, name: "John Doe", designation: "Senior Lawyer", image: "https://randomuser.me/api/portraits/men/11.jpg" },
          { id: 6, name: "Jane Smith", designation: "Legal Analyst", image: "https://randomuser.me/api/portraits/women/12.jpg" },
        ]}
      />

      <TeamSection title="Legal Expertise" teamMembers={teamMembers} />

      <VideoSection
        videoThumbnail={videoThumbnail1 || "/placeholder.svg?height=400&width=600"}
        videoUrl="https://www.youtube.com/watch?v=eKSTaoSDrwI"
        subtitle="Lorem Ipsum"
        title="Lorem Ipsum is simply dummy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit mattis ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id."
        buttonText="Start your Free Trial"
        buttonOnClick={handleTrialButtonClick}
      />
      <BrandsSection brands={brands} />

    </div>
  )
}

export default AboutPage
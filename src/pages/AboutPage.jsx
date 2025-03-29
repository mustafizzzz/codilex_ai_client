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
      title: "Legal Professionals Onboard",
      description:
        "Trusted by lawyers, law firms, and legal teams for AI-powered efficiency.",
    },
    {
      value: 70,
      suffix: "%",
      title: "Time Saved on Drafting & Research",
      description:
        "Accelerate legal workflows with AI-driven document analysis and automation.",
    },
    {
      value: 10000,
      suffix: "+",
      title: "Documents Processed",
      description:
        "From pleadings to contracts, our AI has reviewed and drafted thousands of legal documents with precision.",
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

  const words = [
    { text: "and", className: "text-white text-3xl md:text-5xl font-semibold font-serif" }, // White animated text
    { text: "always available.", className: "text-teal-400 text-3xl md:text-5xl font-semibold font-serif" }, // Animated in teal-400
  ];

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
        title="We give you legal assistance"
        highlightedText="which is instant, precise,"
        afterHighlightedText="and always available."
        words={words}
        description="Redefining legal efficiency with AI-powered precision."
        image={AboutSection1}
        buttonText="Contact Us"
        buttonOnClick={handleContactButtonClick}
      />

      <StatsSection stats={stats} />

      <MissionSection
        subtitle="Our Mission"
        title="Empowering Justice Through Innovation."
        highlightedText="Through Innovation."
        description="Our mission is to make legal knowledge and tools accessible to everyone, lawyers and litigants alike. By harnessing the power of AI, we simplify complex legal processes, save time, and empower you to make informed decisions with confidence."

        bulletPoints={[
          "Automating tedious legal tasks so lawyers can focus on what matters most— strategy and advocacy.",
          "Empowering litigants with accessible, affordable, and easy-to-understand legal information.",
          "Leveraging AI-driven analysis to enhance accuracy and minimize errors in legal documentation.",
          "Reducing drafting, research, and case summarization time by up to 70%.",
          "Ensuring end-to-end encryption to maintain confidentiality of sensitive legal data.",
          "Providing round-the-clock assistance, eliminating delays and workflow disruptions.",
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
        subtitle="Transforming Access to Legal Support"
        title="Bringing legal assistance to everyone, everywhere with just a click."
        highlightedText="everyone, everywhere"
        description="Our AI-powered solutions simplify legal access for individuals, businesses, and professionals. From affordable advice to document automation, we make legal services faster, more accessible, and cost-effective for all."
        buttonText="Start your Free Trail"
        buttonOnClick={handleTrialButtonClick}
      />
      <BrandsSection brands={brands} />

    </div>
  )
}

export default AboutPage
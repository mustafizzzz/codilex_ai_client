import React from 'react'
import ContentImageSection from './FreeTrailSectionComponent/ContentImageSection'
import Section3Group from '../../assets/FreeTrailSectionImage/Section3Group.png'

const FreeTrailSection1 = () => {

  const handleButtonClick = () => {
    console.log("Free trial button clicked")
  }

  return (
    <ContentImageSection
      subtitle="Instant Legal Q&A"
      title="Simplifying Law for Everyone"
      description="Our AI-powered legal Q&A tool provides instant answers to common legal questions in plain, understandable language. Designed for the general public, this tool covers a wide range of legal topics, including family law, property disputes, contracts, and consumer rights. It eliminates the complexity of legal jargon, offering clear, precise explanations backed by a vast legal database. Whether you need general legal guidance or quick insights into your rights, this feature ensures easy access to legal knowledge at your fingertips."
      buttonText="Start your Free Trial"
      buttonOnClick={handleButtonClick}
      image={Section3Group}
      bgColor="bg-black"
      imageOnRight={false} // Image will be on the right
    />
  )
}

export default FreeTrailSection1
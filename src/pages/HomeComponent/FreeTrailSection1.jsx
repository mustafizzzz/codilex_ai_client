import React from 'react'
import ContentImageSection from './FreeTrailSectionComponent/ContentImageSection'
import Section3Group from '../../assets/FreeTrailSectionImage/Section3Group.png'

const FreeTrailSection1 = () => {

  const handleButtonClick = () => {
    console.log("Free trial button clicked")
  }

  return (
    <ContentImageSection
      subtitle="The Junior Who Never Asks for a Raise or a Weekend Off."
      title="No Salary Hikes. No Sudden Resignations. Just Pure Productivity."
      highlightedText="Pure Productivity."
      description="Our AI legal assistant works around the clock, handling research and drafting whenever needed. No leave applications, no resignations, just reliable support."
      buttonText="Start your Free Trial"
      buttonOnClick={handleButtonClick}
      image={Section3Group}
      bgColor="bg-black"
      imageOnRight={false} // Image will be on the right
    />
  )
}

export default FreeTrailSection1
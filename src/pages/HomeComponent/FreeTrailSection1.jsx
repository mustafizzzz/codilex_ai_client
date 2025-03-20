import React from 'react'
import ContentImageSection from './FreeTrailSectionComponent/ContentImageSection'
import Section3Group from '../../assets/FreeTrailSectionImage/Section3Group.png'

const FreeTrailSection1 = () => {

  const handleButtonClick = () => {
    console.log("Free trial button clicked")
  }

  return (
    <ContentImageSection
      subtitle="Lorem Ipsum"
      title="Lorem Ipsum is simply dummy"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id."
      buttonText="Start your Free Trial"
      buttonOnClick={handleButtonClick}
      image={Section3Group}
      bgColor="bg-black"
      imageOnRight={false} // Image will be on the right
    />
  )
}

export default FreeTrailSection1
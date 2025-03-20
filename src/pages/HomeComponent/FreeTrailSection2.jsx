import React from 'react'
import ContentImageSection from './FreeTrailSectionComponent/ContentImageSection'
import Section4Group from '../../assets/FreeTrailSectionImage/Section4Group.png'

const FreeTrailSection2 = () => {

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
      image={Section4Group}
      bgColor="bg-white"
      imageOnRight={true} // Image will be on the right
    />
  )
}

export default FreeTrailSection2
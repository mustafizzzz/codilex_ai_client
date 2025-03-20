import React from 'react'
import Section5Group from '../../assets/FreeTrailSectionImage/Section5Group.png'
import ContentImageSection from './FreeTrailSectionComponent/ContentImageSection'

const FreeTrailSection3 = () => {
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
      image={Section5Group}
      bgColor="bg-black"
      imageOnRight={false} // Image will be on the right
    />
  )
}

export default FreeTrailSection3
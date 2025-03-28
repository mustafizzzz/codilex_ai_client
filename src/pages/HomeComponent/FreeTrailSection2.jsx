import React from 'react'
import ContentImageSection from './FreeTrailSectionComponent/ContentImageSection'
import Section4Group from '../../assets/FreeTrailSectionImage/Section4Group.png'

const FreeTrailSection2 = () => {

  const handleButtonClick = () => {
    console.log("Free trial button clicked")
  }

  return (

    <ContentImageSection
      subtitle="Legal Help, Now. The Law Shouldn’t Be a Mystery."
      title="Confused About the Law? Get Instant Answers Without the Jargon."
      highlightedText="Get Instant Answers"
      description="No more legal jargon or costly consultations. From contracts to property disputes, our AI simplifies complex laws into clear answers for informed decisions."
      buttonText="Start your Free Trial"
      buttonOnClick={handleButtonClick}
      image={Section4Group}
      bgColor="bg-white"
      imageOnRight={true} // Image will be on the right
    />
  )
}

export default FreeTrailSection2
import React from 'react'
import Section5Group from '../../assets/FreeTrailSectionImage/Section5Group.png'
import ContentImageSection from './FreeTrailSectionComponent/ContentImageSection'

const FreeTrailSection3 = () => {
  const handleButtonClick = () => {
    console.log("Free trial button clicked")
  }

  return (
    <ContentImageSection
      subtitle="Smarter. Faster. More Reliable."
      title="Built for Everyone, Tailored for Lawyers."
      highlightedText="Tailored for Lawyers."
      description="Trained on vast legal databases, our AI delivers precise, reliable insights. Whether you're a lawyer or an individual, it streamlines legal work, saving time, money, and stress."
      buttonText="Start your Free Trial"
      buttonOnClick={handleButtonClick}
      image={Section5Group}
      bgColor="bg-black"
      imageOnRight={false} // Image will be on the right
    />
  )
}

export default FreeTrailSection3
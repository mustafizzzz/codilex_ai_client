import React from 'react'
import ContentImageSection from './FreeTrailSectionComponent/ContentImageSection'
import Section4Group from '../../assets/FreeTrailSectionImage/Section4Group.png'

const FreeTrailSection2 = () => {

  const handleButtonClick = () => {
    console.log("Free trial button clicked")
  }

  return (

    <ContentImageSection
      subtitle="AI-Generated Judgment Headnotes"
      title="Save Time, Enhance Research"
      description="Legal research can be time-consuming, but our AI-driven Judgment Headnotes tool condenses lengthy court judgments into concise, well-structured summaries. It extracts key takeaways, including the ratio decidendi, obiter dicta, and relevant precedents, making legal analysis faster and more efficient. Categorized for easy access, this feature is ideal for lawyers, researchers, and students looking to quickly grasp the essence of a case without reading through hundreds of pages."
      buttonText="Start your Free Trial"
      buttonOnClick={handleButtonClick}
      image={Section4Group}
      bgColor="bg-white"
      imageOnRight={true} // Image will be on the right
    />
  )
}

export default FreeTrailSection2
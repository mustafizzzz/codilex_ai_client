import React from 'react'
import Section5Group from '../../assets/FreeTrailSectionImage/Section5Group.png'
import ContentImageSection from './FreeTrailSectionComponent/ContentImageSection'

const FreeTrailSection3 = () => {
  const handleButtonClick = () => {
    console.log("Free trial button clicked")
  }

  return (
    <ContentImageSection
      subtitle="Smart Case File & Document Summarization"
      title="Understand Legal Documents in Minutes"
      description="Our AI-powered summarization tool analyzes case files, applications, summons, and other legal documents to extract key facts, issues, and arguments. It reduces reading time by presenting an easy-to-digest summary while preserving all essential legal details. Supporting multiple formats like PDFs, Word documents, and scanned images, this tool is designed to help legal professionals, judges, and researchers save time and improve workflow efficiency."
      buttonText="Start your Free Trial"
      buttonOnClick={handleButtonClick}
      image={Section5Group}
      bgColor="bg-black"
      imageOnRight={false} // Image will be on the right
    />
  )
}

export default FreeTrailSection3
import React from 'react'
import ChatInterface from './QuestionAnswerComponent/Chat/ChatInterface'
import SiteHeader from '@/components/reuseComponent/SiteHeader'

import RectangleContact from ".././assets/HeaderBanner/RectangleContact.png";

const QuestionAnswer = () => {
  return (
    <div>
      <SiteHeader
        backgroundImage={RectangleContact}
        title="Question and Answer"
        description="We're here to assist you! Whether you have questions or need support, feel free to reach out to us, and we'll get back to you as soon as possible."
      />
      <div className={`container mx-auto px-4 border-2 rounded-xl shadow-lg mb-12 overflow-auto`}>
        <ChatInterface />
      </div>
    </div>
  )
}

export default QuestionAnswer
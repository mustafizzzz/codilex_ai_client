import React from 'react'
import ChatInterface from './QuestionAnswerComponent/Chat/ChatInterface'
import SiteHeader from '@/components/reuseComponent/SiteHeader'

import RectangleContact from ".././assets/HeaderBanner/RectangleContact.png";

const QuestionAnswer = () => {
  return (
    <div>
      {/* <SiteHeader
        backgroundImage={RectangleContact}
        title="Question and Answer"
        description="We're here to assist you! Whether you have questions or need support, feel free to reach out to us, and we'll get back to you as soon as possible."
      /> */}
      <div className={`overflow-y-auto border-5 border-yellow-300`}>
        <ChatInterface />
      </div>
    </div>
  )
}

export default QuestionAnswer
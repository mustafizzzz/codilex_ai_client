import React, { useEffect, useRef, useState } from 'react'
import { initialMessages } from './dummyData'
import ChatMessageList from './ChatMessageList'
import ChatInput from './ChatInput'

const ChatMain = ({ className = "" }) => {

  const [messages, setMessages] = useState(initialMessages)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Scroll to bottom when messages change
  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  // }, [messages])

  const handleSendMessage = async (content) => {
    if (!content.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      role: "user",
      content,
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    // Simulate API response delay from ai
    setTimeout(() => {
      // Add AI response
      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (


    <div className={`flex flex-col h-screen ${className}`}>
      {/* Header */}
      <div className="border-b p-4">
        <h2 className="font-semibold text-2xl font-serif">Ask Anything...</h2>
      </div>

      {/* Scrollable Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <ChatMessageList messages={messages} isLoading={isLoading} />
        <div ref={messagesEndRef} />
      </div>

      {/* Fixed Chat Input */}
      <div className="sticky bottom-0 bg-white border-t p-4 z-10">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>

    </div>



  )
}

export default ChatMain
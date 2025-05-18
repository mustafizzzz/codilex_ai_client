import React, { useEffect, useRef, useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatMessageList from './ChatMessageList'
import ChatInput from './ChatInput'

const ChatMain = ({ activeDraft }) => {
  const [messages, setMessages] = useState(activeDraft?.messages || [])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Update messages when active draft changes
  useEffect(() => {
    if (activeDraft?.messages) {
      setMessages(activeDraft.messages)
    }
  }, [activeDraft])

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSendMessage = async (content) => {
    if (!content.trim()) return

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    // Simulate API call for bot response
    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        content: `This is a response to: "${content}"`,
        sender: "bot",
        timestamp: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      <ChatHeader title={activeDraft?.title || "Ask anything.."} />

      <div className="flex-1 overflow-y-auto">
        <ChatMessageList messages={messages} isLoading={isLoading} messagesEndRef={messagesEndRef} />
      </div>

      <div className="border-t p-4">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default ChatMain
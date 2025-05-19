import React, { useEffect, useRef, useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatMessageList from './ChatMessageList'
import ChatInput from './ChatInput'
import axios from 'axios'
import { useAuth } from '@/Context/AuthContext'

const ChatMain = ({ activeDraft }) => {
  const [messages, setMessages] = useState(activeDraft?.messages || [])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null);
  const { token } = useAuth();
  console.log("Token is :", token);


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

    //api testing for asking a question
    try {

      // draft case API
      // const response = await axios.post(
      //   "http://localhost:8080/codilex/api/v1/lawyer/draft-case",
      //   {
      //     caseDetails: "A dispute between two parties over a contract agreement breach.",
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      // Summary API
      // const response = await axios.post(
      //   "http://localhost:8080/codilex/api/v1/lawyer/generate-summary",
      //   {
      //     documentText: "This document describes the contractual obligations between two business entities and the timeline for delivery of goods.",
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      const response = await axios.post(
        "http://localhost:8080/codilex/api/v1/litigant/ask",
        {
          question: "What is the limitation period for filing a civil suit?",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Answer:", response.data);

    } catch (error) {
      console.error("Error asking question:", error.response?.data || error.message);
    }

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
      <ChatHeader title={"Ask anything..."} />

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
import React, { useEffect, useRef, useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatMessageList from './ChatMessageList'
import ChatInput from './ChatInput'
import axios from 'axios'
import { useAuth } from '@/Context/AuthContext'

const ChatMain = ({ activeDraft, selectedOption, setSelectedOption, setDialogOpen }) => {
  const [messages, setMessages] = useState(activeDraft?.messages || [])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null);
  const [hasAskedQuestion, setHasAskedQuestion] = useState(false)
  const { token } = useAuth();
  console.log("Token is :", token);
  console.log("User selected options:", selectedOption);



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
    if (hasAskedQuestion) return
    if (!content.trim()) return
    console.log("Content to send:", content);


    //api testing for asking a question
    try {
      const response = await axios.post(
        `http://localhost:8080/codilex/api/v1${selectedOption.endpoint}`,
        {
          [selectedOption.payloadKey]: content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Answer:", response.data.body);

      const userMessage = {
        id: Date.now().toString(),
        content,
        sender: "user",
        timestamp: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, userMessage])
      setIsLoading(true);

      const botMessage = {
        id: (Date.now() + 1).toString(),
        content: response?.data?.body || JSON.stringify(response?.data?.body),
        sender: "bot",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false);
      setHasAskedQuestion(true)

    } catch (error) {
      console.error("Error asking question:", error.response?.data || error.message);
      return;
    }
    // Simulate API call for bot response
    // setTimeout(() => {
    //   const botMessage = {
    //     id: (Date.now() + 1).toString(),
    //     content: `This is a response to: "${content}"`,
    //     sender: "bot",
    //     timestamp: new Date().toISOString(),
    //   }

    //   setMessages((prev) => [...prev, botMessage])
    //   setIsLoading(false)
    // }, 1000);


  }

  return (
    <div className="flex-1 flex flex-col h-full">
      <ChatHeader title={"Ask anything..."} />

      <div className="flex-1 overflow-y-auto">
        <ChatMessageList messages={messages} isLoading={isLoading} messagesEndRef={messagesEndRef} />
      </div>

      <div className="border-t p-4">
        <ChatInput
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          hasAskedQuestion={hasAskedQuestion}
          onAskAgain={() => {
            setMessages([])
            setHasAskedQuestion(false)
            setSelectedOption(null)
            setDialogOpen(true)
          }} />
      </div>
    </div>
  )
}

export default ChatMain
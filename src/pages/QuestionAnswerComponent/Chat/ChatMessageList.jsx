import React from 'react'
import ChatMessage from './ChatMessage'
import ChatMessageSkeleton from './ChatMessageSkeleton'

const ChatMessageList = ({ messages, isLoading }) => {

  return (
    <div className="space-y-6 w-full mx-auto px-4 border-4 border-red-300">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}

      {isLoading && <ChatMessageSkeleton />}
    </div>
  )
}

export default ChatMessageList
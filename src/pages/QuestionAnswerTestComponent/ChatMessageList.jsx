import React from 'react'
import ChatMessageSkeleton from '../QuestionAnswerComponent/Chat/ChatMessageSkeleton'
import ChatMessage from './ChatMessage'

const ChatMessageList = ({ messages, isLoading, messagesEndRef }) => {
  // Group messages by sender for consecutive messages
  const groupedMessages = messages.reduce((groups, message, index) => {
    const prevMessage = messages[index - 1]

    // Start a new group if this is the first message or sender changed
    if (index === 0 || prevMessage.sender !== message.sender) {
      groups.push([message])
    } else {
      // Add to the last group if same sender
      groups[groups.length - 1].push(message)
    }

    return groups
  }, [])

  return (
    <div className="flex flex-col min-h-0">
      {/* Spacer to push messages down when there are few messages */}
      <div className="flex-1" />

      <div className="space-y-6 p-4">
        {groupedMessages.map((group, groupIndex) => (
          <div key={groupIndex} className="space-y-2">
            {group.map((message, messageIndex) => (
              <ChatMessage
                key={message.id}
                message={message}
                isFirstInGroup={messageIndex === 0}
                isLastInGroup={messageIndex === group.length - 1}
              />
            ))}
          </div>
        ))}

        {isLoading && <ChatMessageSkeleton />}

        {/* Element for scrolling to bottom */}
        <div ref={messagesEndRef} style={{ height: "1px" }} />
      </div>
    </div>
  )
}

export default ChatMessageList
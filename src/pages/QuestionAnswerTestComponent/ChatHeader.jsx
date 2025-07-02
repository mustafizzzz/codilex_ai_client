import React from 'react'

const ChatHeader = ({ title = "Lorem Ipsum" }) => {
  return (
    <div className="border-b p-4 flex items-center justify-between">
      <h2 className="font-semibold text-xl">{title}</h2>
      <div className="text-sm text-muted-foreground">9:45</div>
    </div>
  )
}

export default ChatHeader
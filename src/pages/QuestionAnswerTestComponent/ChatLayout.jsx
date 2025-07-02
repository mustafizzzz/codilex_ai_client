import React from 'react'

const ChatLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background border border-border rounded-lg">{children}</div>
  )
}

export default ChatLayout
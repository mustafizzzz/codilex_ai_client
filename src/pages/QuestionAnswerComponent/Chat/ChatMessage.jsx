import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { Bot, User } from 'lucide-react'
import React from 'react'
import ChatMessageActions from './ChatMessageActions'

const ChatMessage = ({ message }) => {

  const isUser = message.role === "user"

  return (

    <div className={cn("flex items-start gap-4 max-w-full", isUser ? "justify-end" : "justify-start")}>

      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="" alt="AI Assistant" />
          <AvatarFallback className="bg-primary text-primary-foreground">
            <Bot className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}

      <div
        className={cn(
          "rounded-lg p-4 max-w-[85%]",
          isUser ? "bg-black text-white rounded-tr-none" : "bg-muted rounded-tl-none",
        )}>
        <div className="prose prose-sm dark:prose-invert">{message.content}</div>

        {!isUser && message.content.length > 100 && <ChatMessageActions />}

      </div>

      {isUser && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="" alt="User" />
          <AvatarFallback className="bg-primary text-primary-foreground">
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      )}

    </div>
  )
}

export default ChatMessage
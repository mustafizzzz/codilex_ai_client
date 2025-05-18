import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Copy, Download } from 'lucide-react'
import React from 'react'

const ChatMessage = ({ message, isFirstInGroup, isLastInGroup }) => {
  const isUser = message.sender === "user"

  return (
    <div className={cn("flex items-start gap-3", isUser ? "justify-end" : "justify-start")}>
      {/* Avatar for bot messages */}
      {!isUser && isFirstInGroup && (
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs">B</span>
        </div>
      )}

      {/* Avatar spacer for consecutive bot messages */}
      {!isUser && !isFirstInGroup && <div className="w-8 flex-shrink-0" />}

      {/* Message content */}
      <div
        className={cn(
          "relative max-w-[80%] rounded-lg p-3",
          isUser ? "bg-black text-white" : "bg-muted text-foreground",
        )}
      >
        {message.content}

        {/* Action buttons for bot messages */}
        {!isUser && isLastInGroup && (
          <div className="flex gap-1 mt-2 justify-end">
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Copy className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Download className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>

      {/* Avatar for user messages */}
      {isUser && isFirstInGroup && (
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <span className="text-primary-foreground text-xs">U</span>
        </div>
      )}

      {/* Avatar spacer for consecutive user messages */}
      {isUser && !isFirstInGroup && <div className="w-8 flex-shrink-0" />}
    </div>
  )
}

export default ChatMessage
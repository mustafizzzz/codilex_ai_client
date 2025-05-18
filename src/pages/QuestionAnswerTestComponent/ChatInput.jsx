import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { SendHorizontal } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const ChatInput = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState("")
  const textareaRef = useRef(null)

  // Auto-focus the textarea on mount
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      onSendMessage(input)
      setInput("")
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative flex items-center bg-background border border-input rounded-full px-4 py-2 shadow-sm focus-within:ring-1 focus-within:ring-ring">
        <Textarea
          ref={textareaRef}
          placeholder="Type your question here or draft..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 resize-none border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0 max-h-32"
          disabled={isLoading}
          rows={1}
        />

        <Button
          type="submit"
          size="icon"
          className="absolute right-2 rounded-full h-8 w-8"
          disabled={isLoading || !input.trim()}
        >
          <SendHorizontal className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </form>
  )
}

export default ChatInput
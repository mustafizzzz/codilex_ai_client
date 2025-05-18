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
      <div className="relative flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-primary">
        <Textarea
          ref={textareaRef}
          placeholder="Type your question here or draft..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 resize-none border-none bg-transparent focus:ring-0 focus-visible:ring-0 min-h-12 pl-0 pr-14 py-0 text-sm shadow-none"
          disabled={isLoading}
          rows={1}
        />

        <Button
          type="submit"
          size="icon"
          className="absolute right-2 rounded-full h-10 w-10"
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
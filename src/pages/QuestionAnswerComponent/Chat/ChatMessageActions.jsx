import { Button } from '@/components/ui/button'
import { Copy, Download } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

const ChatMessageActions = () => {


  const handleCopy = () => {
    // In a real app, this would copy the message content
    navigator.clipboard.writeText("Message content copied to clipboard")
    toast({
      description: "Message copied to clipboard",
    })
  }

  const handleDownload = () => {
    // In a real app, this would download the message content
    toast({
      description: "Message downloaded",
    })
  }

  return (
    <div className="flex items-center justify-end gap-2 mt-2">
      <Button variant="ghost" size="icon" onClick={handleCopy}>
        <Copy className="h-4 w-4" />
        <span className="sr-only">Copy message</span>
      </Button>
      <Button variant="ghost" size="icon" onClick={handleDownload}>
        <Download className="h-4 w-4" />
        <span className="sr-only">Download message</span>
      </Button>
    </div>
  )
}

export default ChatMessageActions
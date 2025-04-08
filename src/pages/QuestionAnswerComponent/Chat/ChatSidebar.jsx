import { Button } from '@/components/ui/button'
import { MessageSquareMore, PlusCircle } from 'lucide-react'
import React from 'react'

const ChatSidebar = ({ drafts, onDraftClick, className = "" }) => {
  return (
    <div className={`flex h-full flex-col bg-background ${className}`}>

      <div className="p-4">
        <h2 className="font-semibold font-serif">Drafts</h2>
      </div>

      <div className="flex-1 overflow-auto">
        <nav className="grid gap-1 p-2">
          {drafts.map((draft) => (
            <Button
              key={draft.id}
              variant={draft.active ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => onDraftClick(draft.id)}
            >
              {/* <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span> */}
              <MessageSquareMore className="mr-2 w-4 h-4" />
              {draft.title}
            </Button>
          ))}
        </nav>
      </div>

      <div className="p-4">
        <Button variant="outline" className="w-full justify-start">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>

    </div>
  )
}

export default ChatSidebar
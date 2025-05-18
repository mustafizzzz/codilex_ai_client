import { Button } from "@/components/ui/button"
import { PlusCircle, MessageSquare } from "lucide-react"
import React from 'react'

const ChatSidebar = ({ drafts, onDraftClick }) => {
  return (
    <div className="w-64 border-r border-border flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="font-semibold">Drafts</h2>
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
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${draft.active ? "bg-black text-white" : "bg-gray-200"}`}
              >
                <MessageSquare className="w-3 h-3" />
              </div>
              <span className="truncate">{draft.title}</span>
            </Button>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t">
        <Button variant="outline" className="w-full justify-start">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>
    </div>
  )
}

export default ChatSidebar
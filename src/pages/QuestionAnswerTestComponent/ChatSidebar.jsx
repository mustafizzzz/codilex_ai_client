import { Button } from "@/components/ui/button"
import { PlusCircle, MessageSquare } from "lucide-react"
import React from 'react'

const ChatSidebar = ({ drafts, onDraftClick }) => {
  return (
    <div className="w-full md:w-64 border-r border-border flex flex-col h-full bg-background">
      <div className="p-4 border-b">
        <h1 className="font-semibold text-xl">Drafts</h1>
      </div>

      <div className="flex-1 overflow-auto">
        <nav className="grid gap-1 p-2">
          {drafts.map((draft) => (
            <Button
              key={draft.id}
              variant={draft.active ? "secondary" : "ghost"}
              className="justify-start cursor-pointer"
              onClick={() => onDraftClick(draft.id)}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${draft.active ? "bg-black text-white" : "bg-gray-200"}`}
              >
                <MessageSquare className="w-3 h-3" />
              </div>
              <span className="truncate">{draft.title}</span>
            </Button>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t">
        <Button variant="outline" className="w-full justify-start cursor-pointer">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>
    </div>
  )
}

export default ChatSidebar
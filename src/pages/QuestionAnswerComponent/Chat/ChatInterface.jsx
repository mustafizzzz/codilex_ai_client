import { useMediaQuery } from '@/hooks/use-media-query'
import React, { useState } from 'react'
import ChatSidebar from './ChatSidebar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import ChatMain from './ChatMain'

const ChatInterface = () => {

  const [drafts, setDrafts] = useState([
    { id: 1, title: "Lorem Ipsum", active: false },
    { id: 2, title: "Lorem 2", active: true },
    { id: 3, title: "Lorem 3", active: false },
    { id: 4, title: "Lorem 4", active: false },
    { id: 5, title: "Lorem 5", active: false },
  ])

  const isDesktop = useMediaQuery("(min-width: 768px)")

  const handleDraftClick = (id) => {
    setDrafts(
      drafts.map((draft) => ({
        ...draft,
        active: draft.id === id,
      })),
    )
  }

  // Desktop view renders sidebar and main content side by side
  if (isDesktop) {
    return (
      <div className="flex h-screen">
        <ChatSidebar drafts={drafts} onDraftClick={handleDraftClick} className="w-64 border-r" />
        <ChatMain className="flex-1" />
      </div>
    )
  }

  // Mobile view uses a sheet for the sidebar
  return (

    <div className="flex h-screen flex-col">
      <div className="flex items-center border-b p-2">

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <ChatSidebar drafts={drafts} onDraftClick={handleDraftClick} />
          </SheetContent>

        </Sheet>

        <h1 className="text-lg font-semibold">Ask anything..</h1>
      </div>
      <ChatMain className="flex-1" />
    </div>

  )
}


export default ChatInterface
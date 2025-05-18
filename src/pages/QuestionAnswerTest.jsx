import React, { useState } from 'react'
import ChatLayout from './QuestionAnswerTestComponent/ChatLayout'
import ChatMain from './QuestionAnswerTestComponent/ChatMain'
import ChatSidebar from './QuestionAnswerTestComponent/ChatSidebar'
import { initialDrafts } from './QuestionAnswerTestComponent/initialData'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

const QuestionAnswerTest = () => {
  const [drafts, setDrafts] = useState(initialDrafts)
  const [activeDraftId, setActiveDraftId] = useState(drafts[0]?.id)

  // Handle draft selection
  const handleDraftClick = (id) => {
    setActiveDraftId(id)

    // Update active state in drafts
    setDrafts(
      drafts.map((draft) => ({
        ...draft,
        active: draft.id === id,
      })),
    )
  }

  const activeDraft = drafts.find((draft) => draft.id === activeDraftId) || drafts[0]


  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <ChatLayout>
        <ChatSidebar drafts={drafts} onDraftClick={handleDraftClick} />
        <ChatMain activeDraft={activeDraft} />
      </ChatLayout>
    )
  }
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
      </div>
      <ChatMain className="flex-1" />
    </div>

  )
}

export default QuestionAnswerTest
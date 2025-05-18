import React, { useState } from 'react'
import ChatLayout from './QuestionAnswerTestComponent/ChatLayout'
import ChatMain from './QuestionAnswerTestComponent/ChatMain'
import ChatSidebar from './QuestionAnswerTestComponent/ChatSidebar'
import { initialDrafts } from './QuestionAnswerTestComponent/initialData'

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
  return (
    <ChatLayout>
      <ChatSidebar drafts={drafts} onDraftClick={handleDraftClick} />
      <ChatMain activeDraft={activeDraft} />
    </ChatLayout>
  )
}

export default QuestionAnswerTest
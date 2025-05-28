import React, { useState } from 'react'
import ChatLayout from './QuestionAnswerTestComponent/ChatLayout'
import ChatMain from './QuestionAnswerTestComponent/ChatMain'
import ChatSidebar from './QuestionAnswerTestComponent/ChatSidebar'
import { initialDrafts } from './QuestionAnswerTestComponent/initialData'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import OptionSelectionDialogBox from './QuestionAnswerTestComponent/OptionSelectionDialogBox'

const QuestionAnswerTest = () => {
  const [drafts, setDrafts] = useState(initialDrafts)
  const [activeDraftId, setActiveDraftId] = useState(drafts[0]?.id)

  //options for chat with ai
  const [selectedOption, setSelectedOption] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(true);

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

  const activeDraft = drafts.find((draft) => draft.id === activeDraftId) || drafts[0];

  //api options
  const options = [
    {
      key: "ask-question",
      label: "Ask a Legal Question",
      description: "Get answers to general legal questions.",
      endpoint: "/litigant/ask",
      payloadKey: "question",
    },
    {
      key: "draft-case",
      label: "Draft a Case",
      description: "Get help writing a legal case draft.",
      endpoint: "/lawyer/draft-case",
      payloadKey: "caseDetails",
    },
    {
      key: "generate-headnotes",
      label: "Generate Headnotes",
      description: "Extract headnotes from legal judgments.",
      endpoint: "/lawyer/generate-headnotes",
      payloadKey: "judgmentText",
    },
    {
      key: "generate-summary",
      label: "Generate Summary",
      description: "Summarize legal documents quickly.",
      endpoint: "/lawyer/generate-summary",
      payloadKey: "documentText",
    },
  ];



  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <ChatLayout>
        {/* <ChatSidebar drafts={drafts} onDraftClick={handleDraftClick} /> */}
        <OptionSelectionDialogBox
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          setSelectedOption={setSelectedOption}
          options={options}
        />
        <ChatMain activeDraft={activeDraft} selectedOption={selectedOption} setSelectedOption={setSelectedOption} setDialogOpen={setDialogOpen} />
      </ChatLayout>
    )
  }
  return (

    <div className="flex h-screen flex-col">
      <OptionSelectionDialogBox />
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
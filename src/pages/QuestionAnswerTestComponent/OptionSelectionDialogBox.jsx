import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import React from 'react'

const OptionSelectionDialogBox = ({ dialogOpen, setDialogOpen, options, setSelectedOption }) => {
  return (
    <AlertDialog open={dialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select a service to start</AlertDialogTitle>
          <AlertDialogDescription>
            Please choose what you'd like to do before starting the chat.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {options?.map((opt) => (
            <button
              key={opt.key}
              onClick={() => {
                setSelectedOption(opt)
                setDialogOpen(false)
              }}
              className="border border-gray-300 hover:border-gray-500 text-left rounded-lg p-3 transition-all cursor-pointer"

            >
              <div className="font-medium">{opt.label}</div>
              <div className="text-sm text-muted-foreground">{opt.description}</div>
            </button>
          ))}
        </div>
      </AlertDialogContent>
    </AlertDialog>

  )
}

export default OptionSelectionDialogBox
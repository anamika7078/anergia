'use client'

import React, { createContext, useContext } from 'react'

interface DemoContextType {
  openDemoModal: (selectionId?: string) => void
  closeDemoModal: () => void
}

export const DemoContext = createContext<DemoContextType | undefined>(undefined)

export function useDemo() {
  const context = useContext(DemoContext)
  if (context === undefined) {
    throw new Error('useDemo must be used within a DemoProvider')
  }
  return context
}

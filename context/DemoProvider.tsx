'use client'

import React, { useState, useCallback } from 'react'
import DemoModal from '@/components/DemoModal'
import { DemoContext } from './DemoContext'

export function DemoProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selectionId, setSelectionId] = useState<string | undefined>(undefined)

    const openDemoModal = useCallback((id?: string) => {
        setSelectionId(id)
        setIsOpen(true)
    }, [])

    const closeDemoModal = useCallback(() => {
        setIsOpen(false)
    }, [])

    return (
        <DemoContext.Provider value={{ openDemoModal, closeDemoModal }}>
            {children}
            <DemoModal
                isOpen={isOpen}
                onClose={closeDemoModal}
                initialSelection={selectionId}
            />
        </DemoContext.Provider>
    )
}

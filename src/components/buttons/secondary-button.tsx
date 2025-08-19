'use client'
import React from 'react'

interface PrimaryButtonProps {
    onClick: () => void
    children: React.ReactNode
}

const SecondaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children }) => {
  return (
    <button
          onClick={onClick}
          className="inline-flex bg-[#1A2238] font-medium text-white hover:text-black hover:transition hover:bg-[#CAB22B] rounded-full px-6 py-4"
        >
          {children}
        </button>
  )
}

export default SecondaryButton
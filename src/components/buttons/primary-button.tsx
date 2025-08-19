'use client'
import React from 'react'

interface PrimaryButtonProps {
    onClick: () => void
    children: React.ReactNode
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children }) => {
  return (
    <button
          onClick={onClick}
          className="bg-[#6584DB] text-white text-[16px] font-medium hover:text-[#6584DB] hover:transition hover:bg-transparent border border-[#6584DB] rounded-full px-6 py-4 font-medium"
        >
          {children}
        </button>
  )
}

export default PrimaryButton
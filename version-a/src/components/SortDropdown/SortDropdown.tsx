'use client'

import { useState, useRef, useEffect } from 'react'
import { SORT_OPTIONS } from '@/data/constants'
import type { SortDropdownProps } from './SortDropdown.types'

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const selectedLabel =
    SORT_OPTIONS.find((o) => o.value === value)?.label ?? 'Todos'

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="flex items-center justify-between py-4">
      {/* Left: motivational text */}
      <h2 className="text-adipa-purple font-bold text-[18px] tablet:text-[20px] leading-tight">
        Cursos que te permitirán potenciar tu carrera.
      </h2>

      {/* Right: sort control */}
      <div className="relative flex-shrink-0 ml-4" ref={ref}>
        <span className="block text-[10px] font-semibold text-adipa-text-secondary uppercase tracking-[0.05em] text-right mb-1">
          Ordenar por
        </span>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0"
        >
          <span className="text-[14px] font-medium text-adipa-text-primary">
            {selectedLabel}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 text-adipa-text-primary ${open ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-1 bg-white rounded-[8px] shadow-dropdown border border-adipa-border py-2 min-w-[180px] z-20">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value)
                  setOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 text-[14px] transition-colors duration-150 hover:bg-adipa-light-bg ${
                  opt.value === value
                    ? 'text-adipa-purple font-medium'
                    : 'text-adipa-text-primary'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

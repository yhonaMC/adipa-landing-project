'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Modality } from '@/types'
import type { CourseCardProps } from './CourseCard.types'

const modalityDotColors: Record<Modality, string> = {
  [Modality.EnVivo]: 'bg-adipa-modality-live',
  [Modality.Online]: 'bg-adipa-modality-online',
  [Modality.Presencial]: 'bg-adipa-modality-presencial'
}

function formatPrice(price: number): string {
  return `$${price.toLocaleString('es-CL')} CLP`
}

function getDiscountPercent(original: number, discount: number): number {
  return Math.round(((original - discount) / original) * 100)
}

function padTwo(n: number): string {
  return String(n).padStart(2, '0')
}

export default function CourseCard({ course }: CourseCardProps) {
  const hasDiscount = course.discountPrice < course.originalPrice
  const discountPercent = hasDiscount
    ? getDiscountPercent(course.originalPrice, course.discountPrice)
    : 0

  const initialTotal =
    course.discountEndsIn.days * 86400 +
    course.discountEndsIn.hours * 3600 +
    course.discountEndsIn.minutes * 60 +
    course.discountEndsIn.seconds

  const [remaining, setRemaining] = useState(initialTotal)

  useEffect(() => {
    if (remaining <= 0) return
    const timer = setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [remaining <= 0])

  const days = Math.floor(remaining / 86400)
  const hours = Math.floor((remaining % 86400) / 3600)
  const minutes = Math.floor((remaining % 3600) / 60)
  const seconds = remaining % 60

  const dotClass = modalityDotColors[course.modality]

  return (
    <article className="bg-white rounded-[10px] border border-adipa-border shadow-card hover:shadow-card-hover hover:-translate-y-[10px] transition-all duration-500 max-w-[350px] mx-auto w-full flex flex-col h-full min-h-[330px]">
      {/* Top section: countdown + image in fixed-height container */}
      <div className="h-[208px] flex flex-col flex-shrink-0 rounded-t-[10px] overflow-hidden">
        {hasDiscount && (
          <div className="flex justify-center items-center px-1 py-[6px] flex-shrink-0 bg-adipa-deep-purple">
            <span className="text-white mr-5 text-xs leading-[16px]">
              Descuento termina en
            </span>
            <span className="text-white font-bold text-xs leading-[16px]">
              <span>{padTwo(days)}</span>
              <span className="text-[10px] leading-[14px] font-bold">D</span>
              <span className="mx-1">:</span>
              <span>{padTwo(hours)}</span>
              <span className="text-[10px] leading-[14px] font-bold">H</span>
              <span className="mx-1">:</span>
              <span>{padTwo(minutes)}</span>
              <span className="text-[10px] leading-[14px] font-bold">M</span>
              <span className="mx-1">:</span>
              <span>{padTwo(seconds)}</span>
              <span className="text-[10px] leading-[14px] font-bold">S</span>
            </span>
          </div>
        )}

        {/* Image area */}
        <div className="relative flex-1 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 350px"
          />

          {/* Rating badge */}
          <div className="absolute bottom-0 left-0 flex items-center z-[1] bg-black/60 p-[10px] rounded-tr-[5px]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 20 20"
              fill="#FFFFFF"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white font-bold ml-[5px] text-[16px]">
              {course.rating}
            </span>
          </div>

          {/* Modality badge */}
          <div className="absolute z-[1] flex items-center flex-row-reverse gap-[3px] bottom-5 right-0 bg-white rounded-l-[5px] px-[10px] py-[2px] shadow-[0_4px_4px_0_rgba(0,0,0,0.39)]">
            <div className="relative group flex items-center">
              <div className="flex items-center justify-center cursor-default w-[18px] h-[18px] rounded-full border border-adipa-purple p-[5px]">
                <span className="text-adipa-purple text-[9px]">i</span>
              </div>
              <div className="hidden group-hover:block absolute right-full bottom-0 mb-4 mr-2 bg-white p-[10px] rounded-[5px] border border-black/10 text-adipa-text-primary w-[200px] z-[3] shadow-card-hover text-xs leading-[16px]">
                {course.tooltipText}
              </div>
            </div>
            <span className="text-xs leading-[16px]">{course.modality}</span>
            <span
              className={`w-[7px] h-[7px] rounded-full inline-block flex-shrink-0 ${dotClass}${course.modality === 'En Vivo' ? ' animate-pulse-dot' : ''}`}
            />
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="relative flex flex-col justify-between flex-1 pt-[25px] px-5 pb-5 min-h-[260px]">
        <span className="absolute top-[5px] left-5 text-white uppercase font-bold bg-adipa-deep-purple px-[5px] rounded-[5px] text-[10px] leading-[18px]">
          {course.type}
        </span>

        <div>
          <h3 className="font-semibold text-adipa-text-primary text-[13px] leading-[17px] min-h-[36px] mb-1">
            {course.type}: {course.title}
          </h3>
          <p className="text-adipa-text-secondary text-xs leading-[16px] mb-[10px]">
            {course.instructor}
          </p>

          <div className="flex items-center flex-wrap justify-between mb-5">
            <div className="flex items-center gap-1">
              <svg
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#704EFD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="text-xs text-muted">
                Inicio : {course.startDate}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-[5px] h-[5px] rounded-full bg-adipa-text-primary inline-block flex-shrink-0" />
              <span className="text-xs text-muted">{course.status}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-5">
            {hasDiscount ? (
              <>
                <div className="flex items-center gap-[5px]">
                  <svg
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ff4500"
                    aria-hidden="true"
                  >
                    <path d="M12 2C12 2 7 8 7 13a5 5 0 0010 0c0-3-2-6-2-6s-1 3-3 3c0-2 0-8 0-8z" />
                  </svg>
                  <span className="font-bold text-adipa-text-primary text-[19px]">
                    {formatPrice(course.discountPrice)}
                  </span>
                  <span className="text-white font-bold bg-adipa-cyan rounded-[5px] px-[10px] py-[2px] text-[14px]">
                    -{discountPercent}%
                  </span>
                </div>
                <div className="mt-[5px]">
                  <span className="text-[16px] text-muted line-through">
                    {formatPrice(course.originalPrice)}
                  </span>
                </div>
              </>
            ) : (
              <div className="flex items-center">
                <span className="font-bold text-adipa-text-primary text-[19px]">
                  {formatPrice(course.originalPrice)}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between w-full">
            <button
              type="button"
              className="flex-1 bg-transparent text-adipa-purple text-[14px] font-medium font-poppins p-[10px] rounded-[5px] border border-adipa-purple cursor-pointer transition-colors duration-200 hover:bg-adipa-purple hover:text-white hover:border-adipa-purple"
            >
              Ver detalle +
            </button>
            <button
              type="button"
              className="flex-shrink-0 flex items-center justify-center min-w-[60px] min-h-[44px] w-[60px] bg-adipa-purple border border-adipa-purple rounded-[5px] ml-[10px] cursor-pointer transition-colors duration-200 hover:bg-adipa-cyan hover:border-adipa-cyan"
              aria-label="Agregar al carrito"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

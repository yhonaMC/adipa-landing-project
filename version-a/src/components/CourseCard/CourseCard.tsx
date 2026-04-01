import Image from "next/image";
import { Modality } from "@/types";
import type { CourseCardProps } from "./CourseCard.types";

const modalityDotColors: Record<Modality, string> = {
  [Modality.EnVivo]: "#26990b",
  [Modality.Online]: "#ffa927",
  [Modality.Presencial]: "#ff017c",
};

function formatPrice(price: number): string {
  return `$${price.toLocaleString("es-CL")} CLP`;
}

function getDiscountPercent(original: number, discount: number): number {
  return Math.round(((original - discount) / original) * 100);
}

function padTwo(n: number): string {
  return String(n).padStart(2, "0");
}

export default function CourseCard({ course }: CourseCardProps) {
  const hasDiscount = course.discountPrice < course.originalPrice;
  const discountPercent = hasDiscount
    ? getDiscountPercent(course.originalPrice, course.discountPrice)
    : 0;

  const { days, hours, minutes, seconds } = course.discountEndsIn;
  const dotColor = modalityDotColors[course.modality];

  return (
    <article
      className="bg-white rounded-[10px] border border-adipa-border shadow-card hover:shadow-card-hover hover:-translate-y-[10px] transition-all duration-500 max-w-[350px] mx-auto w-full flex flex-col"
      style={{ minHeight: "330px" }}
    >
      {/* ── Countdown timer bar (only when discount) ── */}
      {hasDiscount && (
        <div
          className="flex justify-center items-center px-1 py-[6px] rounded-t-[10px] flex-shrink-0"
          style={{ backgroundColor: "#1f0a73" }}
        >
          <span
            className="text-white mr-5"
            style={{ fontSize: "12px", lineHeight: "16px" }}
          >
            Descuento termina en
          </span>
          <span
            className="text-white font-bold"
            style={{ fontSize: "12px", lineHeight: "16px" }}
          >
            <span>{padTwo(days)}</span>
            <span style={{ fontSize: "10px", lineHeight: "14px", fontWeight: 700 }}>D</span>
            <span className="mx-1">:</span>
            <span>{padTwo(hours)}</span>
            <span style={{ fontSize: "10px", lineHeight: "14px", fontWeight: 700 }}>H</span>
            <span className="mx-1">:</span>
            <span>{padTwo(minutes)}</span>
            <span style={{ fontSize: "10px", lineHeight: "14px", fontWeight: 700 }}>M</span>
            <span className="mx-1">:</span>
            <span>{padTwo(seconds)}</span>
            <span style={{ fontSize: "10px", lineHeight: "14px", fontWeight: 700 }}>S</span>
          </span>
        </div>
      )}

      {/* ── Image area ── */}
      <div className={`relative aspect-video overflow-hidden flex-shrink-0 ${!hasDiscount ? "rounded-t-[10px]" : ""}`}>
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 350px"
        />

        {/* Rating badge — bottom-left */}
        <div
          className="absolute bottom-0 left-0 flex items-center z-[1]"
          style={{
            backgroundColor: "rgba(0,0,0,0.62)",
            padding: "10px 12px",
            borderRadius: "0 5px 0 0",
          }}
        >
          {/* Yellow star SVG — larger */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 20 20"
            fill="#FACC15"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span
            className="text-white font-bold ml-[5px]"
            style={{ fontSize: "16px", fontWeight: 700 }}
          >
            {course.rating}
          </span>
        </div>

        {/* Modality badge — bottom-right */}
        <div
          className="absolute z-[1] flex items-center"
          style={{
            bottom: "20px",
            right: 0,
            backgroundColor: "#fff",
            borderRadius: "5px 0 0 5px",
            padding: "2px 10px",
            boxShadow: "0 4px 4px 0 rgba(0,0,0,0.39)",
            flexDirection: "row-reverse",
            display: "flex",
            gap: "3px",
          }}
        >
          {/* Tooltip group */}
          <div className="relative group flex items-center">
            {/* (i) trigger */}
            <div
              className="flex items-center justify-center cursor-default"
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                border: "1px solid #704efd",
                padding: "5px",
              }}
            >
              <span style={{ color: "#704efd", fontSize: "9px" }}>i</span>
            </div>

            {/* Tooltip box — shown on group hover, positioned to the LEFT */}
            <div
              className="hidden group-hover:block absolute"
              style={{
                right: "100%",
                top: "50%",
                transform: "translateY(-50%)",
                marginRight: "8px",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                border: "0.5px solid rgba(0,0,0,0.1)",
                color: "#1d1d1d",
                width: "200px",
                zIndex: 3,
                boxShadow: "0 12px 22px rgba(0,60,91,0.05)",
                fontSize: "12px",
                lineHeight: "16px",
              }}
            >
              {course.tooltipText}
            </div>
          </div>

          {/* Modality label */}
          <span style={{ fontSize: "12px", lineHeight: "16px" }}>
            {course.modality}
          </span>

          {/* Colored dot */}
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: dotColor,
              display: "inline-block",
              flexShrink: 0,
            }}
          />
        </div>
      </div>

      {/* ── Card body ── */}
      <div
        className="relative flex flex-col justify-between flex-1"
        style={{
          padding: "25px 20px 20px",
          minHeight: "260px",
        }}
      >
        {/* Category tag — absolute at top of body */}
        <span
          className="absolute text-white uppercase font-bold"
          style={{
            top: "5px",
            left: "20px",
            backgroundColor: "#1f0a73",
            padding: "0 5px",
            borderRadius: "5px",
            fontSize: "10px",
            lineHeight: "18px",
            fontWeight: 700,
          }}
        >
          {course.type}
        </span>

        <div>
          {/* Title */}
          <h3
            className="font-semibold text-adipa-text-primary"
            style={{
              fontSize: "13px",
              lineHeight: "17px",
              minHeight: "52px",
              marginBottom: "10px",
            }}
          >
            {course.type}: {course.title}
          </h3>

          {/* Date + Status row */}
          <div
            className="flex items-center flex-wrap"
            style={{
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            {/* Left: calendar icon + date */}
            <div className="flex items-center gap-1">
              {/* Calendar SVG — purple stroke */}
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
              <span style={{ fontSize: "12px", color: "rgba(0,0,0,0.7)" }}>
                Inicio : {course.startDate}
              </span>
            </div>

            {/* Right: dot + status */}
            <div className="flex items-center gap-1">
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor: "#1d1d1d",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "12px", color: "rgba(0,0,0,0.7)" }}>
                {course.status}
              </span>
            </div>
          </div>
        </div>

        <div>
          {/* Price section */}
          <div style={{ marginBottom: "20px" }}>
            {hasDiscount ? (
              <>
                {/* Row 1: fire + current price + discount badge */}
                <div className="flex items-center gap-[5px]">
                  {/* Fire SVG — larger */}
                  <svg
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ff4500"
                    aria-hidden="true"
                  >
                    <path d="M12 2C12 2 7 8 7 13a5 5 0 0010 0c0-3-2-6-2-6s-1 3-3 3c0-2 0-8 0-8z" />
                  </svg>
                  <span
                    className="font-bold text-adipa-text-primary"
                    style={{ fontSize: "19px", fontWeight: 700 }}
                  >
                    {formatPrice(course.discountPrice)}
                  </span>
                  <span
                    className="text-white font-bold"
                    style={{
                      backgroundColor: "#2cb7ff",
                      borderRadius: "5px",
                      padding: "2px 10px",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    -{discountPercent}%
                  </span>
                </div>

                {/* Row 2: original price strikethrough */}
                <div style={{ marginTop: "5px" }}>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "rgba(0,0,0,0.7)",
                      textDecoration: "line-through",
                    }}
                  >
                    {formatPrice(course.originalPrice)}
                  </span>
                </div>
              </>
            ) : (
              /* No discount: just show the price */
              <div className="flex items-center">
                <span
                  className="font-bold text-adipa-text-primary"
                  style={{ fontSize: "19px", fontWeight: 700 }}
                >
                  {formatPrice(course.originalPrice)}
                </span>
              </div>
            )}
          </div>

          {/* Buttons row */}
          <div className="flex items-center justify-between w-full">
            {/* Ver detalle + button — OUTLINE style */}
            <button
              type="button"
              className="group/btn font-medium transition-colors duration-200"
              style={{
                fontSize: "14px",
                width: "100%",
                backgroundColor: "transparent",
                border: "1px solid #1d1d1d",
                borderRadius: "5px",
                fontWeight: 500,
                padding: "10px",
                fontFamily: "'Poppins', sans-serif",
                cursor: "pointer",
                color: "#1d1d1d",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#704efd";
                el.style.borderColor = "#704efd";
                el.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "transparent";
                el.style.borderColor = "#1d1d1d";
                el.style.color = "#1d1d1d";
              }}
            >
              Ver detalle +
            </button>

            {/* Cart button */}
            <button
              type="button"
              className="flex items-center justify-center transition-colors duration-200 flex-shrink-0"
              style={{
                minWidth: "44px",
                minHeight: "40px",
                width: "44px",
                backgroundColor: "#704efd",
                border: "1px solid #704efd",
                borderRadius: "5px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              aria-label="Agregar al carrito"
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#2cb7ff";
                el.style.borderColor = "#2cb7ff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#704efd";
                el.style.borderColor = "#704efd";
              }}
            >
              {/* Cart SVG */}
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
  );
}

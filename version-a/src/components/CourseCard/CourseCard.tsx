import Image from "next/image";
import { Modality } from "@/types";
import type { CourseCardProps } from "./CourseCard.types";

const modalityColors: Record<Modality, string> = {
  [Modality.EnVivo]: "bg-adipa-modality-live",
  [Modality.Online]: "bg-adipa-modality-online",
  [Modality.Presencial]: "bg-adipa-modality-presencial",
};

function formatPrice(price: number): string {
  return `$${price.toLocaleString("es-CL")} CLP`;
}

function getDiscountPercent(original: number, discount: number): number {
  return Math.round(((original - discount) / original) * 100);
}

export default function CourseCard({ course }: CourseCardProps) {
  const discountPercent = getDiscountPercent(
    course.originalPrice,
    course.discountPrice
  );

  return (
    <article className="bg-white rounded-card border border-adipa-border shadow-card hover:shadow-card-hover hover:-translate-y-2.5 transition-all duration-500 max-w-[350px] mx-auto w-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden rounded-t-card">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {/* Modality Badge */}
        <div className="absolute bottom-5 right-0 bg-white rounded-l-[5px] px-2.5 py-0.5 shadow-[0_4px_4px_0_rgba(0,0,0,.39)] flex items-center gap-1.5">
          <span
            className={`w-2 h-2 rounded-full ${modalityColors[course.modality]}`}
          />
          <span className="text-xs font-medium text-adipa-text-primary">
            {course.modality}
          </span>
        </div>
        {/* Rating Badge */}
        <div className="absolute bottom-5 left-0 bg-black/60 text-white rounded-r-[5px] px-2 py-0.5 flex items-center gap-1">
          <svg
            className="w-3 h-3 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs font-semibold">{course.rating}</span>
          <span className="text-xs opacity-70">({course.reviewCount})</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 pt-6 flex flex-col flex-1 justify-between min-h-[260px]">
        <div>
          <span className="inline-block bg-adipa-deep-purple text-white text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-[5px] mb-2">
            Curso
          </span>
          <h3 className="text-[13px] leading-[17px] font-semibold text-adipa-text-primary min-h-[52px] mb-2.5">
            {course.title}
          </h3>
          <p className="text-xs text-adipa-text-secondary mb-1">
            {course.instructor}
          </p>
          <p className="text-xs text-adipa-text-secondary mb-4">
            Inicio: {course.startDate}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[19px] leading-[22px] font-bold text-adipa-text-primary">
              {formatPrice(course.discountPrice)}
            </span>
            <span className="text-[16px] leading-[22px] text-black/70 line-through">
              {formatPrice(course.originalPrice)}
            </span>
            <span className="bg-adipa-cyan text-white text-sm font-bold px-2.5 py-0.5 rounded-[5px]">
              -{discountPercent}%
            </span>
          </div>

          <button
            type="button"
            className="w-full bg-adipa-purple text-white text-[17px] font-medium py-2.5 px-8 rounded-[5px] border border-adipa-purple hover:bg-adipa-purple-dark transition-colors duration-200"
          >
            Ver curso
          </button>
        </div>
      </div>
    </article>
  );
}

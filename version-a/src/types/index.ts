export enum Modality {
  EnVivo = "En Vivo",
  Online = "Online",
  Presencial = "Presencial",
}

export type CourseStatus = "En progreso" | "Proximo a iniciar";

export type CourseType = "Curso" | "Diplomado" | "Acreditacion";

export interface Course {
  id: string;
  title: string;
  type: CourseType;
  instructor: string;
  category: string;
  startDate: string;
  originalPrice: number;
  discountPrice: number;
  modality: Modality;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  status: CourseStatus;
  discountEndsIn: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  tooltipText: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface CourseData {
  categories: Category[];
  courses: Course[];
}

export type SortOption = "todos" | "mayor-precio" | "menor-precio" | "mas-proximo" | "menos-proximo";

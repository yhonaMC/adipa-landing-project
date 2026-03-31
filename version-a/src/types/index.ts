export enum Modality {
  EnVivo = "En Vivo",
  Online = "Online",
  Presencial = "Presencial",
}

export interface Course {
  id: string;
  title: string;
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
}

export interface Category {
  id: string;
  name: string;
}

export interface CourseData {
  categories: Category[];
  courses: Course[];
}

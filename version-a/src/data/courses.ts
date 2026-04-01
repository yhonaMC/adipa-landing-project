import type { Course, Category } from "@/types";
import { Modality } from "@/types";
import coursesJson from "./courses.json";

export const categories: Category[] = coursesJson.categories;

export const courses: Course[] = coursesJson.courses.map((course) => ({
  ...course,
  modality: course.modality as Modality,
}));

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const repositories = [
  {
    name: "design-system",
    isPublic: true,
    language: "React",
    languageColor: "#61dafb",
    size: 7320,
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    isPublic: false,
    language: "Javascript",
    languageColor: "#f7df1e",
    size: 5871,
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    isPublic: false,
    language: "Python",
    languageColor: "#3776ab",
    size: 4521,
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    isPublic: true,
    language: "Swift",
    languageColor: "#ffac45",
    size: 3096,
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    isPublic: false,
    language: "Java",
    languageColor: "#b07219",
    size: 6210,
    updatedAt: "6 days ago",
  },
  {
    name: "blog-website",
    isPublic: true,
    language: "HTML/CSS",
    languageColor: "#e34c26",
    size: 2847,
    updatedAt: "4 days ago",
  },
  {
    name: "social-network",
    isPublic: false,
    language: "PHP",
    languageColor: "#4F5D95",
    size: 5432,
    updatedAt: "7 days ago",
  },
];
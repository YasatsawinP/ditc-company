import type { Course } from "@/types/course"

const COURSES: Course[] = [
  {
    id: "course-1",
    title: "Advanced Leadership Workshop",
    subtitle: "Leadership strategies for senior managers and executives. Build influence and lead high-performing teams.",
    category: "Business",
    startDate: "Mar 2025",
    totalStudents: 45,
    thumbnailUrl: "/images/courses/course-placeholder.png",
    description: "Leadership strategies for senior managers and executives. Build influence, communicate vision, and lead high-performing teams across complex organizations.",
    trainerName: "อาจารย์ ดร.กนะ ดวงนามล",
    trainerCompany: "TurnPRO Industry",
    trainerPhotoUrl: "/images/trainers/trainer-placeholder.jpg",
  },
  {
    id: "course-2",
    title: "Full-Stack Web Development",
    subtitle: "Modern web development with React, Node.js, and cloud deployment. For engineers ready to level up.",
    category: "Tech",
    startDate: "Feb 2025",
    totalStudents: 102,
    thumbnailUrl: "/images/courses/course-placeholder.png",
    description: "Modern web development with React, Node.js, and cloud deployment. For engineers ready to level up their full-stack skills.",
    trainerName: "อาจารย์ ดร.กนะ ดวงนามล",
    trainerCompany: "DITC Company",
    trainerPhotoUrl: "/images/trainers/trainer-placeholder.jpg",
  },
  {
    id: "course-3",
    title: "UX/UI Design Masterclass",
    subtitle: "User experience fundamentals, Figma workflows, and design systems. For designers and product teams.",
    category: "Design",
    startDate: "Jan 2025",
    totalStudents: 68,
    thumbnailUrl: "/images/courses/course-placeholder.png",
    description: "User experience fundamentals, Figma workflows, and design systems. For designers and product teams building user-centered products.",
    trainerName: "อาจารย์ ดร.กนะ ดวงนามล",
    trainerCompany: "TurnPRO Industry",
    trainerPhotoUrl: "/images/trainers/trainer-placeholder.jpg",
  },
  {
    id: "course-4",
    title: "Data Analytics & BI",
    subtitle: "SQL, dashboards, and storytelling with data. Designed for analysts and managers.",
    category: "Tech",
    startDate: "Oct 2024",
    totalStudents: 90,
    thumbnailUrl: "/images/courses/course-placeholder.png",
    description: "SQL, dashboards, and storytelling with data. Designed for analysts and managers who need to let data drive decisions, not just produce charts.",
    trainerName: "อาจารย์ ดร.กนะ ดวงนามล",
    trainerCompany: "TurnPRO Industry",
    trainerPhotoUrl: "/images/trainers/trainer-placeholder.jpg",
  },
  {
    id: "course-5",
    title: "Project Management Essentials",
    subtitle: "Agile, Scrum, and delivery frameworks for project managers and team leads.",
    category: "Business",
    startDate: "Nov 2024",
    totalStudents: 55,
    thumbnailUrl: "/images/courses/course-placeholder.png",
    description: "Agile, Scrum, and delivery frameworks for project managers and team leads managing cross-functional projects.",
    trainerName: "อาจารย์ ดร.กนะ ดวงนามล",
    trainerCompany: "DITC Company",
    trainerPhotoUrl: "/images/trainers/trainer-placeholder.jpg",
  },
  {
    id: "course-6",
    title: "Brand Strategy & Identity",
    subtitle: "Brand positioning, visual identity, and storytelling for marketing teams.",
    category: "Design",
    startDate: "Oct 2024",
    totalStudents: 37,
    thumbnailUrl: "/images/courses/course-placeholder.png",
    description: "Brand positioning, visual identity, and storytelling for marketing teams building memorable brands.",
    trainerName: "อาจารย์ ดร.กนะ ดวงนามล",
    trainerCompany: "TurnPRO Industry",
    trainerPhotoUrl: "/images/trainers/trainer-placeholder.jpg",
  },
]

export async function getCourses(): Promise<Course[]> {
  return COURSES
}

export async function getCourseById(id: string): Promise<Course | undefined> {
  return COURSES.find((c) => c.id === id)
}

export interface CourseShowcaseItem {
  title: string
  description: string
  date: string
  students: string
}

const SHOWCASE_MOCK: CourseShowcaseItem[] = [
  {
    title: "Data Analytics & BI",
    description: "SQL, dashboards, and storytelling with data. Designed for analysts and manage..",
    date: "Dec 24",
    students: "55 Students",
  },
  {
    title: "Data Analytics & BI",
    description: "SQL, dashboards, and storytelling with data. Designed for analysts and manage..",
    date: "Dec 24",
    students: "55 Students",
  },
  {
    title: "Data Analytics & BI",
    description: "SQL, dashboards, and storytelling with data. Designed for analysts and manage..",
    date: "Dec 24",
    students: "55 Students",
  },
  {
    title: "Data Analytics & BI",
    description: "SQL, dashboards, and storytelling with data. Designed for analysts and manage..",
    date: "Dec 24",
    students: "55 Students",
  },
]

export function getCourseShowcaseMock(): CourseShowcaseItem[] {
  return SHOWCASE_MOCK
}

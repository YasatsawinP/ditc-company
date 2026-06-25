export interface Course {
  id: string
  title: string
  subtitle: string
  category: "Business" | "Tech" | "Design"
  startDate: string
  totalStudents: number
  thumbnailUrl: string
  description: string
  trainerName: string
  trainerCompany: string
  trainerPhotoUrl: string
  duration?: string
  level?: string
}

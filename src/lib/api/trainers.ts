import type { Trainer } from "@/types/trainer"

const TRAINERS: Trainer[] = [
  {
    id: "trainer-1",
    name: "อาจารย์ ดร.กนะ ดวงนามล",
    role: "CEO",
    title: "STRATEGY DIRECTOR",
    badge: "Sr. Trainer",
    company: "TurnPRO Industry",
    bio: "Specializes in leadership development and organizational transformation. Designed programs for Fortune 500 companies across Southeast Asia.",
    tags: ["Leadership", "Strategy", "Transformation"],
    recentCourses: [
      "Advanced Leadership Workshop",
      "C-Suite Training Lab",
      "Boardroom Communication",
      "Project Management Essentials",
    ],
    photoUrl: "/images/trainers/trainer-placeholder.jpg",
  },
  {
    id: "trainer-2",
    name: "อาจารย์ ดร.กนะ ดวงนามล",
    role: "CTO",
    title: "TECH DIRECTOR",
    badge: "Sr. Trainer",
    company: "DITC Company",
    bio: "Full-stack engineer and architect with 15 years building scalable systems. Passionate about teaching modern web development practices.",
    tags: ["Web Development", "Cloud", "Engineering"],
    recentCourses: [
      "Full-Stack Web Development",
      "Data Analytics & BI",
      "Storytelling with Data",
    ],
    photoUrl: "/images/trainers/trainer-placeholder.jpg",
  },
  {
    id: "trainer-3",
    name: "อาจารย์ ดร.กนะ ดวงนามล",
    role: "CISO",
    title: "SECURITY DIRECTOR",
    badge: "Sr. Trainer",
    company: "TurnPRO Industry",
    bio: "Cybersecurity expert and certified CISO with deep expertise in enterprise security frameworks and risk management.",
    tags: ["Security", "Risk Management", "Compliance"],
    recentCourses: [
      "Cybersecurity Fundamentals",
      "Risk & Compliance Workshop",
      "Advanced Leadership Workshop",
    ],
    photoUrl: "/images/trainers/trainer-placeholder.jpg",
  },
  {
    id: "trainer-4",
    name: "อาจารย์ ดร.กนะ ดวงนามล",
    role: "CTO",
    title: "DESIGN DIRECTOR",
    badge: "Sr. Trainer",
    company: "DITC Company",
    bio: "UX designer and design systems specialist. Helped teams at major Thai enterprises build user-centered products from the ground up.",
    tags: ["UX/UI", "Design Systems", "Figma"],
    recentCourses: [
      "UX/UI Design Masterclass",
      "Brand Strategy & Identity",
      "Storytelling with Data",
    ],
    photoUrl: "/images/trainers/trainer-placeholder.jpg",
  },
  {
    id: "trainer-5",
    name: "อาจารย์ ดร.กนะ ดวงนามล",
    role: "CMO",
    title: "MARKETING DIRECTOR",
    badge: "Sr. Trainer",
    company: "TurnPRO Industry",
    bio: "Marketing strategist with over a decade of experience driving digital campaigns and building brands.",
    tags: ["Marketing", "Branding", "Digital Strategy"],
    recentCourses: [
      "Brand Strategy & Identity",
      "Digital Marketing 101",
    ],
    photoUrl: "/images/trainers/trainer-placeholder.jpg",
  },
  {
    id: "trainer-6",
    name: "อาจารย์ ดร.กนะ ดวงนามล",
    role: "COO",
    title: "OPERATIONS DIRECTOR",
    badge: "Sr. Trainer",
    company: "DITC Company",
    bio: "Operations expert focusing on process optimization and agile methodologies for modern businesses.",
    tags: ["Operations", "Agile", "Process"],
    recentCourses: [
      "Project Management Essentials",
      "Agile Methodologies",
    ],
    photoUrl: "/images/trainers/trainer-placeholder.jpg",
  },
]

export async function getTrainers(): Promise<Trainer[]> {
  return TRAINERS
}

export async function getTrainerById(id: string): Promise<Trainer | undefined> {
  return TRAINERS.find((t) => t.id === id)
}

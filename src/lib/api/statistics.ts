import type { Statistic } from "@/types/statistic"

const STATISTICS: Statistic[] = [
  {
    id: "stat-1",
    value: "12,500",
    suffix: "+",
    label: "Total Students",
    description: "Trained across our programs",
  },
  {
    id: "stat-2",
    value: "340",
    suffix: "+",
    label: "Successful Courses",
    description: "Delivered with partners",
  },
  {
    id: "stat-3",
    value: "98",
    suffix: "%",
    label: "Satisfaction Rate",
    description: "From post-program surveys",
  },
  {
    id: "stat-4",
    value: "75",
    suffix: "+",
    label: "Expert Trainers",
    description: "Industry-vetted instructors",
  },
]

export async function getStatistics(): Promise<Statistic[]> {
  return STATISTICS
}

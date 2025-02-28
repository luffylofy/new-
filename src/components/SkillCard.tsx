"use client"

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  level: string
}

export default function SkillCard({ icon, title, level }: SkillCardProps) {
  return (
    <div className="flex items-center gap-3 bg-card p-4 rounded-lg">
      <div className="text-red-500">{icon}</div>
      <div>
        <h3 className="text-red-500 font-semibold">{title}</h3>
        <p className="text-muted-foreground">{level}</p>
      </div>
    </div>
  )
}

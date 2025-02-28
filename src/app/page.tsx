"use client"

import ThemeToggle from "@/components/ThemeToggle"
import SocialLinks from "@/components/SocialLinks"
import SkillCard from "@/components/SkillCard"
import { FileCode2, FileJson, File, FileType } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <ThemeToggle />
      
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center mt-16">
        <div className="relative w-32 h-32 mb-6">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop"
            alt="Profile"
            fill
            className="rounded-full object-cover"
          />
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Fabrício Gomes</h1>
        <p className="text-muted-foreground mb-4">Um simples aventureiro.</p>
        
        <SocialLinks />
        
        <div className="mt-16 w-full">
          <h2 className="text-2xl font-bold text-red-500 mb-6">
            Meus Conhecimentos
          </h2>
          
          <div className="grid gap-4">
            <SkillCard
              icon={<FileCode2 className="w-6 h-6" />}
              title="Python"
              level="Básico"
            />
            <SkillCard
              icon={<FileJson className="w-6 h-6" />}
              title="JavaScript"
              level="Intermediário"
            />
            <SkillCard
              icon={<File className="w-6 h-6" />}
              title="HTML"
              level="Intermediário"
            />
            <SkillCard
              icon={<FileType className="w-6 h-6" />}
              title="CSS"
              level="Básico"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

"use client"

import { Github, Instagram, MessageSquare } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-4">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <Github className="w-8 h-8" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <Instagram className="w-8 h-8" />
      </a>
      <a
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <MessageSquare className="w-8 h-8" />
      </a>
    </div>
  )
}

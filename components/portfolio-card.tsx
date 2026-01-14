"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export interface PortfolioProject {
  title: string
  client: string
  category: string
  description: string
  results: string[]
  tags: string[]
  color: string
  iconBg: string
}

interface PortfolioCardProps {
  project: PortfolioProject
  index: number
}

export function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <motion.div
      className={`rounded-2xl border border-border ${project.color} p-8 hover:shadow-md transition-all duration-300 group relative overflow-hidden`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-40px" }}
    >
      <div className="flex items-start justify-between mb-5">
        <div>
          <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 ${project.iconBg}`}>
            {project.category}
          </span>
          <h3 className="text-lg font-bold text-foreground leading-tight">{project.title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{project.client}</p>
        </div>
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ml-3 ${project.iconBg}`}>
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

      <div className="mb-5">
        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Results</p>
        <ul className="space-y-1.5">
          {project.results.map((result) => (
            <li key={result} className="flex items-center gap-2 text-sm text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {result}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-white/70 border border-border/60 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

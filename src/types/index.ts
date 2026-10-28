export interface Project {
  title: string
  description: string
  image?: string
  live: string
  github: string
  tech: string[]
  label?: string
  features?: string[]
  demoWarning?: boolean
  isUnderDevelopment?: boolean
  isPrivate?: boolean
  stats?: string
  statLabel?: string
  sponsor?: { name: string; icon?: string }
}

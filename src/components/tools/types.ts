import { IconType } from 'react-icons'

export interface Tool {
  id: string
  name: string
  description: string
  icon: IconType
  usageCount: number
  category: string
}

export interface ToolCategory {
  id: string
  name: string
  tools: Tool[]
}
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const BLOG_DIR = join(process.cwd(), 'content/blog')

export function getAllPosts(fields: string[] = []) {
  try {
    const categories = ['web-dev', 'devops', 'ai']
    const posts = []

    for (const category of categories) {
      const categoryDir = join(BLOG_DIR, category)
      
      try {
        const files = fs.readdirSync(categoryDir)
        
        files.forEach(filename => {
          const slug = filename.replace(/\.mdx$/, '')
          const fullPath = join(categoryDir, filename)
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const { data, content } = matter(fileContents)

          const items: { [key: string]: any } = {}

          // Ensure required fields have default values
          fields.forEach((field) => {
            if (field === 'slug') {
              items[field] = slug
            }
            if (field === 'content') {
              items[field] = content
            }
            if (field === 'tags' && !data[field]) {
              items[field] = ['Uncategorized']
            }
            if (field === 'date' && !data[field]) {
              items[field] = new Date().toISOString()
            }
            if (field === 'author' && !data[field]) {
              items[field] = {
                name: 'Anonymous',
                picture: '/blog/authors/default-avatar.jpg'
              }
            }
            if (data[field]) {
              items[field] = data[field]
            }
          })

          posts.push(items)
        })
      } catch (error) {
        console.warn(`Warning: Could not read directory ${categoryDir}`)
      }
    }

    return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  try {
    const categories = ['web-dev', 'devops', 'ai']
    
    for (const category of categories) {
      const fullPath = join(BLOG_DIR, category, `${slug}.mdx`)
      
      if (fs.existsSync(fullPath)) {
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        const items: { [key: string]: any } = {}

        fields.forEach((field) => {
          if (field === 'slug') {
            items[field] = slug
          }
          if (field === 'content') {
            items[field] = content
          }
          if (data[field]) {
            items[field] = data[field]
          }
        })

        return items
      }
    }
    
    throw new Error(`Post not found: ${slug}`)
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}
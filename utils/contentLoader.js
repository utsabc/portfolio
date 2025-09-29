import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export function getAllContent(type, limit = null) {
  const fullPath = path.join(contentDirectory, type)
  
  if (!fs.existsSync(fullPath)) {
    return []
  }

  const fileNames = fs.readdirSync(fullPath)
  const allContent = fileNames
    .filter(name => name.endsWith('.md'))
    .map(fileName => {
      const fullPath = path.join(contentDirectory, type, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        id: data.slug || fileName.replace('.md', ''),
        slug: data.slug || fileName.replace('.md', ''),
        content: content,
        ...data
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  return limit ? allContent.slice(0, limit) : allContent
}

export function getContentBySlug(type, slug) {
  const fullPath = path.join(contentDirectory, type, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    id: data.slug || slug,
    slug: data.slug || slug,
    content: content,
    ...data
  }
}

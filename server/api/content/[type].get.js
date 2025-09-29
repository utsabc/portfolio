import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default defineEventHandler(async (event) => {
  const type = getRouterParam(event, 'type')
  const contentDirectory = path.join(process.cwd(), 'content', type)
  
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  try {
    const fileNames = fs.readdirSync(contentDirectory)
    const allContent = fileNames
      .filter(name => name.endsWith('.md'))
      .map(fileName => {
        const fullPath = path.join(contentDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        
        return {
          id: data.slug || fileName.replace('.md', ''),
          slug: data.slug || fileName.replace('.md', ''),
          ...data
        }
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))

    return allContent
  } catch (error) {
    console.error('Error loading content:', error)
    return []
  }
})

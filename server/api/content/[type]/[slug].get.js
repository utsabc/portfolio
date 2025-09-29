import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default defineEventHandler(async (event) => {
  const type = getRouterParam(event, 'type')
  const slug = getRouterParam(event, 'slug')
  const contentDirectory = path.join(process.cwd(), 'content', type)
  const filePath = path.join(contentDirectory, `${slug}.md`)
  
  if (!fs.existsSync(filePath)) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Content not found'
    })
  }

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      id: data.slug || slug,
      slug: data.slug || slug,
      content: content,
      ...data
    }
  } catch (error) {
    console.error('Error loading content:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error loading content'
    })
  }
})
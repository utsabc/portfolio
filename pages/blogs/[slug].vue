<template>
  <div class="container" style="padding: 4rem 0;">
    <div class="blog-post">
      <div class="blog-header">
        <NuxtLink to="/blogs" class="back-link">← Back to Blogs</NuxtLink>
        <h1 class="blog-title">{{ post.title }}</h1>
        <div class="blog-meta">
          <span class="blog-date">{{ formatDate(post.date) }}</span>
          <div class="blog-tags">
            <span v-for="tag in post.tags" :key="tag" class="blog-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
      
      <div class="blog-content" v-html="renderedContent"></div>
      
      <div class="blog-footer">
        <div class="share-section">
          <p>Share this post:</p>
          <div class="share-links">
            <a :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`" target="_blank" class="share-link">Twitter</a>
            <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`" target="_blank" class="share-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { marked } from 'marked'

// Get the slug from route parameters
const route = useRoute()
const slug = route.params.slug

// Load the specific blog post
let post
let renderedContent

try {
  console.log('Loading blog post with slug:', slug)
  post = await $fetch(`/api/content/blog/${slug}`)
  
  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Blog post not found'
    })
  }

  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
    renderer: new marked.Renderer()
  })

  // Custom renderer for images to add responsive classes
  const renderer = new marked.Renderer()
  renderer.image = function(href, title, text) {
    const titleAttr = title ? ` title="${title}"` : ''
    const altAttr = text ? ` alt="${text}"` : ''
    return `<img src="${href}"${altAttr}${titleAttr} loading="lazy">`
  }
  
  marked.setOptions({
    breaks: true,
    gfm: true,
    renderer: renderer
  })

  // Convert markdown to HTML using marked
  renderedContent = marked(post.content || '')
  console.log('Blog post loaded successfully:', post.title)
} catch (error) {
  console.error('Error loading blog post:', error)
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  })
}

const currentUrl = `${useRequestURL().origin}/blogs/${slug}`

// Helper function to format dates
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  })
}

// SEO
useHead({
  title: `${post.title} - Your Name`,
  meta: [
    { name: 'description', content: post.excerpt || post.title },
    { property: 'og:title', content: post.title },
    { property: 'og:description', content: post.excerpt || post.title },
    { property: 'og:url', content: currentUrl }
  ]
})
</script>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
}

.back-link {
  color: #dc2626;
  text-decoration: none;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  display: inline-block;
}

.back-link:hover {
  text-decoration: underline;
}

.blog-header {
  margin-bottom: 3rem;
  text-align: center;
}

.blog-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  line-height: 1.2;
}

.blog-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.blog-date {
  color: #999;
  font-size: 1rem;
}

.blog-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.blog-tag {
  background: #f8f9fa;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  border: 1px solid #e9ecef;
}

.blog-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 3rem;
}

.blog-content :deep(h1) {
  font-size: 2rem;
  margin: 2rem 0 1rem 0;
  color: #333;
}

.blog-content :deep(h2) {
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem 0;
  color: #333;
}

.blog-content :deep(h3) {
  font-size: 1.3rem;
  margin: 1.3rem 0 0.8rem 0;
  color: #333;
}

.blog-content :deep(p) {
  margin-bottom: 1.5rem;
}

.blog-content :deep(strong) {
  font-weight: 700;
  color: #333;
}

.blog-content :deep(em) {
  font-style: italic;
}

.blog-content :deep(ul) {
  margin: 1rem 0;
  padding-left: 2rem;
}

.blog-content :deep(ol) {
  margin: 1rem 0;
  padding-left: 2rem;
}

.blog-content :deep(li) {
  margin-bottom: 0.5rem;
}

.blog-content :deep(blockquote) {
  border-left: 4px solid #dc2626;
  padding-left: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: #666;
}

.blog-content :deep(code) {
  background: #f8f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.blog-content :deep(pre) {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.blog-content :deep(pre code) {
  background: none;
  padding: 0;
}

.blog-content :deep(hr) {
  border: none;
  border-top: 1px solid #eee;
  margin: 2rem 0;
}

.blog-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.blog-content :deep(figure) {
  margin: 2rem 0;
  text-align: center;
}

.blog-content :deep(figcaption) {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
  font-style: italic;
}

.blog-content :deep(.image-container) {
  position: relative;
  margin: 2rem 0;
  text-align: center;
}

.blog-content :deep(.image-container img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.blog-content :deep(.image-caption) {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
  font-style: italic;
}

.blog-footer {
  border-top: 1px solid #eee;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.author-info {
  color: #666;
}

.share-section p {
  margin-bottom: 1rem;
  color: #666;
}

.share-links {
  display: flex;
  gap: 1rem;
}

.share-link {
  color: #dc2626;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #dc2626;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.share-link:hover {
  background: #dc2626;
  color: white;
}

@media (max-width: 768px) {
  .blog-title {
    font-size: 2rem;
  }
  
  .blog-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .blog-footer {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>

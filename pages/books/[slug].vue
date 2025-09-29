<template>
  <div class="container" style="padding: 4rem 0;">
    <div v-if="book" class="book-detail">
      <div class="book-header">
        <div class="book-meta">
          <span class="book-date">{{ formatDate(book.date) }}</span>
          <span v-if="book.status" class="book-status">{{ book.status }}</span>
        </div>
        <h1>{{ book.title }}</h1>
        <p class="book-author">by {{ book.author }}</p>
        
        <div class="book-actions">
          <a v-if="book.amazon_link" :href="book.amazon_link" target="_blank" class="amazon-link">
            View on Amazon
          </a>
          <NuxtLink to="/bookshelf" class="back-link">
            ← Back to Bookshelf
          </NuxtLink>
        </div>
      </div>
      
      <div class="book-content">
        <div v-html="renderedContent"></div>
      </div>
    </div>
    
    <div v-else class="not-found">
      <h1>Book Not Found</h1>
      <p>The book you're looking for doesn't exist.</p>
      <NuxtLink to="/bookshelf" class="back-link">← Back to Bookshelf</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { marked } from 'marked'

// Get the slug from the route
const route = useRoute()
const slug = route.params.slug

// Load the specific book
const book = await $fetch(`/api/content/books/${slug}`)

// Render markdown content
const renderedContent = computed(() => {
  if (book && book.content) {
    return marked(book.content)
  }
  return ''
})

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
  title: book ? `${book.title} - Utsab Chowdhury` : 'Book Not Found - Utsab Chowdhury',
  meta: [
    { name: 'description', content: book ? book.excerpt : 'Book not found.' }
  ]
})
</script>

<style scoped>
.book-detail {
  max-width: 800px;
  margin: 0 auto;
}

.book-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #d1d9e0;
}

.book-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.book-date {
  color: #656d76;
  font-size: 0.875rem;
}

.book-status {
  background: #0969da;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.book-header h1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #1f2328;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.book-author {
  color: #656d76;
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.book-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.amazon-link, .back-link {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  display: inline-block;
}

.amazon-link {
  background: #ff9900;
  color: white;
  border: 1px solid #ff9900;
}

.amazon-link:hover {
  background: #e68900;
  border-color: #e68900;
  color: white;
}

.back-link {
  background: #f6f8fa;
  color: #1f2328;
  border: 1px solid #d1d9e0;
}

.back-link:hover {
  background: #0969da;
  border-color: #0969da;
  color: white;
}

.book-content {
  line-height: 1.7;
  color: #1f2328;
}

.book-content :deep(h1) {
  font-size: 2rem;
  font-weight: 600;
  color: #1f2328;
  margin: 2rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #d1d9e0;
}

.book-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2328;
  margin: 1.5rem 0 1rem 0;
}

.book-content :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2328;
  margin: 1.25rem 0 0.75rem 0;
}

.book-content :deep(p) {
  margin-bottom: 1rem;
  color: #1f2328;
}

.book-content :deep(ul), .book-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.book-content :deep(li) {
  margin-bottom: 0.5rem;
  color: #1f2328;
}

.book-content :deep(blockquote) {
  border-left: 4px solid #0969da;
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: #656d76;
  font-style: italic;
}

.book-content :deep(strong) {
  font-weight: 600;
  color: #1f2328;
}

.book-content :deep(em) {
  font-style: italic;
  color: #656d76;
}

.not-found {
  text-align: center;
  padding: 4rem 0;
}

.not-found h1 {
  color: #1f2328;
  margin-bottom: 1rem;
}

.not-found p {
  color: #656d76;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .book-header h1 {
    font-size: 2rem;
  }
  
  .book-actions {
    flex-direction: column;
  }
  
  .amazon-link, .back-link {
    text-align: center;
  }
}
</style>

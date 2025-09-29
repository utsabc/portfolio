<template>
  <div class="container" style="padding: 4rem 0;">
    <div class="page-header">
      <h1>Bookshelf</h1>
      <p class="page-subtitle">Books that have shaped my understanding of technology, software engineering, and personal development.</p>
    </div>
    
    <div class="books-grid">
      <article v-for="book in books" :key="book.id" class="book-card">
        <div class="book-header">
          <h2>{{ book.title }}</h2>
          <p class="book-author">by {{ book.author }}</p>
          <div class="book-meta">
            <span class="book-date">{{ formatDate(book.date) }}</span>
            <span v-if="book.status" class="book-status">{{ book.status }}</span>
          </div>
        </div>
        
        <div class="book-content">
          <p class="book-excerpt">{{ book.excerpt }}</p>
          
          <div class="book-actions">
            <a v-if="book.amazon_link" :href="book.amazon_link" target="_blank" class="amazon-link">
              View on Amazon
            </a>
            <NuxtLink :to="`/books/${book.slug}`" class="read-more">
              Read Notes
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
// Load books content
const books = await $fetch('/api/content/books')

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
  title: 'Bookshelf - Utsab Chowdhury',
  meta: [
    { name: 'description', content: 'Recommended books on software engineering, system design, and personal development.' }
  ]
})
</script>

<style scoped>
.page-header {
  margin-bottom: 3rem;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1f2328;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #656d76;
  max-width: 600px;
  margin: 0 auto;
}

.books-grid {
  display: grid;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.book-card {
  background: #f6f8fa;
  border: 1px solid #d1d9e0;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.book-card:hover {
  background: #ffffff;
  border-color: #0969da;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.book-header {
  margin-bottom: 1.5rem;
}

.book-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2328;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.book-author {
  color: #656d76;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.book-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
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

.book-content {
  margin-bottom: 1.5rem;
}

.book-excerpt {
  color: #656d76;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.book-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.amazon-link, .read-more {
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

.read-more {
  background: #0969da;
  color: white;
  border: 1px solid #0969da;
}

.read-more:hover {
  background: #0550ae;
  border-color: #0550ae;
  color: white;
}

@media (max-width: 768px) {
  .book-actions {
    flex-direction: column;
  }
  
  .amazon-link, .read-more {
    text-align: center;
  }
}
</style>

<template>
  <div class="container" style="padding: 4rem 0;">
    <div class="page-header">
      <h1>Blog Posts</h1>
      <p class="page-subtitle">Thoughts and insights on technology, career, and system design.</p>
    </div>
    
    <div class="blog-grid">
      <article v-for="post in blogPosts" :key="post.id" class="blog-card">
        <div class="blog-card-content">
          <h2 class="blog-title">
            <NuxtLink :to="`/blogs/${post.slug}`">{{ post.title }}</NuxtLink>
          </h2>
          <div class="blog-meta">
            <span class="blog-date">{{ formatDate(post.date) }}</span>
            <div class="blog-tags">
              <span v-for="tag in post.tags" :key="tag" class="blog-tag">{{ tag }}</span>
            </div>
          </div>
          <p class="blog-excerpt">{{ post.excerpt }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
// Load blog posts from markdown files
const blogPosts = await $fetch('/api/content/blog')

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
  title: 'Blog Posts - Your Name',
  meta: [
    { name: 'description', content: 'Collection of blog posts on technology, career development, and system design.' }
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
  color: #333;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.blog-grid {
  display: grid;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.blog-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 2rem;
  background: #fff;
  transition: box-shadow 0.3s ease;
}

.blog-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.blog-title {
  margin-bottom: 1rem;
}

.blog-title a {
  color: #333;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
}

.blog-title a:hover {
  color: #dc2626;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.blog-date {
  color: #999;
  font-size: 0.9rem;
}

.blog-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.blog-tag {
  background: #f8f9fa;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  border: 1px solid #e9ecef;
}

.blog-excerpt {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .blog-meta {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .blog-card {
    padding: 1.5rem;
  }
}
</style>

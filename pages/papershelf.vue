<template>
  <div class="container" style="padding: 4rem 0;">
    <div class="page-header">
      <h1>Papershelf</h1>
      <p class="page-subtitle">Research papers and technical articles that have influenced my thinking.</p>
    </div>
    
    <div class="papers-grid">
      <article v-for="paper in papers" :key="paper.id" class="paper-card">
        <div class="paper-card-content">
          <h2 class="paper-title">
            <a :href="paper.url" target="_blank" rel="noopener noreferrer">{{ paper.title }}</a>
          </h2>
          <div class="paper-meta">
            <span class="paper-authors">{{ paper.authors }}</span>
            <span class="paper-year">{{ paper.year }}</span>
          </div>
          <div class="paper-category">{{ paper.category }}</div>
          <div class="paper-tags">
            <span v-for="tag in paper.tags" :key="tag" class="paper-tag">{{ tag }}</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
// Load papers from markdown files
const papers = await $fetch('/api/content/papers')

// SEO
useHead({
  title: 'Papershelf - Your Name',
  meta: [
    { name: 'description', content: 'Collection of research papers and technical articles on distributed systems, databases, and software engineering.' }
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

.papers-grid {
  display: grid;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.paper-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 2rem;
  background: #fff;
  transition: box-shadow 0.3s ease;
}

.paper-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.paper-title {
  margin-bottom: 1rem;
}

.paper-title a {
  color: #333;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
}

.paper-title a:hover {
  color: #dc2626;
}

.paper-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.paper-authors {
  color: #666;
  font-size: 1rem;
  font-style: italic;
}

.paper-year {
  color: #999;
  font-size: 0.9rem;
  background: #f8f9fa;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
}

.paper-category {
  color: #dc2626;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.paper-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.paper-tag {
  background: #f8f9fa;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  border: 1px solid #e9ecef;
}

@media (max-width: 768px) {
  .paper-meta {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .paper-card {
    padding: 1.5rem;
  }
}
</style>

<template>
  <div>
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          <NuxtLink to="/" class="logo">Utsab Chowdhury</NuxtLink>
          <nav class="nav">
            <NuxtLink to="/blogs" class="nav-link">Blogs</NuxtLink>
            <NuxtLink to="/papershelf" class="nav-link">Papershelf</NuxtLink>
            <NuxtLink to="/bookshelf" class="nav-link">Bookshelf</NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-column">
            <h4>Writings and Learnings</h4>
            <div class="footer-links">
              <NuxtLink to="/blogs" class="footer-link">Blogs</NuxtLink>
              <NuxtLink to="/papershelf" class="footer-link">Papershelf</NuxtLink>
              <NuxtLink to="/bookshelf" class="footer-link">Bookshelf</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Global head configuration
useHead({
  title: 'Utsab Chowdhury - Software Engineer',
  meta: [
    { name: 'description', content: 'Software Development Engineer II at RudderStack. Expert in Go, Node.js, TypeScript, Kafka, Snowflake, and cloud-native deployments.' }
  ]
})
</script>

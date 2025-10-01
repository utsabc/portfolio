<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Hey, I am Utsab Chowdhury</h1>
            <p class="hero-tagline">Software Engineer, Data Platform Architect, and Backend Systems Expert</p>
            <div class="hero-bio">
              <p>
                I am a Software Development Engineer II at RudderStack with 4+ years of experience delivering high-scale backend services, 
                streaming data pipelines, and secure SaaS integrations for enterprise customers.
              </p>
              <p>
                At RudderStack, I architected warehouse-native Customer Data Platform (CDP) components including OAuth frameworks, 
                event streaming layers, account management platforms, and reverse ETL pipelines serving 50M+ daily events.
              </p>
              <p>
                Expert in Go, Node.js, TypeScript, Kafka, Snowflake, Kubernetes, and cloud-native deployments (AWS, GCP). 
                I specialize in system design, scalability, data governance (GDPR, SOC2), and cross-functional collaboration.
              </p>
            </div>
            <div class="social-links">
              <a href="mailto:utsab.c97@gmail.com" class="social-link">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email
              </a>
              <a href="https://linkedin.com/in/utsabchowdhury47" class="social-link">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/utsabc" class="social-link">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div class="hero-image-container">
            <img 
              src="/data/1694191834653.jpeg" 
              alt="Utsab Chowdhury" 
              class="hero-image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Work Experience Section -->
    <section class="content-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Work Experience</h2>
        </div>
        <div class="experience-grid">
          <div class="experience-item">
            <div class="experience-header">
              <h3>Software Development Engineer II</h3>
              <span class="experience-company">RudderStack</span>
              <span class="experience-duration">Dec 2020 - Present</span>
            </div>
            <div class="experience-content">
              <p>Architected warehouse-native Customer Data Platform (CDP) components including OAuth frameworks, event streaming layers, account management platforms, and reverse ETL pipelines serving 50M+ daily events.</p>
              <ul class="experience-highlights">
                <li>Architected a plugin-based no-code integration framework, enabling 20+ new SaaS connectors to be onboarded with minimal engineering effort → cut integration development time by ~35%</li>
                <li>Optimized RudderStack's streaming pipeline for 50M+ daily events, reducing event processing latency by 20% and improving throughput for enterprise customers</li>
                <li>Designed an enterprise-grade account management framework supporting multi-tenant deployments, role-based access control (RBAC), and better customer data isolation</li>
                <li>Led the reverse ETL architecture refactor, improving data freshness for Snowflake & BigQuery pipelines while reducing warehouse query costs</li>
                <li>Built advanced monitoring dashboards (Prometheus + Grafana) to track event processing times, error rates, and queue backlogs, reducing MTTR (Mean Time To Recovery) by 50%</li>
                <li>Defined technical standards & best practices for connector development, TypeScript migration, and streaming workload optimizations</li>
                <li>Built Rudderstack Shopify App providing seamless connector for shopify ecosystem data to multiple platform ranging from Analytics, CRM, Attribution with baked-in solution for Identity resolution</li>
                <li>Partnered with Product Managers & Solutions Engineers to design customer-facing integration solutions, aligning technical delivery with business priorities</li>
              </ul>
            </div>
          </div>
          <div class="experience-item">
            <div class="experience-header">
              <h3>Software Development Engineer I</h3>
              <span class="experience-company">RudderStack</span>
              <span class="experience-duration">Dec 2020 - Dec 2021</span>
            </div>
            <div class="experience-content">
              <p>Developed and maintained key SaaS integrations for the RudderStack Connector Platform, working with REST/GraphQL APIs and building scalable data pipelines.</p>
              <ul class="experience-highlights">
                <li>Developed and maintained key SaaS integrations for the RudderStack Connector Platform, working with REST/GraphQL APIs</li>
                <li>Built scalable data pipelines and integration connectors for enterprise customers</li>
                <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                <li>Contributed to the development of core platform features and infrastructure improvements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Technical Skills</h2>
          <p class="section-subtitle">Technologies I work with</p>
        </div>
        <div class="skills-carousel">
          <div class="skills-track">
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" alt="javascript logo" />
              </div>
              <span class="skill-name">JavaScript</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="30" alt="typescript logo" />
              </div>
              <span class="skill-name">TypeScript</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="30" alt="react logo" />
              </div>
              <span class="skill-name">React</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="30" alt="python logo" />
              </div>
              <span class="skill-name">Python</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" height="30" alt="go logo" />
              </div>
              <span class="skill-name">Go</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="30" alt="docker logo" />
              </div>
              <span class="skill-name">Docker</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="30" alt="nextjs logo" />
              </div>
              <span class="skill-name">Next.js</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" height="30" alt="kubernetes logo" />
              </div>
              <span class="skill-name">Kubernetes</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-line-wordmark.svg" height="30" alt="amazonwebservices logo" />
              </div>
              <span class="skill-name">AWS</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="30" alt="nodejs logo" />
              </div>
              <span class="skill-name">Node.js</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" height="30" alt="graphql logo" />
              </div>
              <span class="skill-name">GraphQL</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="30" alt="java logo" />
              </div>
              <span class="skill-name">Java</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" height="30" alt="kafka logo" />
              </div>
              <span class="skill-name">Kafka</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/snowflake/snowflake-original.svg" height="30" alt="snowflake logo" />
              </div>
              <span class="skill-name">Snowflake</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" height="30" alt="gcp logo" />
              </div>
              <span class="skill-name">GCP</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="30" alt="mongodb logo" />
              </div>
              <span class="skill-name">MongoDB</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="30" alt="postgresql logo" />
              </div>
              <span class="skill-name">PostgreSQL</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" height="30" alt="terraform logo" />
              </div>
              <span class="skill-name">Terraform</span>
            </div>
            <!-- Duplicate for seamless loop -->
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" alt="javascript logo" />
              </div>
              <span class="skill-name">JavaScript</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="30" alt="typescript logo" />
              </div>
              <span class="skill-name">TypeScript</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="30" alt="react logo" />
              </div>
              <span class="skill-name">React</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="30" alt="python logo" />
              </div>
              <span class="skill-name">Python</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" height="30" alt="go logo" />
              </div>
              <span class="skill-name">Go</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" height="30" alt="docker logo" />
              </div>
              <span class="skill-name">Docker</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="30" alt="nextjs logo" />
              </div>
              <span class="skill-name">Next.js</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" height="30" alt="kubernetes logo" />
              </div>
              <span class="skill-name">Kubernetes</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-line-wordmark.svg" height="30" alt="amazonwebservices logo" />
              </div>
              <span class="skill-name">AWS</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="30" alt="nodejs logo" />
              </div>
              <span class="skill-name">Node.js</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" height="30" alt="graphql logo" />
              </div>
              <span class="skill-name">GraphQL</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="30" alt="java logo" />
              </div>
              <span class="skill-name">Java</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" height="30" alt="kafka logo" />
              </div>
              <span class="skill-name">Kafka</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/snowflake/snowflake-original.svg" height="30" alt="snowflake logo" />
              </div>
              <span class="skill-name">Snowflake</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" height="30" alt="gcp logo" />
              </div>
              <span class="skill-name">GCP</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="30" alt="mongodb logo" />
              </div>
              <span class="skill-name">MongoDB</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="30" alt="postgresql logo" />
              </div>
              <span class="skill-name">PostgreSQL</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" height="30" alt="spark logo" />
              </div>
              <span class="skill-name">Spark</span>
            </div>
            <div class="skill-item">
              <div class="skill-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" height="30" alt="terraform logo" />
              </div>
              <span class="skill-name">Terraform</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <!-- Recent Blog Posts -->
          <div class="content-column">
            <div class="section-header">
              <h2 class="section-title">Recent blog posts</h2>
              <NuxtLink to="/blogs" class="section-link">Full archive →</NuxtLink>
            </div>
            <p class="section-subtitle">Things I have written recently</p>
            <ul class="post-list">
              <li v-for="post in recentBlogPosts" :key="post.id" class="post-item">
                <NuxtLink :to="`/blogs/${post.slug}`" class="post-title">
                  {{ post.title }}
                </NuxtLink>
                <div class="post-date">{{ formatDate(post.date) }}</div>
              </li>
            </ul>
          </div>

          <!-- Recent Books -->
          <div class="content-column">
            <div class="section-header">
              <h2 class="section-title">Recent books</h2>
              <NuxtLink to="/bookshelf" class="section-link">Bookshelf →</NuxtLink>
            </div>
            <p class="section-subtitle">Books I'm currently reading</p>
            <ul class="post-list">
              <li v-for="book in recentBooks" :key="book.id" class="post-item">
                <NuxtLink :to="`/books/${book.slug}`" class="post-title">
                  {{ book.title }}
                </NuxtLink>
                <div class="post-date">{{ book.author }}</div>
              </li>
            </ul>
          </div>

          <!-- Recent Papers -->
          <div class="content-column">
            <div class="section-header">
              <h2 class="section-title">Recent papers</h2>
              <NuxtLink to="/papershelf" class="section-link">Papershelf →</NuxtLink>
            </div>
            <p class="section-subtitle">Papers I have read recently</p>
            <ul class="post-list">
              <li v-for="paper in recentPapers" :key="paper.id" class="post-item">
                <a :href="paper.url" target="_blank" class="post-title">
                  {{ paper.title }}
                </a>
                <div class="post-date">{{ paper.authors }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Load content from markdown files
const [blogPosts, books, papers] = await Promise.all([
  $fetch('/api/content/blog'),
  $fetch('/api/content/books'),
  $fetch('/api/content/papers')
])

// Get recent blog posts (limit to 5)
const recentBlogPosts = blogPosts.slice(0, 5)

// Get recent books (limit to 5)
const recentBooks = books.slice(0, 5)

// Get recent papers (limit to 5)
const recentPapers = papers.slice(0, 5)

// Helper function to format dates
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })
}

// SEO
useHead({
  title: 'Utsab Chowdhury - Software Engineer',
  meta: [
    { name: 'description', content: 'Software Development Engineer II at RudderStack. Expert in Go, Node.js, TypeScript, Kafka, Snowflake, and cloud-native deployments. Specializing in scalable backend services and data platform architecture.' }
  ]
})
</script>

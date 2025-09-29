# Portfolio Website

A professional portfolio website built with Nitro (Nuxt 3) featuring a clean, minimalist design with Times New Roman typography.

## Features

- **Professional Design**: Clean, minimalist layout inspired by modern portfolio websites
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Nitro for optimal loading speeds
- **SEO Optimized**: Proper meta tags and structured data
- **Content Management**: Easy-to-update JSON data files for blog posts and papers
- **Typography**: Professional Times New Roman font throughout

## Tech Stack

- **Framework**: Nuxt 3 with Nitro
- **Styling**: Custom CSS with Times New Roman font
- **Content**: JSON-based content management
- **Deployment**: Static site generation (SSG)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
portfolio-website/
├── assets/
│   └── css/
│       └── main.css          # Global styles with Times New Roman
├── data/
│   ├── blog-posts.json       # Blog post data
│   └── papers.json           # Research papers data
├── pages/
│   ├── index.vue             # Homepage
│   ├── blogs.vue             # Blog listing page
│   ├── papershelf.vue        # Papers listing page
│   ├── bookshelf.vue         # Books page
│   ├── courses.vue           # Courses page
│   └── talks.vue             # Talks page
├── app.vue                   # Main app layout
├── nuxt.config.ts           # Nuxt configuration
└── package.json             # Dependencies and scripts
```

## Customization

### Personal Information

Update the following files with your personal information:

1. **Homepage** (`pages/index.vue`):
   - Change "Your Name" to your actual name
   - Update the bio text
   - Replace social media links with your profiles
   - Add your profile photo

2. **Header** (`app.vue`):
   - Update the logo text with your name

3. **SEO** (in each page):
   - Update page titles and meta descriptions

### Content Management

#### Blog Posts
Edit `data/blog-posts.json` to add/update your blog posts:

```json
{
  "id": 1,
  "title": "Your Blog Post Title",
  "slug": "your-blog-post-slug",
  "date": "2024-01-01",
  "excerpt": "Brief description of your post",
  "content": "Full content here...",
  "tags": ["tag1", "tag2"]
}
```

#### Research Papers
Edit `data/papers.json` to add/update papers:

```json
{
  "id": 1,
  "title": "Paper Title",
  "authors": "Author Names",
  "url": "https://paper-url.com",
  "year": "2024",
  "category": "Category",
  "tags": ["tag1", "tag2"]
}
```

### Styling

The main styles are in `assets/css/main.css`. Key customization points:

- **Colors**: Update the color scheme by changing CSS custom properties
- **Typography**: Modify font sizes and spacing
- **Layout**: Adjust grid layouts and spacing
- **Components**: Customize card styles, buttons, and interactive elements

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `.output/public` folder to Netlify

### Static Hosting

1. Build the project: `npm run build`
2. Upload the `.output/public` folder to any static hosting service

## Performance

This portfolio is optimized for performance with:

- Static site generation (SSG)
- Optimized images and assets
- Minimal JavaScript bundle
- CSS optimization
- Proper caching headers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request to help others.# portfolio

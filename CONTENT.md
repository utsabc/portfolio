# Content Management Guide

This portfolio website uses a markdown-based content management system. All content is stored in the `content/` directory and automatically loaded via API endpoints.

## Directory Structure

```
content/
├── blog/           # Blog posts
├── papers/         # Research papers
├── books/          # Book recommendations
├── courses/        # Course content
└── talks/          # Conference talks
```

## Adding New Content

### Blog Posts

1. Create a new markdown file in `content/blog/` with the slug as filename:
   ```
   content/blog/my-new-post.md
   ```

2. Add frontmatter at the top of the file:
   ```yaml
   ---
   title: "My New Post"
   slug: "my-new-post"
   date: "2024-09-28"
   excerpt: "A brief description of the post"
   tags: ["tag1", "tag2"]
   author: "Your Name"
   ---
   
   # My New Post
   
   Your blog post content goes here...
   ```

### Research Papers

1. Create a new markdown file in `content/papers/`:
   ```
   content/papers/paper-title.md
   ```

2. Add frontmatter:
   ```yaml
   ---
   title: "Paper Title"
   authors: "Author Names"
   url: "https://paper-url.com"
   year: "2024"
   category: "Category"
   tags: ["tag1", "tag2"]
   ---
   ```

## Frontmatter Fields

### Blog Posts
- `title` (required): The title of the blog post
- `slug` (optional): URL slug (defaults to filename without .md)
- `date` (required): Publication date in YYYY-MM-DD format
- `excerpt` (optional): Brief description for previews
- `tags` (optional): Array of tags
- `author` (optional): Author name

### Papers
- `title` (required): Paper title
- `authors` (required): Author names
- `url` (optional): Link to the paper
- `year` (required): Publication year
- `category` (optional): Paper category
- `tags` (optional): Array of tags

## API Endpoints

The content is automatically served via these API endpoints:

- `GET /api/content/blog` - List all blog posts
- `GET /api/content/blog/[slug]` - Get specific blog post
- `GET /api/content/papers` - List all papers
- `GET /api/content/papers/[slug]` - Get specific paper

## Content Display

### Homepage
- Shows the 10 most recent blog posts
- Shows the 7 most recent papers
- Content is automatically sorted by date (newest first)

### Individual Pages
- `/blogs` - Lists all blog posts
- `/blogs/[slug]` - Individual blog post page
- `/papershelf` - Lists all papers

## Markdown Support

The content supports standard markdown formatting:

- Headers (`#`, `##`, `###`)
- **Bold text**
- *Italic text*
- Links
- Lists
- Code blocks

## Adding New Content Types

To add a new content type (e.g., books, courses):

1. Create the directory: `content/books/`
2. Add markdown files with appropriate frontmatter
3. Create a new page in `pages/books.vue`
4. Use the API endpoint `/api/content/books`

## Best Practices

1. **File naming**: Use kebab-case for filenames (e.g., `my-awesome-post.md`)
2. **Dates**: Always use YYYY-MM-DD format for dates
3. **Slugs**: Keep slugs URL-friendly (lowercase, hyphens for spaces)
4. **Tags**: Use consistent, lowercase tags
5. **Content**: Write clear, engaging content with proper markdown formatting

## Troubleshooting

- **Content not showing**: Check that the markdown file has proper frontmatter
- **API errors**: Ensure the file is in the correct directory and has a `.md` extension
- **Date sorting**: Make sure dates are in YYYY-MM-DD format
- **Special characters**: Avoid special characters in filenames and slugs

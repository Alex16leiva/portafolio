# Deployment Instructions for GitHub Pages

This portfolio is configured to deploy automatically to GitHub Pages.

## Automatic Deployment

1. Push your code to the `main` branch:
   \`\`\`bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   \`\`\`

2. GitHub Actions will automatically build and deploy your site

3. Your site will be available at: `https://alex16leiva.github.io/portafolio/`

## One-Time Setup (if not already done)

1. Go to your repository: https://github.com/Alex16leiva/portafolio
2. Go to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. That's it! The workflow will handle everything

## Manual Build (Optional)

If you want to build locally:

\`\`\`bash
npm install
npm run build
\`\`\`

The static files will be generated in the `out` folder.

## Important Notes

- The site uses `basePath: '/portafolio'` because it's deployed to a repository subdirectory
- All links and images are configured to work with this basePath
- The workflow runs on every push to the main branch

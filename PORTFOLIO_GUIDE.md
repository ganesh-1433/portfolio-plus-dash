# Portfolio Management Guide

This comprehensive guide will help you understand and modify your portfolio website in the future.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [How to Make Changes](#how-to-make-changes)
5. [Common Modifications](#common-modifications)
6. [Deployment](#deployment)
7. [Backend & Email Setup](#backend--email-setup)
8. [Troubleshooting](#troubleshooting)

---

## Project Overview

Your portfolio is a modern, responsive single-page application built with React. It showcases your skills, projects, dashboards, and provides a contact form.

### Key Features:
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme support
- ✅ Interactive navigation
- ✅ Project showcase with detailed pages
- ✅ Skills display with icons
- ✅ Dashboard previews
- ✅ Contact form with email integration
- ✅ SEO optimized

---

## Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router
- **Backend**: Lovable Cloud (Supabase)
- **Email Service**: Resend
- **Language**: TypeScript

---

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Dashboards.tsx  # Dashboard showcase
│   │   ├── Footer.tsx      # Footer component
│   │   ├── Hero.tsx        # Hero/Landing section
│   │   ├── Navigation.tsx  # Navigation bar
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Skills.tsx      # Skills display
│   │   └── ui/             # shadcn UI components
│   │
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Home page
│   │   ├── AboutPage.tsx   # About page
│   │   ├── SkillsPage.tsx  # Skills page
│   │   ├── ProjectsPage.tsx
│   │   ├── DashboardsPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ProjectDetail.tsx
│   │   └── NotFound.tsx
│   │
│   ├── assets/             # Images and static files
│   │   ├── skills/         # Skill icons
│   │   ├── hero-bg.jpg
│   │   ├── ganesh.jpg
│   │   └── ...
│   │
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles & design system
│
├── supabase/
│   └── functions/          # Backend functions
│       └── send-contact-email/  # Email sending function
│
├── public/                 # Public assets
└── README.md              # Project documentation
```

---

## How to Make Changes

### Option 1: Using Lovable (Recommended for non-coders)
1. Go to [lovable.dev](https://lovable.dev)
2. Open your project
3. Use the AI chat to make changes by describing what you want
4. Changes appear in real-time in the preview

**Visual Edits Feature**: Click the "Edit" button to select elements and change text, colors, fonts directly!

### Option 2: Local Development
1. **Clone the repository**:
   ```bash
   git clone [your-repo-url]
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open http://localhost:8080 in your browser

4. **Make your changes** in the code files

5. **Build for production**:
   ```bash
   npm run build
   ```

### Option 3: GitHub
1. Go to your GitHub repository
2. Navigate to the file you want to edit
3. Click the pencil icon to edit
4. Make changes and commit

---

## Common Modifications

### 1. Update Your Profile Photo
**File**: `src/assets/ganesh.jpg`
- Replace with your new photo (same filename or update the import in Hero.tsx)
- Recommended size: 800x800px

**File to update**: `src/components/Hero.tsx`
```tsx
import ganeshImage from "@/assets/ganesh.jpg";
```

### 2. Change Your Name & Title
**File**: `src/components/Hero.tsx`
```tsx
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  Ganesh Pawar  {/* Change this */}
</h1>
<p className="text-xl md:text-2xl text-muted-foreground mb-8">
  Data Analyst | Transforming Data into Insights  {/* Change this */}
</p>
```

### 3. Update About Section
**File**: `src/components/About.tsx`
- Edit the paragraph text in the component
- Update statistics if needed

### 4. Add/Remove Skills

**File**: `src/components/Skills.tsx`

To add a new skill:
1. Add the icon to `src/assets/skills/`
2. Import it at the top:
   ```tsx
   import newSkillIcon from "@/assets/skills/newskill.svg";
   ```
3. Add to the appropriate category:
   ```tsx
   {
     name: "New Skill",
     icon: newSkillIcon,
     category: "Tools / Platforms"
   }
   ```

### 5. Add New Projects

**File**: `src/components/Projects.tsx`

```tsx
{
  id: 4,  // Increment the ID
  title: "Your Project Name",
  description: "Brief description",
  image: projectImage,  // Import image first
  tags: ["Tag1", "Tag2"],
  liveUrl: "https://...",
  githubUrl: "https://..."
}
```

### 6. Update Dashboard Previews

**File**: `src/components/Dashboards.tsx`
- Replace the dashboard preview images in `src/assets/`
- Update titles and links

### 7. Change Colors & Theme

**File**: `src/index.css`

The design system uses CSS variables:
```css
:root {
  --primary: 262 83% 58%;     /* Main brand color (purple) */
  --secondary: 217 91% 60%;   /* Secondary color (blue) */
  --accent: 280 100% 70%;     /* Accent color */
  /* Edit these values for different colors */
}
```

**Color format**: HSL (Hue, Saturation, Lightness)
- Hue: 0-360 (color wheel position)
- Saturation: 0-100% (color intensity)
- Lightness: 0-100% (brightness)

### 8. Update Contact Email

**File**: `supabase/functions/send-contact-email/index.ts`
```typescript
to: ["your-new-email@gmail.com"],  // Line 33
```

### 9. Update Footer Links

**File**: `src/components/Footer.tsx`
- Update social media links
- Change copyright text
- Add/remove footer sections

### 10. Add New Pages

1. Create new page file: `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/newpage" element={<NewPage />} />
   ```
3. Add link in `src/components/Navigation.tsx`

---

## Deployment

### Deploy with Lovable (Easiest)
1. Click the **"Publish"** button in Lovable
   - Desktop: Top right corner
   - Mobile: Bottom right when in Preview mode
2. Your site is live at: `yoursite.lovable.app`

### Connect Custom Domain
1. Go to **Project > Settings > Domains** in Lovable
2. Follow the instructions to connect your domain
3. Note: Requires a paid Lovable plan

### Deploy to Other Platforms

**Vercel**:
```bash
npm install -g vercel
vercel
```

**Netlify**:
1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## Backend & Email Setup

### Lovable Cloud (Current Setup)
Your portfolio uses Lovable Cloud for backend functionality:
- **Database**: PostgreSQL (for future features)
- **Functions**: Serverless edge functions
- **Secrets**: Secure API key storage

### Email Service (Resend)

**Current Setup**:
- Service: Resend.com
- Recipient: ganeshpawar03@gmail.com
- Function: `send-contact-email`

**To Change Email Service**:
1. Sign up for alternative (SendGrid, Mailgun, etc.)
2. Update `supabase/functions/send-contact-email/index.ts`
3. Add new API key in Lovable Cloud secrets

**To Update Email Templates**:
Edit the HTML in the edge function:
```typescript
html: `
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <!-- Customize this HTML -->
`
```

---

## Troubleshooting

### Contact Form Not Working
1. **Check Resend Setup**:
   - Verify domain at resend.com/domains
   - Confirm API key is active
   
2. **Check Browser Console**:
   - Press F12 to open developer tools
   - Look for error messages

3. **Test Edge Function**:
   - Go to Lovable Cloud tab
   - Check function logs for errors

### Images Not Loading
- Check file paths in imports
- Ensure images are in `src/assets/` folder
- Verify image filenames match imports

### Styles Not Applying
- Check Tailwind class names
- Verify `index.css` is imported in `main.tsx`
- Clear browser cache (Ctrl+Shift+R)

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Page Not Found (404)
- Check route in `src/App.tsx`
- Ensure page component exists
- Verify navigation links

---

## Best Practices

### 1. **Keep Components Small**
- Each component should have one responsibility
- Split large components into smaller ones

### 2. **Use Design System**
- Always use CSS variables from `index.css`
- Don't hardcode colors (use `text-primary`, `bg-secondary`)

### 3. **Optimize Images**
- Compress images before adding
- Use appropriate formats (JPEG for photos, PNG for graphics, SVG for icons)
- Recommended tool: TinyPNG.com

### 4. **Test Responsiveness**
- Check on mobile (375px width)
- Check on tablet (768px width)
- Check on desktop (1920px width)

### 5. **Version Control**
- Commit changes frequently
- Write descriptive commit messages
- Create branches for major changes

### 6. **Backup**
- Keep a copy of your portfolio code
- Export from Lovable regularly
- Push to GitHub for version history

---

## Useful Resources

### Documentation
- [Lovable Docs](https://docs.lovable.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)

### Design Inspiration
- [Dribbble](https://dribbble.com/search/portfolio)
- [Behance](https://www.behance.net/search/projects?search=portfolio)
- [Awwwards](https://www.awwwards.com/websites/portfolio/)

### Learning
- [React Tutorial](https://react.dev/learn)
- [Tailwind CSS Crash Course](https://www.youtube.com/watch?v=UBOj6rqRUME)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Tools
- [Color Palette Generator](https://coolors.co/)
- [Image Compression](https://tinypng.com/)
- [Icon Library](https://lucide.dev/)
- [Google Fonts](https://fonts.google.com/)

---

## Quick Reference: File Locations

| What to Change | File Location |
|----------------|---------------|
| Profile Photo | `src/assets/ganesh.jpg` |
| Name & Title | `src/components/Hero.tsx` |
| About Text | `src/components/About.tsx` |
| Skills | `src/components/Skills.tsx` |
| Projects | `src/components/Projects.tsx` |
| Dashboards | `src/components/Dashboards.tsx` |
| Contact Form | `src/components/Contact.tsx` |
| Email Recipient | `supabase/functions/send-contact-email/index.ts` |
| Colors & Theme | `src/index.css` |
| Footer Links | `src/components/Footer.tsx` |
| Navigation | `src/components/Navigation.tsx` |
| Routes | `src/App.tsx` |

---

## Support

### Getting Help
1. **Lovable Community**: [Discord](https://discord.gg/lovable)
2. **Documentation**: [docs.lovable.dev](https://docs.lovable.dev/)
3. **AI Assistant**: Use Lovable's built-in chat for quick questions

### Contact Developer
For major changes or custom features, consider hiring a developer:
- Upwork
- Fiverr
- Toptal
- Or use Lovable's AI to make changes!

---

## Changelog Template

Keep track of your changes:

```markdown
## [Date] - Version X.X
### Added
- New project added to portfolio

### Changed
- Updated profile photo
- Modified color scheme

### Fixed
- Fixed mobile navigation bug
```

---

## Security Notes

### API Keys
- Never commit API keys to GitHub
- Always use Lovable Cloud secrets
- Rotate keys periodically

### Contact Form
- Current setup includes validation
- Spam protection via Resend
- Rate limiting on edge functions

---

**Remember**: Start small with changes. Test thoroughly. Keep backups. Use version control.

Good luck with your portfolio! 🚀

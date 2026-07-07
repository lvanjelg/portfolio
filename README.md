# Portfolio

A retro/pixel-themed personal portfolio website, inspired by [Nous Research](https://nousresearch.com/), [Hermes Agent](https://hermes-agent.nousresearch.com/), and [Psyche Network](https://psyche.network/runs).

## Features

- **Pixel/CRT aesthetic** — scanlines, glitch effects, pixel font, terminal vibes
- **Interactive starfield** — parallax background reacting to mouse movement
- **Typewriter effects** — on hero text, footer, and terminal bar
- **Tab navigation** — Resume, Experience, and Project tabs (keyboard shortcuts: `1`, `2`, `3`)
- **Scroll reveal** — cards fade in as you scroll
- **Fully responsive** — works on desktop, tablet, and mobile
- **Dark theme** — inspired by the three reference sites

## Getting Started

### Customize Your Content

Open `index.html` and edit these sections:

1. **Hero**: Your name and title (lines with `heroTitle` and `heroSubtitle` in `script.js`)
2. **Contact info**: Email, GitHub, LinkedIn in the resume section
3. **Skills**: Add/remove skills in the skills grid
4. **Education**: Update the timeline entry
5. **Experience**: Edit or duplicate `.exp-card` articles
6. **Projects**: Edit or duplicate `.project-card` articles

### Deploy to GitHub Pages

Since this is a static site (HTML/CSS/JS only), deploying to GitHub Pages is straightforward:

#### Option A: User/Organization Site (`username.github.io`)

```bash
# 1. Create a new repo named: your-username.github.io
# 2. In your terminal:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main

# 3. Go to Settings > Pages
#    Source: Deploy from branch
#    Branch: main, / (root)
#    Click Save
# 4. Your site will be live at https://your-username.github.io
```

#### Option B: Project Site (`username.github.io/repo-name`)

```bash
# 1. Create a new repo (e.g., "portfolio")
# 2. In your terminal:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main

# 3. Go to Settings > Pages
#    Source: Deploy from branch
#    Branch: main, /docs (or /root)
#    Click Save
# 4. Your site will be live at https://your-username.github.io/portfolio
```

> **Note**: For Option B, if you use the `/docs` folder approach, move all files into a `docs/` folder first.

## Keyboard Shortcuts

| Key | Action      |
|-----|-------------|
| `1` | Resume tab  |
| `2` | Experience  |
| `3` | Projects    |

## Customization Tips

- **Change colors**: Edit the `:root` CSS variables in `styles.css`
- **Add more experience**: Copy a `.exp-card` block in the `#tab-experience` section
- **Add more projects**: Copy a `.project-card` block in the `#tab-projects` section
- **Replace placeholder icons**: Change the `placeholder-icon` text or use emoji
- **Add real project images**: Replace the `.project-placeholder` div with an `<img>` tag

## License

MIT

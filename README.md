# Thresholds — your portfolio site

Everything you need is in this folder: `index.html`, `styles.css`, `script.js`, and an `images` folder with your four photos.

## Put it online for free (no coding required)

**1. Create a GitHub account**
Go to github.com and sign up — it's free.

**2. Create a new repository**
- Click the **+** icon (top right) → **New repository**
- Name it exactly: `yourname.github.io` — replace `yourname` with your actual GitHub username (this exact naming is what makes GitHub host it as a live website)
- Set it to **Public**
- Click **Create repository**

**3. Upload your files**
- On the new repo page, click **uploading an existing file**
- Drag in `index.html`, `styles.css`, `script.js`, and the whole `images` folder
- Scroll down, click **Commit changes**

**4. Turn on GitHub Pages**
- Go to the repo's **Settings** tab → **Pages** (left sidebar)
- Under "Build and deployment," set **Source** to **Deploy from a branch**
- Branch: `main`, folder: `/ (root)` → **Save**

**5. Wait ~1–2 minutes, then visit:**
`https://yourname.github.io`

That's it — live, free, forever, no ads, no branding.

## Things to personalize before you share it

- **Stop 04 (lake sunset)** has a placeholder line: *"— your words for this one —"*. Open `index.html`, find `stop-04`, and replace it with your own caption.
- **Email link** in the footer currently points to `you@email.com` — search for that in `index.html` and swap in your real address.
- **Hero tagline** ("Photographs and words from the space between one moment and the next.") is a starting point — make it sound like you, or keep it if it already does.

## Adding a new photo later

Each "stop" is one `<article class="stop">...</article>` block in `index.html`. Copy one, swap the image filename, tag, and text, and it'll automatically pick up the rail-line styling and scroll animation.

## Custom domain (optional, later)

If you ever want `thomasalexander.com` instead of the `.github.io` address, buy the domain anywhere (Namecheap, Google Domains, etc.) for about €10–12/year, then add it under Settings → Pages → Custom domain. Totally optional — the free address works fine on its own.

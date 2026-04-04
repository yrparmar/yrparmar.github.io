# YR APPS Portfolio

A high-performance, modern static website built with **Vite** and **Vanilla JavaScript**. This portfolio showcases the mobile applications developed by **YR APPS**, a Flutter development specialist.

## 🚀 Features

- **Blazing Fast**: Optimized build & development with Vite.
- **Premium Aesthetics**: Modern "Coming Soon" landing page with:
  - Glassmorphic UI design.
  - Smooth micro-animations & background blobs.
  - Responsive layout using CSS Grid/Flexbox.
- **CI/CD Integrated**: Automated builds & deployment via GitHub Actions.
- **Flutter developer friendly**: Structure designed to showcase multiple mobile apps with Play Store links.
- **AdMob/Play Store ready**: Pre-configured `app-ads.txt` for ad monetization verification.

## 📁 Project Structure

```plaintext
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment workflow
├── public/                   # Static assets (served at root)
│   ├── app-ads.txt           # AdMob verification file
│   └── robots.txt            # SEO crawler configuration
├── src/                      # Source code
│   ├── assets/               # Media & Font assets
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── css/                  # Stylesheets
│   │   ├── base.css          # CSS resets & variables
│   │   ├── components/       # Component-specific styles
│   │   └── main.css          # Core stylesheet
│   ├── js/                   # JavaScript files
│   │   ├── modules/          # Feature components
│   │   ├── utils/            # Helper functions
│   │   └── main.js           # Entry point
│   └── index.html            # Main website entry point
├── package.json              # Project dependencies & scripts
├── vite.config.js            # Vite configuration
├── README.md                 # Project documentation
└── .gitignore                # Git ignore rules
```

## 🛠️ Local Development

To get started locally, follow these steps:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/yrparmar/yrparmar.github.io.git
    cd yrparmar.github.io
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    *The site will be available at `http://localhost:3000` (by default).*

4.  **Build for Production**:
    ```bash
    npm run build
    ```
    *The production-ready build will be in the `dist/` directory.*

## 🚢 Deployment

The project is configured with **GitHub Actions**. Every push to the `main` branch will automatically:
1.  Run the build process.
2.  Deploy the bundled assets to **GitHub Pages**.

## 📄 License

&copy; 2026 YR APPS. All Rights Reserved.

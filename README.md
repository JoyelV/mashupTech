# React E-Commerce Theme Showcase

A React application showcasing three distinct e-commerce UI themes, each fully modularized into reusable components.

## 🚀 Getting Started

```bash
cd mashuptech
npm install
npm start
```

The app runs at **http://localhost:3000**

## 🎨 Themes

| Theme | Type | Route | Color |
|-------|------|-------|-------|
| Ekomart | Grocery Store | `/ekomart` | Green `#3bb77e` |
| MarketPro | Multivendor Marketplace | `/marketpro` | Blue `#1e88e5` |
| Electro | Electronics Store | `/electro` | Cyan `#00aeef` |

Visit `/` to see the **Theme Selector** landing page.

## 📁 Project Structure

```
src/
├── components/
│   ├── ThemeSelector.jsx       ← Landing page (route: /)
│   └── ThemeSelector.css
├── themes/
│   ├── ekomart/                ← Theme 1: Grocery Store
│   │   ├── EkokartPage.jsx     ← Main layout
│   │   ├── components/
│   │   │   ├── TopBar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroBanner.jsx
│   │   │   ├── DealOfDay.jsx       ← Live countdown timer
│   │   │   ├── FeaturedCategories.jsx
│   │   │   ├── PromoGrid.jsx
│   │   │   ├── PopularProducts.jsx
│   │   │   ├── Newsletter.jsx
│   │   │   ├── BlogSection.jsx
│   │   │   └── Footer.jsx
│   │   ├── data/mockData.js
│   │   └── styles/ekomart.css
│   │
│   ├── marketpro/              ← Theme 2: Multivendor Marketplace
│   │   ├── MarketProPage.jsx
│   │   ├── components/
│   │   │   ├── TopBar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroBanner.jsx
│   │   │   ├── FlashSale.jsx       ← Live countdown timer
│   │   │   ├── CategoryBanner.jsx
│   │   │   ├── ProductGrid.jsx     ← Tab filtering with useState
│   │   │   ├── VendorSection.jsx
│   │   │   ├── Newsletter.jsx
│   │   │   └── Footer.jsx
│   │   ├── data/mockData.js
│   │   └── styles/marketpro.css
│   │
│   └── electro/                ← Theme 3: Electronics Store
│       ├── ElectroPage.jsx
│       ├── components/
│       │   ├── TopBar.jsx
│       │   ├── Header.jsx
│       │   ├── Navbar.jsx
│       │   ├── HeroBanner.jsx
│       │   ├── FeaturedProducts.jsx  ← Tab filtering with useState
│       │   ├── CategoryBoxes.jsx
│       │   ├── BrandsBar.jsx
│       │   ├── Newsletter.jsx
│       │   └── Footer.jsx
│       ├── data/mockData.js
│       └── styles/electro.css
│
├── App.js                      ← React Router setup
├── App.css                     ← Global CSS reset
└── index.js
```

## 🧩 React Concepts Used

| Concept | Where Used |
|---------|-----------|
| `useState` hook | Newsletter forms, cart count, active tabs, countdown timers |
| `useEffect` hook | Live countdown timers in DealOfDay / FlashSale |
| Functional components | Every component in the project |
| Props | Data passed to reusable ProductCard-style sections |
| `react-router-dom` | Routing between 3 themes + home page |
| Array `.map()` | Rendering product lists, nav links, categories |
| Scoped CSS | Per-theme CSS with class prefixes (.eko-, .mp-, .el-) |

## 🏗️ Component Architecture

Each theme follows the same pattern:

```
ThemePage.jsx
  ├── TopBar
  ├── Header
  ├── Navbar
  ├── HeroBanner
  ├── [Theme-specific sections]
  ├── Newsletter
  └── Footer
```

## 📦 Dependencies

- `react` ^18.x
- `react-dom` ^18.x
- `react-router-dom` ^6.x
- `react-scripts` (CRA)

## ✅ Evaluation Checklist

- [x] 3 separate static themes converted to React
- [x] Each theme is an independent module
- [x] Modular components (Header, Footer, Navbar, Banner, Products, etc.)
- [x] Functional components throughout
- [x] React Hooks: useState, useEffect
- [x] Clean folder structure
- [x] Responsive CSS with media queries
- [x] npm install && npm start works without errors

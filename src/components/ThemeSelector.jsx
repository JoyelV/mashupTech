import React from 'react';
import { Link } from 'react-router-dom';
import './ThemeSelector.css';

const themes = [
    {
        id: 'ekomart',
        name: 'Ekomart',
        subtitle: 'Grocery Store',
        description: 'A fresh & organic grocery store theme with a clean green design, product categories, deals of the day, and blog section.',
        path: '/ekomart',
        color: '#3bb77e',
        bgColor: '#f0fdf6',
        emoji: '🥦',
        features: ['Product Cards', 'Deal Countdown', 'Category Grid', 'Blog Section'],
    },
    {
        id: 'marketpro',
        name: 'MarketPro',
        subtitle: 'Multivendor Marketplace',
        description: 'A full-featured multivendor marketplace with mega menu, flash sales, vendor showcase and modern blue design.',
        path: '/marketpro',
        color: '#1e88e5',
        bgColor: '#f0f7ff',
        emoji: '🏪',
        features: ['Flash Sale', 'Mega Menu', 'Vendor Section', 'Category Banners'],
    },
    {
        id: 'electro',
        name: 'Electro',
        subtitle: 'Electronics Store',
        description: 'A dark, sleek electronics store template for gadgets & tech products with tabs, brand logos, and a professional dark UI.',
        path: '/electro',
        color: '#00aeef',
        bgColor: '#f0fbff',
        emoji: '💻',
        features: ['Product Tabs', 'Brand Logos', 'Tech Categories', 'Dark Theme'],
    },
];

function ThemeSelector() {
    return (
        <div className="selector-page">
            <header className="selector-header">
                <div className="selector-badge">🎨 React Theme Showcase</div>
                <h1>Three E-Commerce Themes</h1>
                <p>Select a theme to preview it. Each theme is a fully modular React application with independent components, styling, and data.</p>
            </header>

            <div className="themes-grid">
                {themes.map((theme) => (
                    <div key={theme.id} className="theme-card" style={{ '--accent': theme.color, '--bg': theme.bgColor }}>
                        <div className="theme-card-header" style={{ background: theme.bgColor }}>
                            <span className="theme-emoji">{theme.emoji}</span>
                            <div className="theme-badge" style={{ background: theme.color }}>
                                {theme.subtitle}
                            </div>
                        </div>
                        <div className="theme-card-body">
                            <h2 style={{ color: theme.color }}>{theme.name}</h2>
                            <p className="theme-desc">{theme.description}</p>
                            <ul className="feature-list">
                                {theme.features.map((f) => (
                                    <li key={f} style={{ borderColor: theme.color + '44' }}>
                                        <span style={{ color: theme.color }}>✓</span> {f}
                                    </li>
                                ))}
                            </ul>
                            <Link to={theme.path} className="theme-btn" style={{ background: theme.color }}>
                                Preview Theme →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="selector-footer">
                <p>Built with <span>React</span> · <span>React Router</span> · <span>CSS3</span></p>
            </footer>
        </div>
    );
}

export default ThemeSelector;

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ekomart.css';
import Header from './components/Header';
import InfoStrip from './components/InfoStrip';
import HeroBanner from './components/HeroBanner';
import FeaturedCategories from './components/FeaturedCategories';
import PopularProducts from './components/PopularProducts';
import FeatureCards from './components/FeatureCards';
import WeeklySalesOne from './components/WeeklySalesOne';
import WeeklySales from './components/WeeklySales';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function EkomartPage() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="eko-page">
            {/* Dev nav bar */}
            <div style={{
                background: '#1F1F25', color: 'white', textAlign: 'center',
                padding: '8px', fontSize: '0.8rem'
            }}>
                <Link to="/" style={{ color: '#629D23', fontWeight: 700 }}>← Back to Theme Selector</Link>
                {' '} | You are viewing: <strong>Ekomart – Grocery Store Theme</strong>
            </div>
            <Header onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <InfoStrip />
            <HeroBanner />
            <FeaturedCategories />
            <FeatureCards />
            <PopularProducts />
            <WeeklySalesOne />
            <WeeklySales />
            <BlogSection />
            <Footer />
        </div>
    );
}

export default EkomartPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/electro.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import FeaturedProducts from './components/FeaturedProducts';
import CategoryBoxes from './components/CategoryBoxes';
import Bestsellers from './components/Bestsellers';
import PromoSections from './components/PromoSections';
import RecentlyViewed from './components/RecentlyViewed';
import BrandLogos from './components/BrandLogos';
import BrandsBar from './components/BrandsBar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { featuredProducts, electroCategories } from './data/mockData';

function ElectroPage() {
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('newest');
    const [filteredProducts, setFilteredProducts] = useState(featuredProducts);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showFilters, setShowFilters] = useState(true);
    const [quickView, setQuickView] = useState(null);

    const handleSort = (option) => {
        setSortBy(option);
        let sorted = [...filteredProducts];
        
        switch(option) {
            case 'price-low':
                sorted.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sorted.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                sorted.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
            default:
                sorted = [...featuredProducts];
        }
        setFilteredProducts(sorted);
    };

    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredProducts(featuredProducts);
        } else {
            setFilteredProducts(featuredProducts.filter(p => p.category === category));
        }
    };

    return (
        <div className="el-page">
            <div style={{
                background: '#0f0f1a', color: 'rgba(255,255,255,0.7)', textAlign: 'center',
                padding: '8px', fontSize: '0.8rem'
            }}>
                <Link to="/" style={{ color: '#00aeef', fontWeight: 700 }}>← Back to Theme Selector</Link>
                {' '} | You are viewing: <strong>Electro – Electronics Store Theme</strong>
            </div>
            <TopBar />
            <Header />
            <Navbar />
            <HeroBanner />
            
            <FeaturedProducts />
            <CategoryBoxes />
            <Bestsellers />
            <PromoSections />
            <RecentlyViewed />
            <BrandLogos />
            <BrandsBar />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default ElectroPage;

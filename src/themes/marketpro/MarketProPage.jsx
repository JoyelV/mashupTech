import React from 'react';
import { Link } from 'react-router-dom';
import './styles/marketpro.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import PromoCountdownBanners from './components/PromoCountdownBanners';
import SmallBanners from './components/SmallBanners';
import FlashSale from './components/FlashSale';
import DiscountBanner from './components/DiscountBanner';
import ProductWidgets from './components/ProductWidgets';
import CategoryBanner from './components/CategoryBanner';
import ProductGrid from './components/ProductGrid';
import HotDeals from './components/VerticalProductColumns';
import ShopByBrands from './components/ShopByBrands';
import BestSells from './components/BestSells';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter';

function MarketProPage() {
    return (
        <div className="mp-page">
            <div style={{
                background: '#1a1a2e', color: 'rgba(255,255,255,0.8)', textAlign: 'center',
                padding: '8px', fontSize: '0.8rem'
            }}>
                <Link to="/" style={{ color: '#1e88e5', fontWeight: 700 }}>← Back to Theme Selector</Link>
                {' '} | You are viewing: <strong>MarketPro – Multivendor Marketplace Theme</strong>
            </div>
            <TopBar />
            <Header />
            <Navbar />
            <HeroBanner />
            <CategoryBanner />
            <SmallBanners />
            <FlashSale />
            <PromoCountdownBanners />
            <ProductGrid />
            <DiscountBanner />
            <HotDeals />
            <ProductWidgets />
            <ShopByBrands />
            <BestSells />
            <Newsletter />
            <Footer />
            <BottomFooter />
        </div>
    );
}

export default MarketProPage;

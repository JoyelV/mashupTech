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

function ElectroPage() {
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

import { Link } from 'react-router-dom';
import './styles/electro.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ElectroPromos from './components/ElectroPromos';
import ElectroSpecialDeals from './components/ElectroSpecialDeals';
import ElectroBestDeals from './components/ElectroBestDeals';
import Bestsellers from './components/Bestsellers';
import RecentlyViewed from './components/RecentlyViewed';
import ProductWidgets from './components/ProductWidgets';
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
            <ElectroPromos />
            <ElectroSpecialDeals />
            <ElectroBestDeals />
            <Bestsellers />
            <RecentlyViewed />
            <ProductWidgets />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default ElectroPage;

import React, { useRef } from 'react';
import '../styles/CategoryBanner.css';
import img1 from '../assets/images/category/feature-img1.png';
import img2 from '../assets/images/category/feature-img2.png';
import img3 from '../assets/images/category/feature-img6.png';
import img4 from '../assets/images/category/feature-img8.png';
import img5 from '../assets/images/category/feature-img9.png';

const categories = [
    { id: 1, name: 'Snacks', items: '125+ Products', img: img1 },
    { id: 2, name: 'Frozen Foods', items: '125+ Products', img: img2 },
    { id: 3, name: 'Vegetables', items: '125+ Products', img: img3 },
    { id: 4, name: 'Fish & Meats', items: '125+ Products', img: img4 },
    { id: 5, name: 'Desserts', items: '125+ Products', img: img5 },
    { id: 6, name: 'Drinks & Juice', items: '125+ Products', img: img1 },
    { id: 7, name: 'Animals Food', items: '125+ Products', img: img2 },
    { id: 8, name: 'Fresh Fruits', items: '125+ Products', img: img3 },
    { id: 9, name: 'Yummy Candy', items: '125+ Products', img: img4 },
    { id: 10, name: 'Bakery', items: '125+ Products', img: img5 },
    { id: 11, name: 'Fish & Meats', items: '125+ Products', img: img1 },
    { id: 12, name: 'Desserts', items: '125+ Products', img: img2 },
    { id: 13, name: 'Drinks & Juice', items: '125+ Products', img: img3 },
];

function CategoryBanner() {
    const scrollRef = useRef(null);

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="categories" className="mp-category-section">
            <div className="mp-container">
                <div className="mp-category-carousel-wrapper">
                    
                    {/* Left Navigation Arrow */}
                    <button 
                        className="mp-cat-arrow mp-cat-arrow-left" 
                        onClick={() => handleScroll('left')}
                    >
                        <i className="ph ph-caret-left"></i>
                    </button>

                    {/* Scrollable Track */}
                    <div className="mp-category-track" ref={scrollRef}>
                        {categories.map((cat) => (
                            <div key={cat.id} className="mp-category-item">
                                <div className="mp-category-circle">
                                    <img src={cat.img} alt={cat.name} />
                                </div>
                                <h4 className="mp-category-name">{cat.name}</h4>
                                <span className="mp-category-count">{cat.items}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right Navigation Arrow */}
                    <button 
                        className="mp-cat-arrow mp-cat-arrow-right" 
                        onClick={() => handleScroll('right')}
                    >
                        <i className="ph ph-caret-right"></i>
                    </button>

                </div>
            </div>
        </section>
    );
}

export default CategoryBanner;
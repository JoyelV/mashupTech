// ===== EKOMART MOCK DATA =====
// Using Unsplash images that match the style of the original grocery product photos
import img19 from '../assets/images/grocery/19.jpg';
import img20 from '../assets/images/grocery/20.jpg';
import img21 from '../assets/images/grocery/21.jpg';
import img22 from '../assets/images/grocery/22.jpg';
import img23 from '../assets/images/grocery/23.jpg';

export const categories = [
    { id: 1, name: 'Organic Vegetable', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=140&q=80' },
    { id: 2, name: 'Fresh Fruits', img: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=140&q=80' },
    { id: 3, name: 'Snack & Spices', img: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=140&q=80' },
    { id: 4, name: 'Fresh Vegetables', img: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=140&q=80' },
    { id: 5, name: 'Fresh Apples', img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=140&q=80' },
    { id: 6, name: 'Organic Kiwi', img: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=140&q=80' },
    { id: 7, name: 'Organic Melon', img: 'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=140&q=80' },
    { id: 8, name: 'Dairy & Eggs', img: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=140&q=80' },
    { id: 9, name: 'Frozen Foods', img: 'https://images.unsplash.com/photo-1612200025-b9d5a1e547d7?w=140&q=80' },
    { id: 10, name: 'Bakery', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=140&q=80' },
];

// Matching the grocery images from original: grocery/01, 19, 20, 21, 22, 23, 24
export const popularProducts = [
    {
        id: 1, name: 'Dalivaring business makes your profit', price: 63.00, oldPrice: 36.00,
        weight: '500g Pack', category: 'Vegetables',
        img: img19
    },
    {
        id: 2, name: 'Firebase business makes your profit', price: 50.00, oldPrice: 36.00,
        weight: '500g Pack', category: 'Snacks',
        img: img20
    },
    {
        id: 3, name: 'Netlyfy business makes your profit', price: 19.00, oldPrice: 36.00,
        weight: '500g Pack', category: 'Condiments',
        img: img21
    },
    {
        id: 4, name: 'Details business makes your profit', price: 90.00, oldPrice: 36.00,
        weight: '500g Pack', category: 'Beverages',
        img: img22
    },
];

// Weekly sales row 1 (10 products, 5-col grid, 2 rows)
export const weeklySales1 = [
     { id: 1, name: 'Firebase business makes your profit', price: 50.00, oldPrice: 36.00, weight: '500g Pack', img: img19  },
    { id: 2, name: 'Netlyfy business makes your profit', price: 19.00, oldPrice: 36.00, weight: '500g Pack', img: img20 },
    { id: 3, name: 'Details business makes your profit', price: 90.00, oldPrice: 36.00, weight: '500g Pack', img: img21 },
    { id: 4, name: 'Profitable business makes your profit', price: 30.00, oldPrice: 36.00, weight: '500g Pack', img: img22 },
    { id: 5, name: 'Valuable business makes your profit', price: 16.00, oldPrice: 36.00, weight: '500g Pack', img: img23 },
    { id: 6, name: 'Firebase business makes your profit', price: 50.00, oldPrice: 36.00, weight: '500g Pack', img: img19  },
    { id: 7, name: 'Netlyfy business makes your profit', price: 19.00, oldPrice: 36.00, weight: '500g Pack', img: img20 },
    { id: 8, name: 'Details business makes your profit', price: 90.00, oldPrice: 36.00, weight: '500g Pack', img: img21 },
    { id: 9, name: 'Profitable business makes your profit', price: 30.00, oldPrice: 36.00, weight: '500g Pack', img: img22 },
    { id: 10, name: 'Valuable business makes your profit', price: 16.00, oldPrice: 36.00, weight: '500g Pack', img: img23 },
];

// Weekly sales row 2 (5 products, 5-col grid, 1 row) — different tabs
export const weeklySales2 = [
    { id: 1, name: 'Firebase business makes your profit', price: 50.00, oldPrice: 36.00, weight: '500g Pack', img: img19  },
    { id: 2, name: 'Netlyfy business makes your profit', price: 19.00, oldPrice: 36.00, weight: '500g Pack', img: img20 },
    { id: 3, name: 'Details business makes your profit', price: 90.00, oldPrice: 36.00, weight: '500g Pack', img: img21 },
    { id: 4, name: 'Profitable business makes your profit', price: 30.00, oldPrice: 36.00, weight: '500g Pack', img: img22 },
     { id: 5, name: 'Valuable business makes your profit', price: 16.00, oldPrice: 36.00, weight: '500g Pack', img: img23 },
];

export const blogPosts = [
    {
        id: 1,
        title: 'Shion Fixation: Fueling Your Passion for All Things Stylish',
        date: '15 Sep, 2023', category: 'Modern Fashion',
        img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80'
    },
    {
        id: 2,
        title: 'Ashion Fixation: Fueling Your Passion for All Things Stylish',
        date: '15 Sep, 2023', category: 'Modern Fashion',
        img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80'
    },
    {
        id: 3,
        title: 'Fixation: Fueling Your Passion for All Things Stylish',
        date: '15 Sep, 2023', category: 'Modern Fashion',
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80'
    },
];

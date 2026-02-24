// ===== MARKETPRO MOCK DATA =====

export const flashSaleProducts = [
    { id: 1, name: 'Smart Watch Pro X1', price: 79.99, oldPrice: 149.99, img: '⌚', discount: 47, rating: 4.6 },
    { id: 2, name: 'Wireless Headphones', price: 49.99, oldPrice: 99.99, img: '🎧', discount: 50, rating: 4.8 },
    { id: 3, name: 'Running Sneakers', price: 39.99, oldPrice: 79.99, img: '👟', discount: 50, rating: 4.5 },
    { id: 4, name: 'Leather Handbag', price: 59.99, oldPrice: 119.99, img: '👜', discount: 50, rating: 4.7 },
    { id: 5, name: 'Sunglasses Premium', price: 24.99, oldPrice: 59.99, img: '🕶️', discount: 58, rating: 4.3 },
];

export const categories = [
    { id: 1, name: 'Animals Food', icon: '🐶', count: 124, bg: '#FDF7EB' },
    { id: 2, name: 'Fresh Fruits', icon: '🍎', count: 85, bg: '#E6F4F1' },
    { id: 3, name: 'Juices', icon: '🍹', count: 42, bg: '#FDF1F1' },
    { id: 4, name: 'Vegetables', icon: '🥦', count: 67, bg: '#F2F6F9' },
    { id: 5, name: 'Snacks', icon: '🥨', count: 93, bg: '#FDF7EB' },
    { id: 6, name: 'Organic Foods', icon: '🥗', count: 110, bg: '#E6F4F1' },
    { id: 7, name: 'Bread & Bakery', icon: '🍞', count: 54, bg: '#FDF1F1' },
    { id: 8, name: 'Seafood', icon: '🐟', count: 32, bg: '#F2F6F9' },
];

export const popularProducts = [
    { id: 1, name: 'Taylor Farms Broccoli Florets', category: 'Vegetables', price: 28.00, oldPrice: 35.00, rating: 4.8, reviews: 120, img: '🥦', badge: 'Sale 50%', badgeCls: 'bg-primary' },
    { id: 2, name: 'Fresh Organic Carrots', category: 'Vegetables', price: 15.00, oldPrice: 20.00, rating: 4.9, reviews: 95, img: '🥕', badge: 'Best Sale', badgeCls: 'bg-danger' },
    { id: 3, name: 'Premium Angus Beef', category: 'Meat', price: 85.00, oldPrice: 110.00, rating: 4.7, reviews: 340, img: '🥩', badge: 'Sale 50%', badgeCls: 'bg-primary' },
    { id: 4, name: 'Fresh Atlantic Salmon', category: 'Seafood', price: 55.00, oldPrice: 70.00, rating: 4.6, reviews: 210, img: '🐟', badge: 'New', badgeCls: 'bg-success' },
    { id: 5, name: 'Organic Green Apples', category: 'Fruits', price: 12.00, oldPrice: 18.00, rating: 4.5, reviews: 150, img: '🍏', badge: 'Best Sale', badgeCls: 'bg-danger' },
    { id: 6, name: 'Whole Grain Bread', category: 'Bakery', price: 8.00, oldPrice: 12.00, rating: 4.8, reviews: 180, img: '🍞', badge: 'Sale 20%', badgeCls: 'bg-primary' },
    { id: 7, name: 'Orange Juice 1L', category: 'Juices', price: 10.00, oldPrice: 15.00, rating: 4.7, reviews: 90, img: '🍹', badge: 'Best Sale', badgeCls: 'bg-danger' },
    { id: 8, name: 'Pet Food Premium', category: 'Animals Food', price: 45.00, oldPrice: 60.00, rating: 4.9, reviews: 420, img: '🐶', badge: 'Sale 50%', badgeCls: 'bg-primary' },
];

export const vendors = [
    { id: 1, name: 'TechGear Store', emoji: '💻', products: 245, rating: 4.8, location: 'New York' },
    { id: 2, name: 'FashionFirst', emoji: '👗', products: 183, rating: 4.6, location: 'Los Angeles' },
    { id: 3, name: 'HomeStyle', emoji: '🏠', products: 312, rating: 4.9, location: 'Chicago' },
    { id: 4, name: 'SportZone', emoji: '⚽', products: 127, rating: 4.7, location: 'Miami' },
];

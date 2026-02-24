import React, { useState } from 'react';

function Header() {
    const [cartCount] = useState(2);

    return (
        <header className="el-header">
            <div className="container">
                <div className="el-logo">
                    <span className="e">E</span><span className="lectro">lectro</span>
                </div>

                <form className="el-search" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Search laptops, phones, TVs, cameras..." />
                    <button type="submit">🔍</button>
                </form>

                <div className="el-header-actions">
                    <div className="el-action">
                        <span className="icon">❤️</span>
                        <span className="lbl">Wishlist</span>
                        <span className="el-count">3</span>
                    </div>
                    <div className="el-action">
                        <span className="icon">👤</span>
                        <span className="lbl">Account</span>
                    </div>
                    <div className="el-action">
                        <span className="icon">🛒</span>
                        <span className="lbl">Cart</span>
                        <span className="el-count">{cartCount}</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

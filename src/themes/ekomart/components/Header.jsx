import "../styles/Header.css";
import logo from "../assets/images/logo.svg";
import categoryIcon from "../assets/images/icons/bar-1.svg";
import icon01 from "../assets/images/icons/01.svg";
import icon02 from "../assets/images/icons/02.svg";
import icon03 from "../assets/images/icons/03.svg";
import icon04 from "../assets/images/icons/04.svg";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");

  const dropdownRef = useRef(null);

  const categories = [
    {
      name: "Breakfast & Dairy",
      icon: icon01,
      subMenu: ["Breakfast", "Dinner", "Pumpkin"]
    },
    {
      name: "Meats & Seafood",
      icon: icon02,
      subMenu: ["Breakfast", "Dinner", "Pumpkin"]
    },
    {
      name: "Breads & Bakery",
      icon: icon03
    },
    {
      name: "Chips & Snacks",
      icon: icon04,
      subMenu: ["Breakfast", "Dinner", "Pumpkin"]
    }
  ];

  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowCategories(false);
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-left">
            FREE delivery & 40% Discount for next 3 orders!
            <span className="highlight"> Place your 1st order in.</span>
            <span className="expired"> Sorry, your session has expired.</span>
          </div>
          <div className="top-right">
            Need help? Call Us:+258 3268 21485
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container header-flex">

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="Ekomart Logo" className="logo-img" />
          </div>

          {/* Category + Search */}
          <div className="category-search-wrapper" ref={dropdownRef}>

            {/* Category Button */}
            <div
  className="category-btn category-hover-header"
  onClick={() => setShowCategories(!showCategories)}
>
  <img
    className="parent"
    alt="icons"
    src={categoryIcon}
  />
  <span>Categories</span>
</div>

            {/* Dropdown Menu */}
            {showCategories && (
              <ul className="category-sub-menu" id="category-active-four">
                {categories.map((item, index) => (
                  <li key={index}>
                   <button
  className="menu-item"
  onClick={() => toggleSubMenu(index)}
  aria-expanded={activeIndex === index}
>
  <img src={item.icon} alt="" />
  <span>{item.name}</span>
  {item.subMenu && <span className="plus">+</span>}
</button>

{item.subMenu && activeIndex === index && (
  <ul className="submenu">
    {item.subMenu.map((sub, i) => (
      <li key={i}>
        <a href="/shop" className="mobile-menu-link">{sub}</a>
      </li>
    ))}
  </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {/* Search */}
            <form
  className="search-header"
  autoComplete="off"
  onSubmit={(e) => {
    e.preventDefault();
    console.log(search);
  }}
>
  <input
    type="text"
    placeholder="Search for products, categories or brands"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    required
  />

  <button
    type="submit"
    className="rts-btn btn-primary radious-sm with-icon"
  >
    <span className="btn-text">Search</span>
    <span className="arrow-icon">
      <i className="fa-solid fa-magnifying-glass"></i>
    </span>
  </button>
</form>
          </div>

    {/* Right Actions */}
    <div className="account-wishlist-cart-area-header">
      <a className="btn-border-only account" href="/account">
        <i className="fa-solid fa-user"></i> 
        <span>Account</span>
      </a>
      <a className="btn-border-only account compare-number"><i className="fa-solid fa-code-compare"></i><span className="number">0</span></a>
      <div className="btn-border-only cart category-hover-header"><i className="fa-solid fa-heart"></i><span className="text">Wishlist</span><span className="number">0</span></div>
      <div className="btn-border-only cart category-hover-header"><i className="fa-sharp fa-solid fa-cart-shopping"></i><span className="text">Cart</span><span className="number">0</span>
      </div>
    </div>
  </div>
</header>
    </>
  );
};

export default Header;
import React, { useState } from "react";
import { weeklySales1 } from "../data/mockData";
import ProductCard from "../components/ProductCard";
import "../styles/WeeklySales.css";

const tabs = [
  "Frozen Foods",
  "Diet Foods",
  "Healthy Foods",
  "Vitamin Items",
];

function WeeklySalesOne() {
  const [activeTab, setActiveTab] = useState("Frozen Foods");

  return (
    <section className="weekly-sales-section">
      <div className="sales-container">

        <div className="sales-header">
          <h2>Don't miss this week's sales</h2>
<ul
  className="nav nav-tabs best-selling-grocery"
  id="myTab"
  role="tablist"
>
  {tabs.map((tab) => (
    <li
      key={tab}
      className="nav-item"
      role="presentation"
    >
      <button
        className={`nav-link ${
          activeTab === tab ? "active" : ""
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </button>
    </li>
  ))}
</ul>
        </div>

        <div className="products-row">
          {weeklySales1.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default WeeklySalesOne;
import React, { useState } from "react";
import { weeklySales2 } from "../data/mockData";
import ProductCard from "../components/ProductCard";
import "../styles/WeeklySales.css";

const tabs = ["All", "Baking material", "Milks & Dairies", "Vagetable"];

function WeeklySales() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="weekly-sales-section">
      <div className="sales-container">

        <div className="sales-header">
          <h2>Don't miss this week's sales</h2>

          <div className="sales-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="products-row">
          {weeklySales2.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default WeeklySales;
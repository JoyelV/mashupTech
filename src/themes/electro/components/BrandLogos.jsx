import React from 'react';

const brandLogos = ['themeforest', 'graphicriver', 'codecanyon', 'audiojungle', 'activeden'];

function BrandLogos() {
    return (
        <section className="el-brand-logos">
            <div className="container">
                <div className="el-logos-carousel">
                    {brandLogos.map((brand, idx) => (
                        <div key={idx} className="el-logo-item">
                            <span className="el-logo-text">{brand}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BrandLogos;

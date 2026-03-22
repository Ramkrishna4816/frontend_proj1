import React from 'react';
import { motion } from 'framer-motion';

const PromoBanner = () => {
    const experiences = [
        {
            id: 1,
            title: 'Ayurveda & Wellness',
            desc: 'Rejuvenate your mind, body, and soul with ancient Ayurvedic therapies in the tranquil backwaters and lush greenery of Kerala.',
            img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
            label: 'Wellness Retreat'
        },
        {
            id: 2,
            title: 'Heritage River Cruises',
            desc: 'Sail along the sacred rivers of India. Witness ancient ghats, magnificent temples, and serene village life from the comfort of a luxury cruise.',
            img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
            label: 'Luxury Voyage',
            reverse: true
        },
        {
            id: 3,
            title: 'Himalayan Adventure',
            desc: 'Embark on thrilling treks and expeditions across the majestic Himalayas. Experience high-altitude deserts, deep valleys, and breathtaking summits.',
            img: 'https://images.unsplash.com/photo-1533692328991-08159ff19fca?auto=format&fit=crop&w=800&q=80',
            label: 'Extreme Trekking'
        }
    ];

    return (
        <div className="promo-banners-container">
            <h2 className="section-title">Specialty Experiences</h2>

            {experiences.map((exp, index) => (
                <motion.section
                    key={exp.id}
                    className={`promo-banner glass-section ${exp.reverse ? 'promo-reverse' : ''}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="promo-image-wrapper">
                        <img src={exp.img} alt={exp.title} className="promo-image" />
                        <div className="promo-badge">{exp.label}</div>
                    </div>
                    <div className="promo-content">
                        <h3>{exp.title}</h3>
                        <div className="promo-divider"></div>
                        <p>{exp.desc}</p>
                        <button className="promo-btn">Explore More</button>
                    </div>
                </motion.section>
            ))}
        </div>
    );
};

export default PromoBanner;

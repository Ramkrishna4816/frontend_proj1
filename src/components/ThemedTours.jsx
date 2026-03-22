import React from 'react';
import { motion } from 'framer-motion';

const ThemedTours = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <motion.section
            className="glass-section full-width-section"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <h2>Themed Heritage Tours</h2>

            <div className="themed-tours-grid">
                {/* Column 1: Wildlife */}
                <motion.div className="tour-column" variants={itemVariants}>
                    <div className="tour-icon wildlife-icon">🐅</div>
                    <h3>Wildlife Reserves</h3>
                    <ul className="tour-list">
                        <li>
                            <strong>Jim Corbett</strong>
                            <span>Uttarakhand - Tigers & Elephants</span>
                        </li>
                        <li>
                            <strong>Kaziranga</strong>
                            <span>Assam - One-Horned Rhino</span>
                        </li>
                        <li>
                            <strong>Ranthambore</strong>
                            <span>Rajasthan - Royal Bengal Tiger</span>
                        </li>
                        <li>
                            <strong>Sundarbans</strong>
                            <span>West Bengal - Mangrove Delta</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Column 2: Pilgrimage */}
                <motion.div className="tour-column" variants={itemVariants}>
                    <div className="tour-icon pilgrimage-icon">🛕</div>
                    <h3>Spiritual Journeys</h3>
                    <ul className="tour-list">
                        <li>
                            <strong>Char Dham Yatra</strong>
                            <span>Himalayan Mountain Shrines</span>
                        </li>
                        <li>
                            <strong>Golden Temple</strong>
                            <span>Amritsar - Sikh Heritage</span>
                        </li>
                        <li>
                            <strong>Bodh Gaya</strong>
                            <span>Bihar - Buddhist Trail</span>
                        </li>
                        <li>
                            <strong>Meenakshi Temple</strong>
                            <span>Madurai - Dravidian Marvel</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Column 3: States Directory */}
                <motion.div className="tour-column" variants={itemVariants}>
                    <div className="tour-icon states-icon">🗺️</div>
                    <h3>Cultural Capitals</h3>
                    <div className="states-directory">
                        <span className="state-tag">Rajasthan</span>
                        <span className="state-tag">Kerala</span>
                        <span className="state-tag">Goa</span>
                        <span className="state-tag">Tamil Nadu</span>
                        <span className="state-tag">Gujarat</span>
                        <span className="state-tag">Maharashtra</span>
                        <span className="state-tag">Sikkim</span>
                        <span className="state-tag">Odisha</span>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ThemedTours;

import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../components/animatedText";

const Home = () => {
    return (
        <div>
            <motion.div className="banner-container">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{staggerChildren: 0.1}}
                >
                    <AnimatedText text="Coding"/>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{staggerChildren: 0.15}}
                >
                    <AnimatedText text="Makes"/>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{staggerChildren: 0.2}}
                >
                    <AnimatedText text="Changes"/>
                </motion.div>
            </motion.div>
        </div>
    );
};


export default Home;
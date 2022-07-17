import React from "react";
import { motion } from "framer-motion";

const item = {
    hidden: {
        y: "200%",
        transition: {
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 1
        }
    },
    visible: {
        y: 0,
        transition: {
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 0.9
        }
    }
};


const AnimatedText = ({text}) => {
    const words = text.split("");
    return (
        <h1 className="banner">
            <div>
                {words.map((element, index) =>
                    <span
                        className="d-inline-block overflow-hidden py-2"
                        key={index}
                    >
                        <motion.span
                            style={{display: "inline-block", whiteSpace: "pre"}}
                            variants={item}
                        >
                            {element}
                        </motion.span>
                    </span>
                )}
            </div>
        </h1>
    );
};

export default AnimatedText;
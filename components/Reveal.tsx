"use client";
import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    variant?: "fade-up" | "scale" | "custom" | "fade";
    customVariants?: Variants;
    stagger?: boolean; // If true, orchestrates children
    staggerDelay?: number;
    fullHeight?: boolean; // New prop to force height to 100%
}

export const Reveal = ({
    children,
    width = "fit-content",
    className = "",
    delay = 0,
    variant = "fade-up",
    customVariants,
    stagger = false,
    staggerDelay = 0.15,
    fullHeight = false,
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" }); // trigger slightly before fully in view

    // Define variants based on user request
    // Cards/Items: opacity: 0, y: 40 -> opacity: 1, y: 0. Duration 0.5s, easeOut.
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: delay,
            }
        },
    };

    const fadeVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: delay,
            }
        },
    };

    // Buttons: scale: 0.9 -> 1, opacity: 0 -> 1, delay: 0.3s (default delay can be overridden)
    const scaleVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: delay,
            }
        },
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: delay,
                when: "beforeChildren", // User said "Entire section container animates first... Then children animate"
                staggerChildren: staggerDelay,
            },
        },
    };

    // Select the appropriate variant
    let selectedVariants = fadeUpVariants;
    if (variant === "scale") selectedVariants = scaleVariants;
    if (variant === "fade") selectedVariants = fadeVariants;
    if (stagger) selectedVariants = containerVariants; // Stagger overrides individual item behavior for containers
    if (customVariants) selectedVariants = customVariants;

    // Combine classes
    const outerClasses = `${className} ${fullHeight ? 'h-full' : ''}`.trim();
    const innerClasses = fullHeight ? 'h-full' : '';

    return (
        <div ref={ref} style={{ width }} className={outerClasses}>
            <motion.div
                variants={selectedVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={innerClasses}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;

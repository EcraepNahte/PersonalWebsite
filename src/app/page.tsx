"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EthanPearce from "./pages/ethanpearce";
import SoftwareDeveloper from "./pages/softwaredeveloper";
import GameDesigner from "./pages/gamedesigner";
import ThreeDPrinter from "./pages/threedprinter";

// The titles for your tabs/sections
const titles = [
    "Ethan Pearce",
    "Software Engineer",
    "Game Designer",
    "3D Printer",
    "Father",
];

const tabContents = [
    <EthanPearce />,
    <SoftwareDeveloper />,
    <GameDesigner />,
    <ThreeDPrinter />,
    "My journey and thoughts about being a Father...",
];

export default function Home() {
    // Track which phase we're in: intro or tab navigation
    const [introDone, setIntroDone] = useState(false);
    // Track which tab is active
    const [activeTab, setActiveTab] = useState(0);
    // For sequential animation timing
    const [showTitleIdx, setShowTitleIdx] = useState(-1);

    // Sequentially reveal each title, then set introDone to true
    useEffect(() => {
        if (introDone) return;
        if (showTitleIdx < titles.length - 1) {
            const timeout = setTimeout(
                () => setShowTitleIdx(showTitleIdx + 1),
                600
            );
            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => setIntroDone(true), 3000);
        }
    }, [showTitleIdx, introDone]);

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
            {/* Animated intro phase */}
            {!introDone && (
                <motion.div
                    initial={{ opacity: 1, y: 30 }}
                    animate={{ opacity: 0, y: 0 }}
                    transition={{ duration: 1.0, delay: 5.0 }}
                    className="flex flex-row space-x-5"
                >
                    {titles.map((title, idx) => (
                        <motion.h1
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.0, delay: idx * 1.0 }}
                            className="text-3xl md:text-3xl text-white mb-4 font-semibold"
                        >
                            {title}
                        </motion.h1>
                    ))}
                </motion.div>
            )}

            {/* Tab navigation phase */}
            {introDone && (
                <div className="w-full min-h-screen h-screen flex flex-col items-center">
                    {/* Tabs at the top */}
                    <div className="flex gap-6 justify-center mt-8 mb-10">
                        {titles.map((title, idx) => (
                            <motion.button
                                key={title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.0, delay: idx * 0.1 }}
                                className={`px-4 py-2 rounded-t-lg text-lg font-medium transition 
                  duration-300 ${
                      activeTab === idx
                          ? "bg-green-600 text-white"
                          : "bg-gray-800 text-green-300 hover:bg-green-700"
                  }`}
                                onClick={() => setActiveTab(idx)}
                            >
                                {title}
                            </motion.button>
                        ))}
                    </div>
                    {/* Show tab content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="max-w-2xl bg-gray-800 text-white rounded-lg shadow-lg p-8 overflow-scroll no-scrollbar"
                        >
                            {tabContents[activeTab]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}

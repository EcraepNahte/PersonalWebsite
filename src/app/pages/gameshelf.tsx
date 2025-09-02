import { useState } from "react";
import { Game } from "../model/Game";
import GameCase from "./gamecase";
import { motion } from "framer-motion";

type GameList = {
    games: Game[];
};

export default function GameShelf({ games }: GameList) {
    const [selectedGameIndex, setSelectedGameIndex] = useState<number | null>(
        null
    );
    return (
        <div className="flex flex-col">
            {selectedGameIndex !== null && (
                <motion.div
                    className="mt-6 p-4 border rounded bg-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl font-bold">
                        {games[selectedGameIndex].title}
                    </h2>
                    <div className="mt-4 aspect-w-16 aspect-h-9">
                        {games[selectedGameIndex].iframe}
                    </div>
                    <p className="mt-2">
                        {games[selectedGameIndex].description}
                    </p>
                </motion.div>
            )}

            <div className="shelf flex flex-row">
                {games.map((game, index) => (
                    <div
                        key={game.title}
                        onClick={() => {
                            setSelectedGameIndex(null);
                            setSelectedGameIndex(index);
                        }}
                    >
                        <GameCase game={game} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}

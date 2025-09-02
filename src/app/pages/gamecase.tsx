import { Game } from "../model/Game";

type GameCase = {
    index: number;
    game: Game;
};

export default function GameCase({ game, index }: GameCase) {
    return (
        <div
            className="game-case h-100 w-100 rounded-lg shadow-lg flex flex-col items-center relative"
            style={{
                backgroundColor: game.backgroundColor,
                zIndex: index,
            }}
        >
            <div
                className="spine w-16 relative"
                style={{
                    zIndex: index * 2,
                    backgroundColor: game.backgroundColor,
                }}
            >
                <div className="w-full h-10 bg-blue-600 flex flex-col justify-center items-center border-b border-gray-300">
                    <span className="text-white font-extrabold text-xs tracking-widest">
                        .HTML
                    </span>
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-full flex justify-center items-center">
                    <span className="text-black font-bold tracking-wider text-[0.8rem] [writing-mode:vertical-rl] [text-orientation:mixed] uppercase">
                        {game.title}
                    </span>
                </div>
                <div className="absolute bottom-1 right-0 left-0 flex justify-center">
                    <svg
                        className="h-6 w-6 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 3v18m0 0c-4-1-8 0-8-4V7m8 14c4-1 8 0 8-4V7" />
                    </svg>
                </div>
            </div>
            <div
                className="cover"
                style={{
                    backgroundImage: `url(${game.imgUrl})`,
                    zIndex: index * 2 - 1,
                }}
            />
        </div>
    );
}

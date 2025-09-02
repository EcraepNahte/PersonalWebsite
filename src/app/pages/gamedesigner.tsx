import GameShelf from "./gameshelf";
import { Game } from "../model/Game";

const games: Game[] = [
    {
        title: "Matching Miss Univers",
        imgUrl: "https://img.itch.zone/aW1nLzQ0NjA5NjAucG5n/315x250%23c/b2h2Yx.png",
        backgroundColor: "#8f1a3b",
        description: `As a gamer, and a programmer, it is only natural that I would
                navigate towards making video games. In my youth, I had
                experimented with simple text adventures, and I had created
                games with toolkits like Minecraft, or Dreams, but in 2020, when
                we were all locked inside, I decided to use my extra time to
                start actually making games. I had experimented a bit with
                Unity, and in 2020, I joined my first game jam, and made a game
                called "Matching Miss Universe".
                \n\n
                The theme of the game jam was space, so we decided to created a
                game where you play as a contestant on a dating game show, but
                you are paired up with some cooky aliens. I decided to showcase
                my development skills by making it random. You will get
                different question every time you play, and the characters will
                be eliminated one by one until you get to go on a date with one
                of them.`,
        iframe: (
            <iframe
                className="my-4"
                src="https://itch.io/embed/788207?linkback=true&amp;bg_color=6a6a6a&amp;fg_color=ffffff"
                width="527"
                height="167"
            >
                <a href="https://ecraepnahte.itch.io/matching-miss-universe">
                    Matching Miss Universe by EcraepNahte
                </a>
            </iframe>
        ),
    },
    {
        title: "Hell-doku",
        imgUrl: "https://img.itch.zone/aW1nLzQ4Mjg0OTMuZ2lm/315x250%23cm/gTVpVT.gif",
        backgroundColor: "#e34949",
        description: `HELL-DOKU is a game that I spent a lot of time working on. Originally 
                it was developed as part of a Secret Santa game jam. I was supposed to create 
                a game for someone based off of their interestes, which included bullet hell, 
                pigeons, and sudoku puzzles. The player has to fight off pigeons, while also 
                solving a sudoku puzzle. Both tasks are independently tough things to accomplish.`,
        iframe: (
            <iframe
                src="https://itch.io/embed/858039?bg_color=6a6a6a&amp;fg_color=ffffff"
                width="527"
                height="167"
            >
                <a href="https://ecraepnahte.itch.io/hell-doku">
                    HELL-DOKU by EcraepNahte
                </a>
            </iframe>
        ),
    },
    {
        title: "Agent Copy Cat",
        imgUrl: "https://img.itch.zone/aW1nLzU3NTE5MTYucG5n/315x250%23c/Ezow1g.png",
        backgroundColor: "#bbdeb8",
        description: `Agent Copy Cat was another game jam game. I created it for a 
                small game jam with only 3 contestants. The previous jams I had 
                competed in had been at minimum a week, so I thought I might challenge 
                myself. I created Agent Copy Cat in a weekend. `,
        iframe: (
            <iframe
                src="https://itch.io/embed/1009487?linkback=true&amp;bg_color=6a6a6a&amp;fg_color=ffffff"
                width="527"
                height="167"
            >
                <a href="https://ecraepnahte.itch.io/agent-copy-cat">
                    Agent Copy-Cat by EcraepNahte
                </a>
            </iframe>
        ),
    },
    {
        title: "Your Move",
        imgUrl: "",
        backgroundColor: "#d6ad45",
        description: `One year after I completed Matching Miss Universe, I did 
                the same game jam with a new group of beginners. The theme that 
                year was 'Free.' We took the idea and turned it around, giving 
                the illusion of freedom. We used the wonderful voice talents of 
                my good friend Tylan James, who worked with me previously on 
                Matching Miss Unverse as well`,
        iframe: (
            <iframe
                src="https://itch.io/embed/1119978?bg_color=6a6a6a&amp;fg_color=ffffff"
                width="527"
                height="167"
            >
                <a href="https://ecraepnahte.itch.io/your-move">
                    Your Move by EcraepNahte
                </a>
            </iframe>
        ),
    },
    {
        title: "That time I got reincarnated while...",
        imgUrl: "",
        backgroundColor: "#3e7d02",
        description: `This was another Secret Santa Jam submission. My target was interested in
                anime and mushrooms, so I decided to make an early attempt at a roguelike where 
                you play a japanese high schooler who's school gets overrun by mushroom monsters. 
                I had plans for rescuing classmates, and getting abilities from them, but time 
                was not on my side for that. `,
        iframe: (
            <iframe
                src="https://itch.io/embed/1848870?bg_color=6a6a6a&amp;fg_color=ffffff"
                width="527"
                height="167"
            >
                <a href="https://ecraepnahte.itch.io/giant-mushrooms">
                    That time I got reincarnated while fighting Giant Mushrooms
                    by EcraepNahte
                </a>
            </iframe>
        ),
    },
    {
        title: "Scuba Dash",
        imgUrl: "https://img.itch.zone/aW1nLzEzMjQ0NTE1LnBuZw==/315x250%23c/sLHkb7.png",
        backgroundColor: "#0632b8",
        description: `I submitted Scuba Dash to Brackeys Game Jam. It was a fun game 
                that turned out to be way harder than I had intended. It was a gme that
                I made with friends, so it was a much more relaxed experience.`,
        iframe: (
            <iframe
                src="https://itch.io/embed/2234835?bg_color=6a6a6a&amp;fg_color=ffffff"
                width="527"
                height="167"
            >
                <a href="https://ecraepnahte.itch.io/scuba-dash">
                    Scuba Dash by EcraepNahte
                </a>
            </iframe>
        ),
    },
    {
        title: "Pumpkin Carver",
        imgUrl: "https://img.itch.zone/aW1nLzEzNDE3ODgwLnBuZw==/315x250%23c/4ERMwj.png",
        backgroundColor: "#ff8d29ff",
        description: `This is the first game that I made that wasn't a part of a game
                jam. I wanted to make a game for my wife. Something she could play on 
                her phone, that didn't take up a lot of her time. I think there is a 
                a framework for something neat here. This is probably the main project
                I would want to continue working on. The main reason I stopped was that 
                doing all of the art myself became a hinderance on my ability to do all
                of the programming.`,
        iframe: (
            <iframe
                src="https://itch.io/embed/2263759?bg_color=6a6a6a&amp;fg_color=ffffff"
                width="527"
                height="167"
            >
                <a href="https://ecraepnahte.itch.io/pumpkin-carver">
                    Pumpkin Carver by EcraepNahte
                </a>
            </iframe>
        ),
    },
    {
        title: "Cat Samurai 2088",
        imgUrl: "https://img.itch.zone/aW1nLzE0NDIzMjczLnBuZw==/315x250%23c/nL%2F1CH.png",
        backgroundColor: "#510b6cff",
        description: `Cat Samurai 2088 was yet another entry to the Secret Santa game 
                jam. The person that I had to make a game for was a fan of platformers, 
                cats, and cyberpunk. My personal goal was to work on some procederal 
                generation to make an endless game, and creating something that felt 
                good to play. I created some pretty cool mechanics, and tried to give 
                it a nice cyberpunk feel. All in all, I was pretty proud of how this 
                game turned out.`,
        iframe: (
            <iframe
                src="https://itch.io/embed/2435761?bg_color=6a6a6a&amp;fg_color=ffffff"
                width="527"
                height="167"
            >
                <a href="https://ecraepnahte.itch.io/cat-samurai-2088">
                    Cat Samurai 2088 by EcraepNahte
                </a>
            </iframe>
        ),
    },
    {
        title: "Salad Dayz",
        imgUrl: "https://img.itch.zone/aW1nLzE2OTAwNDk2LmpwZw==/315x250%23c/3vaGnb.jpg",
        backgroundColor: "#fffb27ff",
        description: `Salad dayz is by far the most complete game I have ever made. It has
                3 levels, and a boss fight at the end. Plus I was working with a wonderful
                artist, who provided me with everything I needed as soon as I needed it, if
                not sooner. I think it could use some more polish, but it is fun to play, 
                and it has some cool puzzles. If you are having trouble, pay attention to 
                the zombies T-shirts...`,
        iframe: (
            <iframe
                className="my-4"
                src="https://itch.io/embed/2819485?linkback=true&amp;bg_color=6a6a6a&amp;fg_color=ffffff&amp;border_color=626262"
                width="527"
                height="167"
            >
                <a href="https://ecraepnahte.itch.io/salad-dayz">
                    Salad Dayz by EcraepNahte, ClobberinThyme
                </a>
            </iframe>
        ),
    },
    {
        title: "Hairway to Heaven",
        imgUrl: "",
        backgroundColor: "#a5088eff",
        description: `Another quick game, I made this in one evening. The theme of the
                game jam that this was entered in was 'Tower' so I just made a game with
                a tower in it. It is tough, but short. `,
        iframe: (
            <iframe
                src="https://itch.io/embed/2989296?bg_color=6a6a6a&amp;fg_color=ffffff"
                width="527"
                height="167"
            >
                <a href="https://ecraepnahte.itch.io/hairway-to-heaven">
                    Hairway to Heaven by EcraepNahte
                </a>
            </iframe>
        ),
    },
    {
        title: "Sebastian's Snowy Saga",
        imgUrl: "https://img.itch.zone/aW1nLzE5MDk2MDM1LmpwZWc=/315x250%23c/D2th7j.jpeg",
        backgroundColor: "#7092f6ff",
        description: `Another Secret Santa Game Jam submission. My target was named Sebastian,
                and he was a fan of card games, and he provided me a lot of information about 
                his interests, so I made a collectable card game, where all of the cards are 
                based off of the things he put in his letter. Then there are two bosses; Jack
                Frost and Krampus. You can play one card per turn, then your cards abilities 
                will activate, and then the boss will do a big ability. There are no animations
                so it is hard to see. `,
        iframe: (
            <iframe
                src="https://itch.io/embed/3198344?bg_color=6a6a6a&amp;fg_color=ffffff"
                width="527"
                height="167"
            >
                <a href="https://ecraepnahte.itch.io/sebastians-snowy-saga">
                    Sebastian's Snowy Saga by EcraepNahte
                </a>
            </iframe>
        ),
    },
];

export default function GameDesigner() {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <a
                className="underline text-green-700 float-right"
                href="https://ecraepnahte.itch.io/"
                target="_blank"
            >
                View all of my games on itch.io
            </a>
            <h1 className="text-3xl md:text-3xl text-green-300 mb-4 font-semibold">
                Featured
            </h1>
            <h2 className="text-xl md:text-xl text-green-300 mt-2">
                <b className="text-green-400">Salad Dayz!</b>
            </h2>
            <iframe
                className="my-4"
                src="https://itch.io/embed/2819485?linkback=true&amp;bg_color=6a6a6a&amp;fg_color=ffffff&amp;border_color=626262"
                width="552"
                height="167"
            >
                <a href="https://ecraepnahte.itch.io/salad-dayz">
                    Salad Dayz by EcraepNahte, ClobberinThyme
                </a>
            </iframe>
            <p>
                Salad Dayz was an exciting project that I got to make with my
                incredibly talented friend and co-worker{" "}
                <a
                    className="underline text-green-700"
                    href="https://www.instagram.com/itsdesignthyme/"
                    target="_blank"
                >
                    Alex
                </a>
                . It is an homage to retro light-gun games, but with a twist.
                This game is a bit more of a puzzle game than an action game,
                and it comes complete with 3 levels and a boss fight. We made
                the entire game in 7 days during a game jam. It is tricky, but
                it can be beaten. Go ahead and give it a shot!
            </p>
            <h1 className="text-3xl md:text-3xl text-green-300 mb-4 font-semibold">
                Library
            </h1>
            <GameShelf games={games} />
        </div>
    );
}

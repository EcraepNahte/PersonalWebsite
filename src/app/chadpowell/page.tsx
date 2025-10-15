"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

interface Film {
    title: string;
    year: number;
    poster: string;
    role: string;
}

interface Actor {
    name: string;
    headshot: string;
    born: string;
    knownFor: string[];
    bio: string;
    films: Film[];
}

const mockActor: Actor = {
    name: "Chad Powell",
    headshot: "/chadpowell.jpg",
    born: "April 3, 1986 in Austin, Texas, USA",
    knownFor: ["Zombie Panic", "Neon Horizon", "Midnight Protocol"],
    bio: `Chad Powell burst onto the Hollywood scene in the mid-2010s as a rising young action star known for his athletic stunts and piercing blue-green eyes. His breakout role in Iron Wolves made him a fan favorite among genre audiences, but a string of box office disappointments and an infamous on-set altercation in 2019 sidelined his career.
\n\n\n\n\n
After several years of small streaming roles and public image rehab, Powell returned to the spotlight as the lead in Zombie Panic! — an over-the-top anime adaptation that critics have called “either his redemption arc or his final meltdown.”
\n\n\n\n\n
Offscreen, Powell has been the face of Brain Rot Energy, a sponsorship he calls “a natural fit for high-octane living.”`,
    films: [
        {
            title: "Zombie Panic",
            year: 2025,
            poster: "/zombies-panic-poster.png",
            role: "Jack Harper",
        },
        {
            title: "Neon Eclipse",
            year: 2020,
            poster: "/neon-horizon.jpg",
            role: "Ethan B. Kensue",
        },
        {
            title: "Midnight Protocol",
            year: 2018,
            poster: "/midnight-protocol.jpg",
            role: "Agent Cole",
        },
        {
            title: "Iron Wolves",
            year: 2015,
            poster: "/iron-wolves.png",
            role: "Blake Cross",
        },
    ],
};

export default function ActorPage() {
    const actor = mockActor;

    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            {/* Hero Section */}
            <div className="relative bg-neutral-900">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 p-6 md:p-10">
                    <div className="w-full md:w-1/3">
                        <Image
                            src={actor.headshot}
                            alt={actor.name}
                            width={500}
                            height={700}
                            className="rounded-2xl object-cover shadow-lg"
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">
                            {actor.name}
                        </h1>
                        <p className="text-sm text-neutral-400 mb-4">
                            {actor.born}
                        </p>
                        <Separator className="my-4 bg-neutral-700" />
                        <p className="text-lg text-neutral-200 mb-2 font-semibold">
                            Known For:
                        </p>
                        <ul className="flex flex-wrap gap-2 text-neutral-300">
                            {actor.knownFor.map((title) => (
                                <li
                                    key={title}
                                    className="bg-neutral-800 px-3 py-1 rounded-full text-sm"
                                >
                                    {title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Biography Section */}
            <div className="max-w-6xl mx-auto p-6 md:p-10">
                <h2 className="text-2xl font-bold mb-4 border-l-4 border-yellow-500 p-4">
                    Biography
                </h2>
                <p className="text-neutral-300 leading-relaxed">{actor.bio}</p>
            </div>

            {/* Filmography Section */}
            <div className="max-w-6xl mx-auto p-6 md:p-10">
                <h2 className="text-2xl font-bold mb-6 border-l-4 border-yellow-500 p-4">
                    Filmography
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {actor.films.map((film) => (
                        <motion.div
                            key={film.title}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card className="bg-neutral-900 border-neutral-800 hover:border-yellow-500 transition-colors">
                                <CardContent className="p-3">
                                    <Image
                                        src={film.poster}
                                        alt={film.title}
                                        width={300}
                                        height={450}
                                        className="rounded-xl mb-3 object-cover"
                                    />
                                    <div className="space-y-1">
                                        <p className="font-semibold text-neutral-100">
                                            {film.title}{" "}
                                            <span className="text-neutral-500">
                                                ({film.year})
                                            </span>
                                        </p>
                                        <p className="text-sm text-neutral-400">
                                            as {film.role}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

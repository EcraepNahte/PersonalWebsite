"use client";

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

export default function SpecialConCharacterPage() {
    const [name, setName] = useState("");
    const [stats, setStats] = useState({
        Strength: "d8",
        Perception: "d8",
        Endurance: "d8",
        Charisma: "d8",
        Intelligence: "d8",
        Agility: "d8",
        Luck: "d8",
    });

    const [imageSrc, setImageSrc] = useState(
        "https://st4.depositphotos.com/9998432/24360/v/450/depositphotos_243600690-stock-illustration-person-gray-photo-placeholder-girl.jpg"
    );
    const [useCamera, setUseCamera] = useState(false);
    const webcamRef = useRef<Webcam>(null);

    const updateStat = (key: string, value: string) => {
        setStats((prev) => ({ ...prev, [key]: value }));
    };

    const capture = () => {
        if (webcamRef.current) {
            const image = webcamRef.current.getScreenshot();
            if (image) {
                setImageSrc(image);
                setUseCamera(false);
            }
        }
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => setImageSrc(reader.result as string);
        reader.readAsDataURL(file);
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-purple-700 via-blue-700 to-indigo-800 p-4">
            <div className="w-full max-w-5xl rounded-3xl bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-2xl ring-8 ring-blue-600">
                {/* Header / Branding */}
                <div className="flex items-center justify-between rounded-t-3xl bg-gradient-to-r from-blue-700 to-purple-600 px-6 py-3 text-white">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Comic_con_logo.svg"
                            className="h-10 w-10"
                            alt="SuperbCon logo"
                        />
                        <h1 className="text-3xl font-extrabold tracking-wide">
                            SPECIAL CON
                        </h1>
                    </div>
                    <div className="text-right text-sm font-semibold leading-tight">
                        <p>2-DAY PASS</p>
                        <p>OCT 19-20, 2025</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center gap-6 p-6 md:flex-row md:justify-between">
                    {/* Left: Picture */}
                    <div className="flex flex-col items-center">
                        <div className="relative h-56 w-44 overflow-hidden rounded-2xl border-4 border-indigo-700 bg-gray-200 shadow-lg">
                            {useCamera ? (
                                <Webcam
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    className="h-full w-full object-cover"
                                    videoConstraints={{
                                        facingMode: "user",
                                        width: 300,
                                        height: 400,
                                    }}
                                />
                            ) : (
                                <img
                                    src={imageSrc}
                                    alt="Badge avatar"
                                    className="h-full w-full object-cover"
                                />
                            )}
                        </div>

                        <div className="mt-3 flex flex-wrap justify-center gap-2">
                            {!useCamera && (
                                <>
                                    <label className="cursor-pointer rounded-xl border-2 border-gray-700 bg-blue-500 px-3 py-1 text-sm font-semibold text-white hover:bg-blue-600">
                                        <img
                                            className="w-4"
                                            src="/icons/uploadw.png"
                                        />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileUpload}
                                            className="hidden"
                                        />
                                    </label>
                                    <button
                                        onClick={() => setUseCamera(true)}
                                        className="rounded-xl border-2 border-gray-700 bg-blue-500 px-3 py-1 text-sm font-semibold text-white hover:bg-blue-600"
                                    >
                                        <img
                                            className="w-4"
                                            src="/icons/cameraiconw.png"
                                        />
                                    </button>
                                </>
                            )}
                            {useCamera && (
                                <>
                                    <button
                                        onClick={capture}
                                        className="rounded-xl border-2 border-gray-700 bg-green-600 px-3 py-1 text-sm font-semibold text-white hover:bg-green-700"
                                    >
                                        Capture
                                    </button>
                                    <button
                                        onClick={() => setUseCamera(false)}
                                        className="rounded-xl border-2 border-gray-700 bg-red-500 px-3 py-1 text-sm font-semibold text-white hover:bg-red-600"
                                    >
                                        Cancel
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Center: Character Info */}
                    <div className="flex flex-col items-center justify-center text-center md:flex-grow">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-xl border-b-4 border-blue-600 bg-transparent text-center text-4xl font-extrabold text-gray-800 placeholder-gray-400 focus:border-purple-600 focus:outline-none"
                        />
                        <p className="mt-1 text-sm font-semibold tracking-wider text-gray-600">
                            CON ATTENDEE
                        </p>

                        <div className="mt-5 grid grid-cols-4 gap-4 md:grid-cols-7">
                            {Object.entries(stats).map(([label, value]) => (
                                <div
                                    key={label}
                                    className="flex flex-col items-center rounded-lg bg-gradient-to-b from-blue-100 to-blue-50 px-3 py-2 shadow-md hover:shadow-lg"
                                >
                                    <p className="text-3xl font-extrabold text-blue-700">
                                        {label[0]}
                                    </p>
                                    <p className="text-[10px] font-semibold tracking-wider text-gray-600">
                                        {label.toUpperCase()}
                                    </p>
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) =>
                                            updateStat(label, e.target.value)
                                        }
                                        maxLength={3}
                                        className="mt-1 w-14 rounded-md border-2 border-gray-300 bg-white text-center text-lg font-bold text-gray-800 focus:border-blue-600 focus:outline-none"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Info */}
                    {/* <div className="hidden flex-col items-end justify-center text-right text-gray-800 md:flex">
                        <div className="mb-3 rounded-lg bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 shadow-md">
                            <p>CON HOURS</p>
                            <p>Fri: 10AM – 8PM</p>
                            <p>Sat: 9AM – 6PM</p>
                        </div>
                        <button className="rounded-full bg-gradient-to-r from-blue-700 to-purple-600 px-6 py-2 font-bold text-yellow-200 shadow-lg hover:from-purple-700 hover:to-blue-600">
                            TAP TO REGISTER
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

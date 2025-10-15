// components/FatherTimeline.tsx
import React, { useState } from "react";
import { timelineData } from "../model/timelineData";
import { TimelineEvent } from "../model/timeline";

export default function Father() {
    const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
        null
    );

    return (
        <div>
            <div>
                <h1 className="text-3xl md:text-3xl text-green-300 mb-4 font-semibold">
                    History
                </h1>
                <p>
                    My wife, Heaven, and I got married in 2015, and our love
                    story has been going strong for over a decade now. We met in
                    college, and have been together ever since. Being married to
                    her has been one wild and wonderful adventure. She has
                    helped me grow, and discover so much about myself. I love my
                    wife, and am in awe of her every day. She has been the most
                    important person in my life. That is, until May 7, 2024.
                    <br />
                    <br />
                    After a gruelling 18 hours of labor, our daughter Kairi was
                    born. I realized my wife must be a super hero after seeing
                    everything that she went through. Her body went through so
                    much, and she did it all with a smile, and at the end of it,
                    we had our daughter. When I held her for the first time, I
                    knew that I wasn't living for me any more. Everything I do,
                    I do for her now. She is such a wonderful, joyful, fantastic
                    child. I love her with all of my being, and I am thrilled to
                    watch her journey through life. Here have been the
                    hightlights so far...
                </p>
            </div>
            <h1 className="text-3xl md:text-3xl text-green-300 mb-4 font-semibold">
                Timeline
            </h1>
            <div className="relative flex h-full">
                <div className="flex-1 mr-4">
                    <ul className="space-y-8">
                        {timelineData.map((event) => (
                            <li
                                key={event.id}
                                className="cursor-pointer flex items-center space-x-4 bg-gray-700 rounded-md p-4 hover:bg-gray-900 transition"
                                onClick={() => setSelectedEvent(event)}
                            >
                                <div className="flex-shrink-0">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold">
                                        {event.date}
                                    </div>
                                    <div className="text-lg">{event.title}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Side Panel */}
            {selectedEvent && (
                <div className="fixed inset-y-0 right-0 w-96 bg-gray-900 text-white shadow-xl flex flex-col p-8 z-10">
                    <button
                        className="self-end mb-4 text-gray-400 hover:text-white"
                        onClick={() => setSelectedEvent(null)}
                        aria-label="Close panel"
                    >
                        &times;
                    </button>
                    <img
                        src={selectedEvent.image}
                        alt={selectedEvent.title}
                        className="w-full h-100 object-cover rounded mb-6"
                    />
                    <div className="text-sm font-semibold mb-2">
                        {selectedEvent.date}
                    </div>
                    <div className="text-2xl font-bold mb-4">
                        {selectedEvent.title}
                    </div>
                    <div>{selectedEvent.details}</div>
                </div>
            )}
        </div>
    );
}

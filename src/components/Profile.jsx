import React, { useEffect, useRef } from 'react';

const Profile = () => {
    const scrollRef = useRef(null);

    // Auto-scroll functionality
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;
        const scrollStep = 400; // same as image width
        const interval = setInterval(() => {
            if (scrollContainer) {
                scrollAmount += scrollStep;
                if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollAmount = 0;
                }
                scrollContainer.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth',
                });
            }
        }, 3000); // scroll every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex justify-center items-center p-6">
            <div className="w-full max-w-7xl h-[500px] bg-white shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden">

                {/* Left Section */}
                <div className="w-full md:w-[40%] h-full flex flex-col justify-center items-start p-8 space-y-6">
                    <h1 className="text-4xl font-extrabold text-gray-900 leading-snug">
                        Show Our <span className="text-black">Latest Projects</span>
                    </h1>

                    <p className="text-gray-600 text-base leading-relaxed">
                        Explore our latest creations crafted with precision, creativity, and cutting-edge technologies. We blend design and performance to build seamless user experiences.
                    </p>

                    <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300">
                        Explore Projects
                    </button>

                    <p className="text-sm text-gray-500 pt-4">
                        <span className="font-medium">Developer:</span> Vaibhav Gautam
                    </p>
                </div>



                {/* Right Section - Auto Image Slider */}
                <div
                    ref={scrollRef}
                    className="w-full md:w-[60%] h-full overflow-x-auto whitespace-nowrap p-4 hide-scrollbar"
                >
                    <div className="flex space-x-4 h-full">
                        {
                        ['nature', 'code', 'tech', 'city', 'abstract'].map((keyword, index) => (
                            <img
                                key={index}
                                src={`https://source.unsplash.com/600x400/?${keyword}`}
                                alt={`Slide ${index + 1}`}
                                className="rounded-xl shadow-md h-full w-[400px] object-cover flex-shrink-0"
                            />
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

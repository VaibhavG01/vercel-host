import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios'

const Images = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getImages();
    }, [])

    const getImages = async () => {
        try {
            const response = await axios.get("https://picsum.photos/v2/list")
            const data = response.data
            setImages(data)
            console.log(data)
        } catch (error) {
            console.error("Erroe Fetching Images  ")
        }
    }
    return (
        <div className="images px-4 md:px-10 py-12 bg-gray-50 min-h-screen">

            {/* Heading */}
            <div className="heading text-center mb-12">
                <h2 className="font-bold text-4xl md:text-5xl text-gray-800">
                    Getting Images From APIs
                </h2>
                <p className="text-gray-500 mt-4 text-sm md:text-base">
                    Minimal, clean, responsive card layout like Apple’s style.
                </p>
            </div>
            {/* <button 
            onClick={getImages} 
            className='bg-gray-200 p-2 m-2 rounded-lg cursor-pointer'
            >
                Get Images
            </button> */}

            {/* Cards Grid */}
            <div className="cards-images grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                {
                    images.map((imgData, i) => {
                        return (
                            <>
                                <Cards key={i} imgData={imgData} />
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Images;

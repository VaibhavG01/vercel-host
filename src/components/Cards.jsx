import React from 'react';

const Cards = (prpos) => {

    return (
        <>
            <div className="w-[300px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                <div className="h-52 bg-gray-100">
                    <img
                        src={prpos.imgData.download_url}
                        alt={prpos.imgData.author}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-5">
                    <h2 className="text-lg font-semibold text-gray-800 text-center">{prpos.imgData.author}</h2>
                    <a href={prpos.imgData.url}>{prpos.imgData.url}</a>
                </div>
            </div>

        </>
    );
};

export default Cards;

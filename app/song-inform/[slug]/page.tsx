"use client"
import React from 'react';

const SongDetailPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
    return (
        <div className="mt-10 ml-10 p-8 w-full max-w-4xl rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 flex items-center">
            <div className="px-6 pb-4 flex-1">
                <p className="text-lime-950 text-base mb-4">{params ? `${params.slug} description` : ''}</p>
            </div>
            <div className="px-6 pb-4 flex-1">
                <div className="font-bold text-2xl mb-3 text-orange-800">{params.slug}</div>
                <br />
                <div className="flex space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        試聽
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        收藏
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SongDetailPage;

"use client"
import React from 'react';
import { useRouter } from 'next/router';

const SongDetailPage: React.FC< { params: { slug: string } } >= ({ params }) => {

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105">
            <div className="px-6 pb-4">
                <div className="font-bold text-2xl mb-3 text-orange-800">{params.slug}</div>
                <p className="text-lime-950 text-base mb-4">{params ? `${params} description` : ''}</p>
            </div>
            <div className="px-6 pb-4">
                <div
                    className="inline-block bg-blue-500 hover:bg-blue-900 text-gray-100 font-bold px-4 py-2 rounded-full transition duration-300"
                >
                </div>
            </div>
        </div>
    );
};

export default SongDetailPage;

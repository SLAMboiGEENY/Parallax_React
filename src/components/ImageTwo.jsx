import React from 'react'
import { Parallax } from 'react-parallax';
import Island1 from '../img/island1.jpg';


const ImageTwo = () => {
    return (
        <Parallax className="min-h-screen relative" blur={0} bgImage={Island1} strength={800} bgImageStyle={{minHeight: "100vh"}}>
            <div className="absolute flex justify-center items-center w-full min-h-screen">
                <span className="p-4 text-center text-2xl font-bold text-slate-100 uppercase">island trippy</span>
            </div>
        </Parallax>
    );
};

export default ImageTwo;
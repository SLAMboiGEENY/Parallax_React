import React from 'react'
import { Parallax } from 'react-parallax';
import One from '../img/island3.jpg'


const ImageOne = () => {
    return (
        <Parallax className="min-h-screen relative" blur={0} bgImage={One} strength={800} bgImageStyle={{minHeight: "100vh"}}>
            <div className="absolute flex justify-center items-center w-full min-h-screen">
                <span className="p-4 text-center text-2xl font-bold text-slate-100 uppercase">island trippy</span>
            </div>
        </Parallax>
    );
};

export default ImageOne;
import React, { useState } from 'react';
import bird from './svg/bird.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import cat from './svg/cat.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

//這裡利用JS物件特性
const svgMap = {
    bird,
    cow,
    dog,
    cat,
    gator,
    horse,
};
const AnimalShow = ({ type }) => {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        setClicks(clicks + 1);
    };
    return (
        <div onClick={handleClick} className="relative border-1 border-gray-200 p-[10px] rounded shadow-md m-[10px]">
            <img src={svgMap[type]} alt="animal" className="h-[200px] m-[20px] " />
            <img
                src={heart}
                alt="heart"
                style={{ width: 10 + 10 * clicks + 'px' }}
                className="absolute bottom-[10%] right-[10%]"
            />
        </div>
    );
};

export default AnimalShow;

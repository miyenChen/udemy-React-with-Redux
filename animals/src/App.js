import React, { useState } from 'react';
import AnimalShow from './AnimalShow';

const randomAnimal = () => {
    const arr = ['dog', 'cat', 'cow', 'bird', 'horse', 'gator'];
    return arr[Math.floor(Math.random() * arr.length)];
};
function App() {
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, randomAnimal()]);
    };
    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    return (
        <div className="flex flex-col items-center">
            <button className="bg-teal-200 p-[10px]  rounded border border-teal-500 w-[30%]" onClick={handleClick}>
                Add animal
            </button>
            <div className="flex flex-row flex-wrap justify-center">{renderAnimals}</div>
        </div>
    );
}

export default App;

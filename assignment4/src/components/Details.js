import React, { useState, useEffect } from "react";
import '../assets/css/animal.css';

export default function Details({animals}){
    const [currentAnimal, setCurrentAnimal] = useState();
    const [result, setResult] = useState("");

    useEffect(()=>{
        generateRandomAnimal();
    } , []);

    const generateRandomAnimal = () => {
        const randomIndex = Math.floor(Math.random()* animals.length);
        setCurrentAnimal(animals[randomIndex]);
        setResult("");
    };

    const handleAnimalClick = (animal) => {
        if(animal.name === currentAnimal.name){
            setResult("win");
        }else{
            setResult("lose");
        }
    };
    return(
        <div className="game-container">
            <h1 className="title">Animal Matching Game</h1>
          <div className="content">
            <div className="info-section">
                <div className="result">
                <h3>Result</h3>
                <p className={result.toLocaleLowerCase()}>{result}</p>
                
            </div>
            <div className="animal-name">
                <h3>Animal Name</h3>
                <p>{currentAnimal?.name}</p>
            </div>
          </div>

          <div className="game-section">
            <h3>Select the animal</h3>
            <div className="animal-grid">
                {animals.map((animal, index) => (
                <div key={index} className="animal-card" onClick={()=>handleAnimalClick(animal)}>
            <img src={animal.image} alt={animal.name}/>
            </div>
            ))}
            </div>
          </div>
            </div>
            <button className="reset-button" onClick={generateRandomAnimal}>Play again</button>
            
        </div>
        
    );
}
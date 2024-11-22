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
            setResult("You win");
        }else{
            setResult("Try again");
        }
    };
    return(
        <div className="game-container">
            <h1 className="title">Animal Matching Game</h1>
          <div className="leftDiv">
            <div className="info">
                <h3>result</h3>
                <p className={result.toLoweCaes()}>{result}</p>
                
            </div>
            <div className="animal">
                <h3>Animal Name</h3>
                <p>{currentAnimal?.name}</p>
            </div>
          </div>

          
        </div>
    );
}
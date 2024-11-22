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
        <div >
            <h1 >Animal Matching Game</h1>
          <div >
            <div >
                <div >
                <h3>Result</h3>
                <p className={result}>{result}</p>
                
            </div>
            <div >
                <h3>Animal Name</h3>
                <p>{currentAnimal?.name}</p>
            </div>
          </div>

          <div >
            <h3>Select the animal</h3>
            <div >
                {animals.map((animal, index) => 
                <div key={index} className="animal-card" onClick={()=>handleAnimalClick(animal)}>
            <img src={animal.image} alt={animal.name}/>
            </div>
            )}
            </div>
          </div>
            </div>
            
        </div>
        
    );
}
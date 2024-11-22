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
            <div>
            <h1 className='title'>Animal Matching Game</h1>
            </div>
            <table className="game-table">
                <thead>
                    <tr>
                        <th colspan='2'>Result</th>
                        <th>Animal Name</th>
                        <th colspan='4'>Select the Animal</th>
                    </tr>
                    
                    </thead>    
                    <tbody>
                        <tr>
                            <td colspan ="2" className="result-cell">
                                <p className={result.toLocaleLowerCase()}>{result || "Pending"}</p>

                            </td>
                            <td className="animal-name-cell">
                                <p>{currentAnimal?.name || "unknown"}</p>

                            </td>
                            <td colspan="4" className="animal-grid-cell">
                                <div className="animal-grid">
                                    {animals.map((animal, index) => (
                                        <div key={index} className="animal-card" onClick={()=> handleAnimalClick(animal)}>
                                            <img src={animal.image} alt={animal.name}/>
                                            </div> 
                                    ))}
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <button className="reset-button" onClick={generateRandomAnimal}>Play Again</button>
            
        </div>
        
    );
}
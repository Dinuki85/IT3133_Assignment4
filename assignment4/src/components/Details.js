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
                        
                    </tbody>
                </table>


            
        </div>
        
    );
}
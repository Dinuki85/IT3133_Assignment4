import React, { useState, useEffect } from "react";


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

    
    return(
        <div>
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <td>Animal Name</td>
                            <td>Action</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {animals.map((animal, index)=>(
                            <tr key={index}>
                                <td>{animal.name}</td>
                                <td><botton onClick={() => handleAnimalClick(animal)}>
                                    Select
                                     </botton>
                                     </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}
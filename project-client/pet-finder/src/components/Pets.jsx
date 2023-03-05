import React from 'react'
import { useEffect, useState } from 'react'
function Pets() {
    const [pets, setPets ] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9292/pets")
        .then(response => response.json())
        .then(data => setPets(data))
    })
  return (
    <div>
        {pets.map(pets =>(
            <div key={pets.id}>{pets.name} <br/>
            {pets.description} <br/>
            {pets.breed} <br/>
            {pets.status} <br/>
            {pets.age} <br/>
            {pets.image}
            </div>
        ))}
    </div>
  )
}

export default Pets

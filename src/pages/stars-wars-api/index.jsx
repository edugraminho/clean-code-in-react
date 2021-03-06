import React, { useEffect, useState } from 'react'

const StarsWarsApi = () => {
    const [character, setCharacter] = useState([])

    const getCharacter = () => {
        fetch("https://swapi.py4e.com/api/people/")
            .then((res) => res.json())
            .then((data) => {
                setCharacter([...character, ...data.results])
            })
    }

    useEffect(() => {
        getCharacter()
    }, [])

    return (
        <div>
            {character.map((res, index) => (
                <div key={index}>
                    <h2>{res.name}</h2>
                </div>
            ))}
        </div>

    )
}

export default StarsWarsApi
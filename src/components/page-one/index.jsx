import React, { useEffect, useState } from 'react'

const PageOne = () => {
    const [character, setCharacter] = useState([])

    const getCharacter = () => {
        fetch("https://rickandmortyapi.com/api/character")
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
                    <h2> {res.name}</h2>
                    <img src={res.image} alt="images" />
                </div>
            ))
            }
        </div >
    )
}

export default PageOne
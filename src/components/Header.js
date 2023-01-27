import { useState } from "react"

export function Header(){

    const [emotion, setEmotion] = useState('Happy')
    console.log('emotion', emotion)

    return (
        <>
            <h1>emotion is ${emotion}</h1>
            <button onClick={e => setEmotion('Hurry!')}></button>
        </>
    )
}
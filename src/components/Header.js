import { useEffect, useReducer, useState } from "react"
import { CustomHooks } from "./CustomHooks";
const i = 0;

export function Header(){

    const [emotion, setEmotion] = useState('Happy')
    const [emotion2, setEmotion2] = useState('Happy')
    
    console.log('component renders', i+1) // it will render whenever any state get changed
    useEffect(() => {
        console.log('emotion', emotion)

    }, [emotion] // []: empty Array means effects is not going to call again after 1st render, It is called `Dependency Array`
    )

    const [checkbox, setCheckbox] = useReducer((hello) => {
        console.log('_', hello)
        return !hello
    }, false)

    return (
        <>
            <h1>emotion is {emotion}</h1> {emotion2}
            <button onClick={e => setEmotion('Hurry!')}>hurry</button>
            <button onClick={e => setEmotion2('Bravo')}>Vigrous</button>
            <input type="checkbox" value={checkbox} onChange={setCheckbox}/>
            <label>{checkbox ? 'checked' : 'not checked'}</label>
            <CustomHooks />
        </>
    )
}
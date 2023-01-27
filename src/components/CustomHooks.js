import { useState } from "react";
import { APIRequest } from "./APIRequest";

function useCustomEffect(initialValue){
    const [value, setValue] = useState(initialValue);
    return [
        {value, onChange: (e) => {
        setValue(e.target.value)
       }},
       () => setValue(initialValue)
    ]
}

export function CustomHooks(props){
    const [textValue, setTextVaue] = useCustomEffect('')
    const [colorValue, setColorValue] = useCustomEffect('')

    const formSubmit = () => {
        alert(`text is ${textValue.value} and color value is ${colorValue.value}`)
        setTextVaue()
        setColorValue()
    }
    return (
        <>
        {/* React app reload on form submit, why? */}
        {/* onSubmit={formSubmit} */}
          <form >
            <input type="text" {...textValue} />
            <input type="color" {...colorValue} />
            <button type="button" onClick={formSubmit
            }>submit</button>
            <APIRequest />
          </form>
        </>
    )
}
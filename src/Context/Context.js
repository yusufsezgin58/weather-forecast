import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [temp, setTemp] = useState()
    const [city, setCity] = useState("")
    const [city_name, setCity_name] = useState("")
    const [country, setCountry] = useState("")
    const [condition, setCondition] = useState("")
    const [feels_like, setFeels_like] = useState("")
    const [update, setUpdate] = useState("")
    const [source, setSource] = useState("")

    const data = {
        temp, setTemp,
        city, setCity,
        city_name, setCity_name,
        country, setCountry,
        condition, setCondition,
        feels_like, setFeels_like,
        update, setUpdate,
        source, setSource
    }

    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;
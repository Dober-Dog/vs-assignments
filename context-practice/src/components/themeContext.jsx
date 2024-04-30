import React from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){
    const [theme, setTheme] = React.useState("light")

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{
            theme: theme,
            toggleTheme: toggleTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export {ThemeContext, ThemeContextProvider}
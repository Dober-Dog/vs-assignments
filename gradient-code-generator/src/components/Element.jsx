import React from "react"

export default function Element(){
    const [styles, setStyles] = React.useState({
        color1: "#A020F0",
        color2: "#00FF00",
        deg: 50
    })

    const style = {
        background: `linear-gradient(${styles.deg}deg, ${styles.color1} , ${styles.color2})`
    }

    function handleChange(event){
        const {name, value} = event.target
        setStyles(prevStyle => ({
            ...prevStyle,
            [name]: value
        }))
    }


    return (
        <div className="main">
            <div className="display">
                <div className="color-box" style={style}></div>
                <textarea className="code-info" readOnly 
                value={
                `background-color: linear-gradient(${styles.deg}deg, ${styles.color1} , ${styles.color2}); 
-moz-background: linear-gradient(${styles.deg}deg, ${styles.color1} , ${styles.color2}); 
-webkit: linear-gradient(${styles.deg}deg, ${styles.color1} , ${styles.color2})`}></textarea>
            </div>
            <div className="options">
                <h2>Options</h2>
                <div className="inputs">
                    <label htmlFor="color1">Color 1:</label>
                    <input name="color1" className="color-input" onChange={handleChange} value={styles.color1}></input>
                    <input name="color1" type="color" className="color-sample" onChange={handleChange} value={styles.color1}></input>
                </div>
                <div className="inputs">
                    <label htmlFor="color2">Color 2:</label>
                    <input name="color2" className="color-input" onChange={handleChange} value={styles.color2}></input>
                    <input name="color2" type="color" className="color-sample" onChange={handleChange} value={styles.color2}></input>
                </div>
                <label htmlFor="deg">Deg:</label>
                <input name="deg" type="number" className="deg-input" onChange={handleChange} value={styles.deg}></input>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"

export default function Navbar (){
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Pictures">Pictures</Link>
        </div>
    )
}
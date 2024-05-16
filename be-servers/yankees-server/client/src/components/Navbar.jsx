import { Link } from "react-router-dom"

export default function Navbar (){
    return (
        <div className="nav">
            <Link to="/">Roster</Link>
            <Link to="/history">History</Link>
            <Link to="/staff">General Staff</Link>
        </div>
    )
}
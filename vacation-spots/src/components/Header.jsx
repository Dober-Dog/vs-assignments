import Navbar from "./Navbar"

export default function Header(){
    return(
        <div className="header">
            <Navbar />
            <div className="title-box">
                <h1>Infinite Destinations</h1>
                <h3>Connecting The Word</h3>
            </div>
        </div>
    )
}
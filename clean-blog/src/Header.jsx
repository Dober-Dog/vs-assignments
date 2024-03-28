import Navbar from "./Navbar"

export default function Header(){
    return (
        <div className="top">
            <Navbar />
            <div className="headBox">
                <h1>Clean Blog</h1>
                <p>A Blog Theme by Start Bootstrap</p>
            </div>
        </div>
    )
}
import Steinbrenner from "./Stienbrenner.jpg"
import Boone from "./Aaron-Boone-e1686173378511.jpg"

export default function Staff(){
    return (
        <div className="staff">
            <img src={Boone}/>
            <h2>General Manager: Aaron Boone</h2>
            <img src={Steinbrenner}/>
            <h2>Owner: Hal Steinbrenner</h2>
        </div>
    )
}
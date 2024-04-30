import RadarTall from "./20240227_161110.jpg"
import RadarLong from "./20240410_101358.jpg"

export default function About (){
    return (
        <div className="about">
            <h1>A Little About Me</h1>
            <img src={RadarLong} alt="Radar Long" className="about-img-1" />
            <div className="about-1">
                <h2>This is my dog Radar!</h2>
                <span>He's a really special dog to me and my wife. He's a White Swiss Shepherd, a very special working breed. If you want to learn more about White Swiss Shepherds, click </span>
                <a href="https://whiteswissshepherd.org/breed_education/breed_history/">here</a>
            </div>
            <span className="about-2">He's currently training to be a service dog to help my wife! He's only been in training for about 6 months, but he's such a good boy!</span>
            <img src={RadarTall} alt="Radar Tall" className="about-img-2" />
        </div>
    )
}
import "./about.css"
import Award from "../../images/certificate.png"
import Mine from "../../images/me1.png"
const About=()=>{
    return (
        <div className="a"> 
        <div className="a-left">
            <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Mine} alt="" className="a-img" />
                </div>


            
        </div>
        <div className="a-right">
        <h1 className="a-title"> About me</h1>
        <p className="a-sub"> Know more about me!</p>
        <p className="a-desc">
        From being an introvert all my school life to opening up to the great opportunities I got in college, I feel delighted to be a part of The HR Club of VIT - ResouceX and The computer society - IEEE. Designing has always been my cup of tea, this is why I have started working on my skills and learning UI/UX designing. I believe we all should do what we love because we will do that with all our heart.
        </p>
        <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-text">
               <h4 className="a-award-title">Accreditations recieved </h4>
               
                   <p className="a-award-desc">
                         <ul>
                           <li>Foundations of User Experience (UX) Design-by Google</li>


                           </ul>
                           
                   </p>
               
            </div>
        </div>
            </div>
            </div>
    )
}
export default About
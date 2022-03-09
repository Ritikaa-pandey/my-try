import "./contact.css"
import Phone from "../../images/phone.png"
import Email from "../../images/email1.png"
import Address from "../../images/new.png"
import { useRef, useState, useContext} from "react"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";
const Contact = () =>
{
    const formRef= useRef();
    const [done, setDone]=useState(false)
    
        const theme=useContext(ThemeContext)
        const darkMode =theme.state.darkMode;

        
    
    //const[done, setDone]=useState(false)
    const handleSubmit=(e)=> //to not refresh the page
    {
        e.preventDefault();
        emailjs.sendForm('service_btu02gc', 'template_lwtwy53', formRef.current, 'user_JBarrmG0XJ6UCY9j7EdGK')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    return(
<div className="c">
                <div className="c-bg"></div>
    <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">Let's discuss your ideas! </h1>
            <div className="c-info">
                <div className="c-item-info">
                    <img src={Phone} alt="" className="c-icon" />
                    +91 9871059616
                </div>
                
            
             <div className="c-item-info">
                    <img src={Email} alt="" className="c-icon" />
                   ritikaapandeyy10@gmail.com
                </div>
                
                <div className="c-item-info">
                    <img src={Address} alt="" className="c-icon" />
                    Delhi, India
                </div>

                
                </div>
            </div>
            
            
        

        <div className="c-right">
            <p className="c-desc">
            <b>Contact</b> me here! Have a good day!</p>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name"/>
                <input style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject"/>
                <input  style={{backgroundColor: darkMode && "#333" }} type="text" placeholder="Email-id" name="user_Email"/>
                <textarea style={{backgroundColor: darkMode && "#333" }} rows="5" placeholder="enter your message" name="message" />
                <button> Submit </button>
                {done && "thank you!"}
            </form> 
            </div>
    </div>
    
    </div>
    

        
    )
}

export default Contact

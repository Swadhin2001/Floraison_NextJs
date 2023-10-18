import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

function Form() {
    const form = useRef();
    const [username, setUserName] = useState ("");
    const [email, setEmail] = useState ("");
    const [phn, setPhn] = useState ("");
    const [about, setAbout] = useState ("");

    const submitbtn =()=>{
        setAbout("");
        setEmail("");
        setUserName("");
        setPhn("");
        if (username != "" && email != "" && about != "" && phn != ""){
            alert ("Form Submitted Successfully!");
        }
        else{
            alert ("Please fill the form");
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lx93ifh', 'template_yllq8nq', form.current, 'Y3UVXcCoXI8VTQpSm')
          .then((result) => {
              console.log(result.text);
              console.log("success");
            }, (error) => {
                console.log(error.text);
                console.log("not success");
          });
      };
    return (
        <div>
            <form>
                <div className="mb-3">
                    <div className='form-p form-focus shadow-none blue-card-p'>
                        <p>
                            “Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skillful execution; it represents the wise choice of many alternatives”
                        </p>
                        <p>
                            At Floraison, the most important thing we can do today is sit down and talk. Talk about your past experiences, the current situations, trends in your industry, what is working well for you and what is not, your goals for this year and the future. We will expand upon that discussion and help you identify your options, weigh your choices, help you make rational decisions and also put your plans into action.
                        </p>
                        <p>
                            As professionals, we know that talking and strategically planning with you is how we can best advice and serve you. Working with you as your key strategic consultant, we can help you respond to changing situations and environments and adapt your plans and strategies to meet your changing needs and goals.
                        </p>
                        <p>
                            That’s why we say the most important thing we can do today is sit down and talk. Today and regularly.
                        </p>
                        <p>
                            Give us a call today. <br />
                            You talk. We’ll listen. <br />
                            Then we can get to work! <br />
                        </p>
                        Please fill the below form for your assistance
                    </div>
                </div>
                <div className="mb-1">
                    <input value = {username} id="TextInput" className="form-control rounded-0 form-focus shadow-none" placeholder="Name*" style={{"backgroundColor" : "#F9F9F9", "border": '0' , "color": "#2B2B2B"}}  name = "form-name"  onChange={(e)=> setUserName(e.target.value)} required/>
                </div>
                <div className="mb-1">
                    <input type="email" id="TextInput" className="form-control rounded-0 form-focus shadow-none" placeholder="Business Email*" style={{"backgroundColor" : "#F9F9F9", "border": '0' , "color": "#2B2B2B"}} required name = "form-email" value = {email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="mb-1">
                    <input type="number" id="TextInput" value = {phn} className="form-control rounded-0 form-focus shadow-none" placeholder="Phone Number*" style={{"backgroundColor" : "#F9F9F9", "border": '0' , "color": "#2B2B2B"}} required name = "form-phonenumber"  onChange={(e)=> setPhn(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control form-focus shadow-none" placeholder="How can he help?*" id="floatingTextarea" style={{"backgroundColor" : "#F9F9F9", "border": '0', "color": "#2B2B2B"}} name = "form-help" value = {about} onChange={(e)=> setAbout(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                    <p className='form-p form-focus shadow-none blue-card-p'>We care about your privacy. By submitting this form, you will receive the requested information, as well as occasional related business insights from PandR. You can unsubscribe at any time. For details, view our
                        <a href="./privacy-policy.html" className='text-decoration-none'> Privacy Policy</a>.</p>
                </div>
                <input type="submit" className="btn btn-dark rounded-0" value="Get in Touch" onClick={submitbtn}/>
            </form>
        </div>
    )
}

export default Form

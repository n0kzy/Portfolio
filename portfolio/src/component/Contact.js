import React, {useRef} from "react";
import "./Contact.css"
import emailjs from '@emailjs/browser';
import CV from"../assets/CV-1.pdf"
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_5646qsj', 'template_hfg6kkm', form.current, {
                publicKey: 'VwnB89cfTPVnLm6Xy',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return(
        <section className="ContactContainer">
            <div className="TextContainer">
                <form ref={form} onSubmit={sendEmail} className="ContactForm">
                    <a className="CV" href={CV} name={CV} download="CV.pdf">CV</a>
                    <h1 className="ContactTitle">You can contact me here</h1>
                    <input type="text" className="name" placeholder="Your Name" name="your_name" required={true}/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email" required={true}/>
                    <textarea className="msg" placeholder='Your Message' rows="5" name="message"
                              required={true}></textarea>
                    <button type="submit" className="Submit" value="Send">Submit</button>
                </form>
            </div>
        </section>
    )
}
export default Contact
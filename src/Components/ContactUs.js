import NavBar from "./NavBar";
import '../Styling/contactus.css'
import { useState } from "react";

function ContactUs() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")

    const sendMessage = () => {
        window.alert("We have successfuly received the message: \n" + message + "\nfrom: " + email )
    }

    return (
      <>
      <NavBar />
        <div className="contain">
            <div className="header-title">
                <h1>Got some inquiries?</h1>
            </div>
            <div className="contact-us-form">
                <form>
                    <section className="initials">
                        <label>
                            First Name <br />
                            <input type="text" onChange={(e)=> setFirstName(e.target.value)}></input>
                        </label>
                        <label>Last Name <br />
                            <input type="text"  onChange={(e)=> setLastName(e.target.value)}></input>
                        </label>
                    </section>
                    <section className="socials">
                        <label>Email <br />
                            <input type="email"  onChange={(e)=> setEmail(e.target.value)}></input>
                        </label>
                        <label>
                            Phone Number <br />
                            <input type="tel"  onChange={(e)=> setNumber(e.target.value)}></input>
                        </label>
                    </section>
                    <section className="message">
                        <label>
                            Message <br />
                            <input type="text" onChange={(e)=> setMessage(e.target.value)}></input>
                        </label>
                    </section>
                    <button type="submit" onClick={sendMessage}>Submit</button>
                </form>
            </div>
        </div>
      </>
      );
  }
  
  export default ContactUs;
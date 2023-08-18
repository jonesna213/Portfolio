import styles from "./css/Contact.module.css";
import { useState } from "react";
import emailjs from 'emailjs-com';

const ContactPage = () => {
    const [successfulSubmit, setSuccessfulSubmit] = useState(false);
    const [sendingMessage, setSendingMessage] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const inputChangeHandler = (type, value) => {
        if (type === "name") {
            setName(value);
            setNameError(false);
            if (value.trim().length === 0) {
                setNameError(true);
            }
        } else if (type === "email") {
            setEmail(value);
            setEmailError(false);
            if (!value.trim().includes("@")) {
                setEmailError(true);
            }
        } else if (type === "message") {
            setMessage(value);
            setMessageError(false);
            if (value.trim().length === 0) {
                setMessageError(true);
            }
        }
    }

    const submitHandler = async event => {
        event.preventDefault();
        setSendingMessage(true);

        emailjs.sendForm('service_uxb263p', 'template_x8vil6e', event.target, "9wNoL-zfsLCxBLxkh")
            .then((response) => {
                console.log('Email sent successfully:', response.text);
                setName('');
                setEmail('');
                setMessage('');
                setSuccessfulSubmit(true);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setSuccessfulSubmit(false);
            });

        setSendingMessage(false);
    }

    return (
        <div className={styles.container}>
            <h1 className="fw-bold text-center">Contact Me</h1>
            <div className={`mx-auto my-4 ${styles.customHr}`}></div>
            <p className={`text-center w-50 mx-auto ${styles.text}`}>If you would like to reach out to me, feel free to submit the form below and I will get back to you as soon as possible</p>

            {successfulSubmit && <p className="text-success mt-5 text-center fw-bold">Message Sent!</p>}
            {sendingMessage && <p className="text-secondary mt-5 text-center fw-bold">Sending...</p>}

            <form onSubmit={submitHandler} className={`w-50 mx-auto border rounded p-4 px-5 my-5 shadow ${styles.form}`}>
                <div className="my-3">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" className="form-control bg-light" id="name" name="name" placeholder="Enter your name" value={name} onChange={event => { inputChangeHandler("name", event.target.value) }} required />
                    {nameError && <p className="text-danger">Please enter your name</p>}
                </div>
                <div className="my-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" className="form-control bg-light" id="email" name="email" placeholder="Enter your email" value={email} onChange={event => { inputChangeHandler("email", event.target.value) }} required />
                    {emailError && <p className="text-danger">Please enter a valid email</p>}
                </div>
                <div className="my-3">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-control bg-light" placeholder="Enter your message" name="message" rows="5" value={message} onChange={event => { inputChangeHandler("message", event.target.value) }} required />
                    {messageError && <p className="text-danger">Please enter a message</p>}
                </div>
                <button type="submit" className="btn btn-primary px-5 py-2 my-3">Submit</button>
            </form>
        </div>
    );
}

export default ContactPage;
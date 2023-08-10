import styles from "./css/Contact.module.css";

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <h1 className="fw-bold text-center">Contact Me</h1>
            <div className={`mx-auto my-4 ${styles.customHr}`}></div>
            <p className={`text-center w-50 mx-auto ${styles.text}`}>If you would like to reach out to me, feel free to submit the form below and I will get back to you as soon as possible</p>

            <form>
                
            </form>
        </div>
    );
}

export default ContactPage;
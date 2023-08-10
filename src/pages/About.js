import styles from "./css/About.module.css";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <h1 className="fw-bold text-center">About Me</h1>
            <div className={`mx-auto my-4 ${styles.customHr}`}></div>
            <p className="text-center w-50 mx-auto">Here is where you will learn more information about me, what I do, my current skills, 
                    and some of my hobbies outside the realm of software</p>
            
            <div className="d-flex">
                
            </div>

        </div>
    );
}

export default AboutPage;
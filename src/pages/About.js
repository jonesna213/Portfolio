import { NavLink } from "react-router-dom";
import styles from "./css/About.module.css";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <h1 className="fw-bold text-center">About Me</h1>
            <div className={`mx-auto my-4 ${styles.customHr}`}></div>
            <p className="text-center w-50 mx-auto">Here is where you will learn more information about me, what I do, my current skills, and some of my hobbies outside the realm of software</p>
            
            <div className="row justify-content-around my-5">
                <div className="col-10 col-md-4">
                    <h3>Who Am I?</h3>
                    <p>I am a Full Stack Software Developer on an exciting journey of learning and innovation. </p>
                    <p>I am actively seeking job opportunities where I can make meaningful contributions, continue my professional growth, and embark on a continuous learning journey. If you have a role that aligns with my skillset, please feel free to contact me without hesitation. I am eager to explore collaborations that allow me to thrive and bring value to the team.</p>
                    <NavLink className={styles.contactButton} to="/contact">Contact</NavLink>
                </div>
                <div className="col-10 col-md-4">
                    <h3>My Skills</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla, elit sit amet cursus gravida, odio libero viverra mauris, vel lobortis justo elit eu massa. Fusce at neque dapibus, posuere erat eu, dapibus sapien. Aenean sed arcu eget justo luctus malesuada. Integer luctus massa et metus bibendum, a cursus tortor sollicitudin.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
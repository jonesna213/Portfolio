import { NavLink } from "react-router-dom";
import styles from "./css/About.module.css";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <h1 className="fw-bold text-center">About Me</h1>
            <div className={`mx-auto my-4 ${styles.customHr}`}></div>
            <p className={`text-center w-50 mx-auto ${styles.text}`}>Here is where you will learn more information about me, what I do, my current skills, and some of my hobbies outside the realm of software</p>

            <div className="row justify-content-around my-5">
                <div className="col-10 col-md-4">
                    <h3>Who Am I?</h3>
                    <p className={styles.text}>I am a Full Stack Software Developer on an exciting journey of learning and innovation. If you would like to check out some of my work, you can check it out in the <NavLink className="text-decoration-none" to="/projects">projects</NavLink> section.</p>
                    <p className={styles.text}>Outside of my software expertise, I also have a strong passion for the world of cars and motorcycles. My fascination with automobiles ignited during high school, where I dove into the intricate realm of car mechanics and customization. Not only was the work put in satisfying, but being able to actually drive something you've put countless hours into has to be the best feeling there is. Although my relationship with motorcycles is relatively recent, the exhilaration they bring has quickly captured my interest. In addition to riding, I've found great satisfaction in learning the art of motorcycle maintenance and enhancement.</p>
                    <p className={styles.text}>I am actively seeking job opportunities where I can make meaningful contributions, continue my professional growth, and embark on a continuous learning journey. If you have a role that aligns with my skillset, please feel free to contact me without hesitation. I am eager to explore collaborations that allow me to thrive and bring value to the team.</p>
                    <NavLink className={styles.contactButton} to="/contact">Contact</NavLink>
                </div>
                <div className="col-10 col-md-4 my-5 my-md-0">
                    <h3>My Skills</h3>
                    <div className="my-4">
                        <p>Languages</p>
                        <div className="d-flex flex-wrap">
                            <p className={styles.skillBox}>HTML</p>
                            <p className={styles.skillBox}>CSS</p>
                            <p className={styles.skillBox}>JavaScript</p>
                            <p className={styles.skillBox}>Java</p>
                            <p className={styles.skillBox}>SQL</p>
                            <p className={styles.skillBox}>PHP</p>
                        </div>
                    </div>
                    <div className="my-4">
                        <p>Frameworks</p>
                        <div className="d-flex flex-wrap">
                            <p className={styles.skillBox}>React</p>
                            <p className={styles.skillBox}>Bootstrap</p>
                        </div>
                    </div>
                    <div className="my-4">
                        <p>Technologies</p>
                        <div className="d-flex flex-wrap">
                            <p className={styles.skillBox}>MySQL</p>
                            <p className={styles.skillBox}>PostgreSQL</p>
                            <p className={styles.skillBox}>GitHub</p>
                            <p className={styles.skillBox}>AWS</p>
                            <p className={styles.skillBox}>Linux</p>
                            <p className={styles.skillBox}>REST API</p>
                        </div>
                    </div>
                    <div className="my-4">
                        <p>Soft Skills</p>
                        <div className="d-flex flex-wrap">
                            <p className={styles.skillBox}>Time Management</p>
                            <p className={styles.skillBox}>Customer Service</p>
                            <p className={styles.skillBox}>Problem Solving</p>
                            <p className={styles.skillBox}>Critical Thinking</p>
                            <p className={styles.skillBox}>Communication</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
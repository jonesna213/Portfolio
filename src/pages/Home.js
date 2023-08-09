import { NavLink } from "react-router-dom";
import styles from "./css/Home.module.css";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1>Hey, I'm Navy Jones</h1>
            <p>A Full Stack Software Developer with a passion for learning and improvement</p>
            <NavLink to="/projects" className={styles.projectsButton}>Projects</NavLink>
        </div>
    );
}

export default HomePage;
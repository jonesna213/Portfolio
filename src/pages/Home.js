import { NavLink } from "react-router-dom";
import styles from "./css/Home.module.css";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1>Hey, I'm Navy Jones</h1>
            <p>A Full Stack Software Developer on an exciting journey of learning and innovation.<br /> 
                Crafting digital solutions with an insatiable curiosity and a commitment to continuous improvement</p>
            <NavLink to="/projects" className={styles.projectsButton}>Projects</NavLink>
        </div>
    );
}

export default HomePage;
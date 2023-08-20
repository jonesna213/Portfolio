import styles from "./css/Contact.module.css";

const ProjectsPage = () => {
    return (
        <div className={styles.container}>
            <h1 className="fw-bold text-center">My Projects</h1>
            <div className={`mx-auto my-4 ${styles.customHr}`}></div>
            <p className={`text-center w-50 mx-auto ${styles.text}`}>Here are some of my favorite projects. Feel free to check out the code on github as well!</p>

            <div>
                <img src="" alt="" />
                <p></p>
            </div>
            <div>
                <img src="" alt="" />
                <p></p>
            </div>
        </div>
    );
}

export default ProjectsPage;
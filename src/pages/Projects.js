import styles from "./css/Contact.module.css";

const ProjectsPage = () => {
    return (
        <div className={styles.container}>
            <h1 className="fw-bold text-center">Contact Me</h1>
            <div className={`mx-auto my-4 ${styles.customHr}`}></div>
        </div>
    );
}

export default ProjectsPage;
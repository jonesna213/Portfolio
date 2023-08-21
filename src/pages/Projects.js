import styles from "./css/Projects.module.css";
import lookupPic from "../assets/PartLookupPic.jpg";
import portfolioPic from "../assets/PortfolioPic.jpg"
import Github from "../components/Github";

const ProjectsPage = () => {
    return (
        <div className={styles.container}>
            <h1 className="fw-bold text-center">My Projects</h1>
            <div className={`mx-auto my-4 ${styles.customHr}`}></div>
            <p className={`text-center w-50 mx-auto ${styles.text}`}>Here are some of my favorite projects. Feel free to check out the code on github!</p>
            <section className="mt-5 mx-3">
                <div className="row my-5">
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-5">
                        <img className="img-fluid img-thumbnail" src={lookupPic} alt="Homepage of Auto part lookup website" />
                    </div>
                    <div className={`col-12 col-md-5 my-3 ${styles.text}`}>
                        <p>For this project my goal was to create a website which allowed users to compare parts and prices from multiple different auto part shops. In addition to being able to compare the parts the user is also able to save parts to come back to later.</p>
                        <p>I created this application with Java using Maven for dependency management and Hibernate for the ORM framework. For getting the part data, I used JSoup to scrape auto part websites for parts.</p>
                        <Github link="https://github.com/jonesna213/IndividualProject" fill="black" />
                    </div>

                    <div className="col-md-1"></div>
                </div>
                <div className={`mx-auto my-5 ${styles.biggerCustomHr}`}></div>
                <div className="row my-5">
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-5">
                        <img className="img-fluid img-thumbnail" src={portfolioPic} alt="Homepage of Portfolio" />
                    </div>
                    <div className={`col-12 col-md-5 my-3 ${styles.text}`}>
                        <p>Does this project look familiar? It should, it's what you're looking at right now. This project is my portfolio website. My goal for this was to be able to show my skills as a developer, showcase some of my projects, as well as give a little insight on what I do outside the realm of tech.</p>
                        <p>I created this website using React and bootstrap for styling/layout. I also incorporated EmailJS for handling the contact form information and emailing me the messages. For my host I chose to use AWS Amplify, it seemed like the best choice for my case since I wanted to use my custom domain and their isn't any back-end code that would need to run on a server.</p>
                        <Github link="https://github.com/jonesna213/Portfolio" fill="black" />
                    </div>

                    <div className="col-md-1"></div>
                </div>
            </section>
        </div>
    );
}

export default ProjectsPage;
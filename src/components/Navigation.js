import { NavLink } from "react-router-dom";
import image from "../assets/pic.jpg";
import styles from "./Navigation.module.css";
import { useState } from "react";

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className={`navbar navbar-expand-md navbar-light bg-light ${styles.navbar}`}>
            <div className="container">
                <NavLink className="navbar-brand" href="/">
                    <img src={image} alt="Navy Jones" className={`rounded-circle ${styles.pic}`} />
                    <span className="mx-3 fw-bold">Navy Jones</span>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNav}
                    aria-expanded={isNavOpen}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => isActive ? styles.links + " " + styles.active : styles.links} end>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) => isActive ? styles.links + " " + styles.active : styles.links}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className={({ isActive }) => isActive ? styles.links + " " + styles.active : styles.links}>Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.links + " " + styles.active : styles.links}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
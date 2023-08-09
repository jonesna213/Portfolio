import { NavLink } from "react-router-dom";
import image from "../assets/pic.jpg";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className="d-flex align-items-center justify-content-between mt-3 mx-5">
            <div className="d-flex align-items-baseline">
                <img src={image} alt="Navy Jones" className={`rounded-circle ${styles.pic}`} />
                <h2 className="mx-3">Navy Jones</h2>
            </div>
            <ul className="nav nav-underline">
                <li className="nav-item">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const RootLayout = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default RootLayout;
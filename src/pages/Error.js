import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ErrorPage = () => {
    return (
        <>
            <Navigation />
            <main className="text-center text-danger my-5">
                <h1>An error occurred!</h1>
                <p>Could not find this page!</p>
            </main>
            <Footer />
        </>
    );
}

export default ErrorPage;
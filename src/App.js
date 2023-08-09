import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/projects", element: <ProjectsPage /> },
            { path: "/contact", element: <ContactPage />}
        ]
    }
]);


const App = () => {
    return <RouterProvider router={router} />;
}

export default App;

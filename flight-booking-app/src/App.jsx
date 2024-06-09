import Heading from "./components/Heading";
import HeroCarousel from "./components/HeroCarousel";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Flights from "./pages/FlightsPage";
import TouristInfor from "./pages/TouristInformationPage";
import AboutUs from "./pages/AboutUsPage";
import Login from "./pages/LoginPage";
import Register from "./pages/SignUpPage";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import PassengerDetailPage from "./pages/PassengerDetailPage";
import FLightDetail from "./components/flightComponents/FlightDetail";

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/flights",
            element: <Flights />,
        },
        {
            path: "/tourist_information",
            element: <TouristInfor />,
        },
        {
            path: "/aboutUs",
            element: <AboutUs />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signUp",
            element: <Register />,
        },
        {
            path: "/passengerDetail",
            element: <PassengerDetailPage />,
        },
        {
            path: "/flightDetail/:id",
            element: <FLightDetail />,
        },
    ]);

    return (
        <div>
            <Heading />
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
}

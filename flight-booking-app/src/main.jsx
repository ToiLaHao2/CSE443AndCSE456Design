import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PassengerProvider from "./contexts/PassengerContext.jsx";
import FlightProvider from "./contexts/FlightContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <PassengerProvider>
        <FlightProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </FlightProvider>
    </PassengerProvider>
);

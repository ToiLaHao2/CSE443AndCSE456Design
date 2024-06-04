import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PassengerProvider from "./contexts/PassengerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <PassengerProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </PassengerProvider>
);

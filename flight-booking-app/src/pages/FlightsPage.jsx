import { useState } from "react";
import FindOneWayFlightForm from "../components/bookingComponents/FindOneWayFlightForm";
import FindRoundTripFlightForm from "../components/bookingComponents/FindRoundTripFlightForm";

const Flights = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="text-center relative pt-10">
            <h1 className="font-bold text-2xl">FIND YOUR FLIGHT</h1>
            <nav className="flex pl-40">
                <button
                    className={`mr-10 pl-3 pr-3 rounded-full shadow-lg ${
                        activeTab === "tab1"
                            ? "active shadow-blue-500/50 bg-blue-300"
                            : ""
                    }`}
                    onClick={() => {
                        openTab("tab1");
                    }}
                >
                    One-way Flight
                </button>
                <button
                    className={`mr-10 pl-3 pr-3 rounded-full shadow-lg ${
                        activeTab === "tab2"
                            ? "active shadow-blue-500/50 bg-blue-300"
                            : ""
                    }`}
                    onClick={() => {
                        openTab("tab2");
                    }}
                >
                    Round trip Flight
                </button>
            </nav>
            <div>
                <div
                    id="tab1"
                    className={`tab-content ${
                        activeTab === "tab1" ? "" : "hidden"
                    }`}
                >
                    <FindOneWayFlightForm />
                </div>
                <div
                    id="tab2"
                    className={`tab-content ${
                        activeTab === "tab2" ? "" : "hidden"
                    }`}
                >
                    <FindRoundTripFlightForm />
                </div>
            </div>
            <div className="h-screen"></div>
        </div>
    );
};

export default Flights;

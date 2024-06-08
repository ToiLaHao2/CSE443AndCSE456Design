import { useEffect, useState } from "react";
import FindOneWayFlightForm from "../components/bookingComponents/FindOneWayFlightForm";
import FindRoundTripFlightForm from "../components/bookingComponents/FindRoundTripFlightForm";
import SmallFlightInformation from "../components/flightComponents/SmallFlightInformation";
import { middleWareWithPOST } from "../api/ApiService";

const Flights = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        middleWareWithPOST
            .get("/flight/flights")
            .then((res) => {
                console.log(res);
                setFlights(res.data.object);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="text-center relative pt-10 h-screen">
            <h1 className="font-bold text-2xl">FIND YOUR FLIGHT</h1>
            <nav className="flex pl-40">
                <button
                    className={`p-2 mr-10 pl-3 pr-3 rounded-full shadow-lg ${
                        activeTab === "tab1"
                            ? "active shadow-blue-500/50 bg-blue-300 text-white"
                            : ""
                    }`}
                    onClick={() => {
                        openTab("tab1");
                    }}
                >
                    One-way Flight
                </button>
                <button
                    className={`p-2 mr-10 pl-3 pr-3 rounded-full shadow-lg ${
                        activeTab === "tab2"
                            ? "active shadow-blue-500/50 bg-blue-300 text-white"
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
                    <FindOneWayFlightForm
                        active={activeTab === "tab1" ? true : false}
                    />
                </div>
                <div
                    id="tab2"
                    className={`tab-content ${
                        activeTab === "tab2" ? "" : "hidden"
                    }`}
                >
                    <FindRoundTripFlightForm
                        active={activeTab === "tab1" ? true : false}
                    />
                </div>
            </div>
            <div className="h-screen mt-5 p-5">
                {flights &&
                    flights.length > 0 &&
                    flights.map((flight) => (
                        <SmallFlightInformation flight={flight} />
                    ))}
            </div>
        </div>
    );
};

export default Flights;

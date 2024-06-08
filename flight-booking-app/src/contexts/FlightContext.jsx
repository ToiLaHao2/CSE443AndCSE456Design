import { Children, createContext, useState } from "react";

export const FlightContext = createContext();

const FlightProvider = ({ children }) => {
    const [departureAirportId, setDepartureAirportId] = useState("");
    const [arrivalAirportId, setArrivalAirportId] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [arrivalDate, setArrivalDate] = useState("");

    return (
        <FlightContext.Provider
            value={{
                departureAirportId,
                arrivalAirportId,
                departureDate,
                arrivalDate,
                setDepartureAirportId,
                setArrivalAirportId,
                setDepartureDate,
                setArrivalDate,
            }}
        >
            {children}
        </FlightContext.Provider>
    );
};

export default FlightProvider;

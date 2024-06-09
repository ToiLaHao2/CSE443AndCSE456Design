import { useContext, useEffect, useState } from "react";
import ArrivalAirport from "./ArrivalAirport";
import DepartureAirport from "./DepartureAirport";
import TypeDate from "./TypeDate";
import { FlightContext } from "../../contexts/FlightContext";
import { middleWareWithPOST } from "../../api/ApiService";
import SmallFlightInformation from "../flightComponents/SmallFlightInformation";

const FindFlightForm = (props) => {
    const { departureAirportId, arrivalAirportId, departureDate } =
        useContext(FlightContext);

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        console.log(departureAirportId);
        console.log(arrivalAirportId);
        console.log(departureDate);
        const formData = new FormData();
        formData.append("departureAirportId", departureAirportId);
        formData.append("arrivalAirportId", arrivalAirportId);
        formData.append("departureDate", departureDate);

        middleWareWithPOST
            .post("/flight/getOneWayFlights", formData)
            .then((res) => (console.log(res), setFlights(res.data.object)))
            .catch((err) => console.log(err));
    }, [departureAirportId, arrivalAirportId, departureDate]);

    return (
        <div>
            <form className="h-[200px] w-10/12 text-left lg:h-[70px] mt-10 pl-40 mb-5">
                <div className="flex flex-col w-full h-full lg:flex-row">
                    <div className="flex-1 ">
                        <DepartureAirport active={props.active} />
                    </div>
                    <div className="flex-1">
                        <ArrivalAirport active={props.active} />
                    </div>
                    <div className="flex-1">
                        <TypeDate data="Departure Date" />
                    </div>
                </div>
            </form>
            <div className="h-full">
                {flights &&
                    flights.length > 0 &&
                    flights.map((flight) => (
                        <SmallFlightInformation flight={flight} />
                    ))}
            </div>
        </div>
    );
};

export default FindFlightForm;

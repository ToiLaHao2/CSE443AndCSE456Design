import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PassengerContext } from "./../../contexts/PassengerContext";
import { middleWareWithPOST } from "../../api/ApiService";

const FLightDetail = () => {
    const { id } = useParams();
    const { passenger } = useContext(PassengerContext);
    const [numberOfTicket, setNumberOfTicket] = useState("");
    const [totalTicketPrice, setTotalTicketPrice] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [paymentDetails, setPaymentDetails] = useState("");
    const [notes, setNotes] = useState("");
    const [flight, setFlight] = useState({});

    useEffect(() => {
        const formData = new FormData();
        console.log(id);
        formData.append("id", id);
        middleWareWithPOST
            .post("/flight/getFlight", formData)
            .then((res) => (console.log(res), setFlight(res.data.object)))
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="p-5 h-screen">
            <div className="text-center text-2xl font-bold">Flight Detail</div>
            <div className="flex flex-row p-5 place-content-center">
                <div className="p-2">
                    <div className="font-bold">Flight ID :</div>
                    <div className="font-bold">Aircraft Type : </div>
                    <div className="font-bold">Departure Airport : </div>
                    <div className="font-bold">Arrival Airport : </div>
                    <div>
                        <span className="font-bold">Departure Date : </span>
                        {flight.departureDate}
                    </div>
                    <div>
                        <span className="font-bold">Arrival Date : </span>
                        {flight.arrivalDate}
                    </div>
                    <div>
                        <span className="font-bold">Number Of Stops : </span>
                        {flight.numberOfStops}
                    </div>
                    <div className="font-bold">Seat class : </div>
                    <div className="font-bold">Price : </div>
                    <div className="font-bold">Baggage regulations : </div>
                    <div className="font-bold">Ancillary services : </div>
                </div>
                <div className="p-2">
                    <div>{flight.id}</div>
                    <div>{flight.aircraftType}</div>
                    <div>{flight.departureAirportId}</div>
                    <div>{flight.arrivalAirportId}</div>
                    <div>
                        <span className="font-bold">Departure Time : </span>
                        {flight.departureTime}
                    </div>
                    <div>
                        <span className="font-bold">Arrival Time : </span>
                        {flight.arrivalTime}
                    </div>
                    <div>
                        <span className="font-bold">Duration :</span>
                        {flight.duration}
                    </div>
                    <div>{flight.seatClass}</div>
                    <div>{flight.ticketPrice}</div>
                    <div>{flight.baggageRegulations}</div>
                    <div>{flight.ancillaryServices}</div>
                </div>
            </div>
            <div className="text-center">
                <Link className="rounded-full pt-3 pb-3 pl-5 pr-5 bg-blue-500 text-white">
                    Book Now
                </Link>
            </div>
        </div>
    );
};

export default FLightDetail;

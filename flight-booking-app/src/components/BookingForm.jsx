import { useContext, useEffect, useState } from "react";
import { PassengerContext } from "../contexts/PassengerContext";
import { middleWareWithPOST } from "../api/ApiService";

const BookingForm = (props) => {
    const { passenger } = useContext(PassengerContext);
    const [flight, setFlight] = useState(props.data);
    const [numOfPassenger, setNumOfPassenger] = useState(1);
    const [totalTicketPrice, setTotalTicketPrice] = useState();
    const [paymentMethod, setPaymentMethod] = useState("");
    const [paymentDetail, setPaymentDetail] = useState("");
    const [notes, setNotes] = useState("");

    useEffect(() => {
        setTotalTicketPrice(flight.ticketPrice * numOfPassenger);
    }, [numOfPassenger]);

    const handleOptionChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    function handleBooking() {
        const formData = new FormData();
        formData.append("flightId", flight.id);
        formData.append("passengerEmail", passenger.emailAddress);
        formData.append("numberOfPassenger", numOfPassenger);
        formData.append("totalTicketPrice", totalTicketPrice);
        formData.append("paymentMethod", paymentMethod);
        formData.append("paymentDetails", paymentDetail);
        formData.append("notes", notes);

        middleWareWithPOST
            .post("/booking/add", formData)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    return (
        <div className="place-contente-center">
            <div className="text-center">Booking Flight</div>
            <div className="flex flex-row place-content-center">
                <div className="m-3">
                    <h1>Flight Information</h1>
                    <div className="flex flex-row">
                        <div>
                            <div>
                                <span>From : </span>
                                {flight.departureAirportId}
                            </div>
                            <div>Duration : </div>
                        </div>
                        <div>
                            <div>
                                <span>To : </span>
                                {flight.arrivalAirportId}
                            </div>
                            <div>{flight.duration}</div>
                        </div>
                    </div>
                </div>
                <div className="m-3">
                    <h1>Booking Information</h1>
                    <div className="flex flex-row">
                        <div>
                            <div>Seat class : </div>
                            <div>Price per seat :</div>
                            <div>Number of passengers :</div>
                            <div>Total ticket price : </div>
                            <div>Payment method</div>
                            <div>Payment detail</div>
                            <div>Notes</div>
                        </div>
                        <div>
                            <div>{flight.seatClass}</div>
                            <div>{flight.ticketPrice}</div>
                            <div>
                                <input
                                    type="number"
                                    value={numOfPassenger}
                                    onChange={(e) =>
                                        setNumOfPassenger(e.target.value)
                                    }
                                />
                            </div>
                            <div>{totalTicketPrice}</div>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        value="cash"
                                        checked={paymentMethod === "cash"}
                                        onChange={handleOptionChange}
                                    />
                                    Cash
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="bank transfer"
                                        checked={
                                            paymentMethod === "bank transfer"
                                        }
                                        onChange={handleOptionChange}
                                    />
                                    Bank transfer
                                </label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={paymentDetail}
                                    onChange={(e) => {
                                        setPaymentDetail(e.target.value);
                                    }}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    value={notes}
                                    onChange={(e) => {
                                        setNotes(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-3">
                    <h1>Passenger Information</h1>
                    <div className="flex flex-row">
                        <div>
                            <div>Full name : </div>
                            <div>Email :</div>
                        </div>
                        <div>
                            <div>{passenger.fullName}</div>
                            <div>{passenger.emailAddress}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleBooking()}>Book</button>
            </div>
        </div>
    );
};

export default BookingForm;

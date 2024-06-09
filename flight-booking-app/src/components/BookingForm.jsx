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

    // useEffect(() => {
    //     setTotalTicketPrice(flight.ticketPrice * numOfPassenger);
    // }, [numOfPassenger]);

    const handleOptionChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    // function handleBooking() {
    //     const formData = new FormData();
    //     formData.append("flightId", flight.id);
    //     formData.append("passengerEmail", passenger.emailAddress);
    //     formData.append("numberOfPassenger", numOfPassenger);
    //     formData.append("totalTicketPrice", totalTicketPrice);
    //     formData.append("paymentMethod", paymentMethod);
    //     formData.append("paymentDetails", paymentDetail);
    //     formData.append("notes", notes);

    //     middleWareWithPOST
    //         .post("/booking/add", formData)
    //         .then((res) => console.log(res))
    //         .catch((err) => console.log(err));
    // }

    return (
        <div className="place-contente-center h-screen p-5">
            <div className="text-center font-bold text-3xl">Booking Flight</div>
            <div className="flex flex-row place-content-center w-10/12 ml-auto mr-auto">
                <div className="m-3 w-1/4">
                    <h1 className="mb-5 mt-5 font-bold text-xl">
                        Flight Information
                    </h1>
                    <div className="flex flex-row">
                        <div>
                            <div className="mb-1 h-9 w-24">
                                <span className="font-bold">From : </span>
                                {/* {flight.departureAirportId} */}1
                            </div>
                            <div className="mb-1 h-9 w-24 font-bold">
                                Duration :{" "}
                            </div>
                        </div>
                        <div>
                            <div className="mb-1 h-9">
                                <span className="font-bold">To : </span>
                                {/* {flight.arrivalAirportId} */}2
                            </div>
                            <div className="mb-1 h-9">
                                {/* {flight.duration} */}3
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-3 w-1/2 pl-10">
                    <h1 className="mb-5 mt-5 font-bold text-xl">
                        Booking Information
                    </h1>
                    <div className="flex flex-row">
                        <div className="mr-2">
                            <div className="mb-1 h-9 font-bold">
                                Seat class :{" "}
                            </div>
                            <div className="mb-1 h-9 font-bold">
                                Price per seat :
                            </div>
                            <div className="mb-1 h-9 font-bold">
                                Number of passengers :
                            </div>
                            <div className="mb-1 h-9 font-bold">
                                Total ticket price :
                            </div>
                            <div className="mb-1 h-9 font-bold">
                                Payment method
                            </div>
                            <div className="mb-1 h-9 font-bold">
                                Payment detail
                            </div>
                            <div className="mb-1 h-9 font-bold">Notes</div>
                        </div>
                        <div className="mr-2 ml-2">
                            <div className="mb-1 h-9">
                                {/* {flight.seatClass} */}1
                            </div>
                            <div className="mb-1 h-9">
                                {/* {flight.ticketPrice} */}2
                            </div>
                            <div className="mb-1 h-9">
                                <input
                                    className="h-7"
                                    type="number"
                                    value={numOfPassenger}
                                    onChange={(e) =>
                                        setNumOfPassenger(e.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-1 h-9">{totalTicketPrice}3</div>
                            <div className="mb-1 h-9">
                                <label className="font-bold mr-2">
                                    <input
                                        className="mr-1"
                                        type="radio"
                                        value="cash"
                                        checked={paymentMethod === "cash"}
                                        onChange={handleOptionChange}
                                    />
                                    Cash
                                </label>
                                <label className="font-bold">
                                    <input
                                        className="mr-1"
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
                            <div className="mb-1 h-9">
                                <input
                                    className="h-7"
                                    type="text"
                                    value={paymentDetail}
                                    onChange={(e) => {
                                        setPaymentDetail(e.target.value);
                                    }}
                                />
                            </div>
                            <div>
                                <input
                                    className="h-20"
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
                <div className="m-3 w-1/4">
                    <h1 className="mb-5 mt-5 font-bold text-xl">
                        Passenger Information
                    </h1>
                    <div className="flex flex-row">
                        <div>
                            <div className="mb-1 h-9 w-24 font-bold">
                                Full name :
                            </div>
                            <div className="mb-1 h-9 w-24 font-bold">
                                Email :
                            </div>
                        </div>
                        <div>
                            <div className="mb-1 h-9">
                                {passenger.fullName}1
                            </div>
                            <div className="mb-1 h-9">
                                {passenger.emailAddress}2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center w-1/4 mr-auto ml-auto mt-5">
                <button className="bg-blue-500 w-full p-2 text-white rounded-full shadow-lg shadow-blue-300 hover:shadow-blue-400">
                    BOOK
                </button>
            </div>
        </div>
    );
};

export default BookingForm;

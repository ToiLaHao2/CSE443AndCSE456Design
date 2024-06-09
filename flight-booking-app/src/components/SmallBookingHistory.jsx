import { useState } from "react";

const SmallBookingHistory = (props) => {
    const [history, setHistory] = useState(props.data);

    return (
        <div className="flex flex-row border-2 border-blue-500 w-10/12 mr-auto ml-auto mt-5">
            <div className="w-1/4">Booking Id : {history.id}</div>
            <div className="w-1/4">Flight Id : {history.flightId}</div>
            <div className="w-1/4">
                Number Of Passenger : {history.numberOfPassengers}
            </div>
            <div className="w-1/4">Status : {history.bookingStatus}</div>
        </div>
    );
};

export default SmallBookingHistory;

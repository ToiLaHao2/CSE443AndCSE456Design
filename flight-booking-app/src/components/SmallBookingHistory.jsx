import { useState } from "react";

const SmallBookingHistory = (props) => {
    const [history, setHistory] = useState(props.data);

    return (
        <div className="flex flex-row border-2 border-blue-500 w-10/12 mr-auto ml-auto mt-5 p-4">
            <div className="w-1/3">Flight Id : {history.flightId}</div>
            <div className="w-1/3">
                Number Of Passenger : {history.numberOfPassengers}
            </div>
            <div className="w-1/3">Status : {history.bookingStatus}</div>
        </div>
    );
};

export default SmallBookingHistory;

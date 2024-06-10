import { useContext, useEffect, useState } from "react";
import { PassengerContext } from "../contexts/PassengerContext";
import { Navigate } from "react-router-dom";
import { middleWareWithPOST } from "../api/ApiService";
import SmallBookingHistory from "../components/SmallBookingHistory";

const PassengerDetailPage = () => {
    const { passenger, handleLogout, setPassenger } =
        useContext(PassengerContext);
    const [loggedOut, setLoggedOut] = useState(false);
    const [enableEdit, setEnableEdit] = useState(false);
    const [bookingHistories, setBookingHistories] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [passportNumber, setPassportNumber] = useState("");

    const updateProcess = () => {
        const formData = new FormData();
        formData.append("emailAddress", passenger.emailAddress);
        formData.append("passportNumber", passportNumber);
        formData.append("phoneNumber", phoneNumber);

        middleWareWithPOST
            .post("/passenger/update", formData)
            .then((res) => {
                setPassenger(res.data.object);
                alert(res.data.message);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        const formData = new FormData();
        formData.append("passengerEmail", passenger.emailAddress);
        middleWareWithPOST
            .post("/passenger/bookingHistory", formData)
            .then((res) => setBookingHistories(res.data.object))
            .catch((err) => console.log(err));
    }, [passenger.emailAddress]);

    useEffect(() => {
        if (loggedOut === true) {
            alert("Log out completed.");
            handleLogout();
        }
    }, [handleLogout, loggedOut]);

    if (loggedOut === true) {
        return <Navigate to="/" />;
    }
    return (
        <div className="h-screen text-center">
            <div className="mt-10 mb-5 text-3xl font-bold">
                Welcome,
                <span className="">{passenger.fullName}</span>
            </div>
            <div className="flex flex-row place-content-center w-1/2 ml-auto mr-auto mt-8 border-4 border-blue-500 p-5 shadow-blue-300 shadow-xl">
                <div className="text-left font-bold w-1/3 ml-auto">
                    <div className="h-8">Date Of Birth :</div>
                    <div className="h-8">Gender :</div>
                    <div className="h-8">Nationality :</div>
                    <div className="h-8">Phone number :</div>
                    <div className="h-8">Email :</div>
                    <div className="h-8">Passport number :</div>
                    <button
                        className="h-8 bg-blue-300 w-full rounded-full mb-1"
                        onClick={() => {
                            if (enableEdit === false) setEnableEdit(true);
                            else setEnableEdit(false);
                        }}
                    >
                        Edit
                    </button>
                </div>
                <div className="text-left w-1/2 pl-2">
                    <input
                        value={passenger.dateOfBirth}
                        className="h-7 mb-1"
                        disabled
                    />
                    <input
                        value={passenger.gender}
                        className="h-7 mb-1"
                        disabled
                    />
                    <input
                        value={passenger.countryOfResidence}
                        className="h-7 mb-1"
                        disabled
                    />
                    <input
                        value={passenger.phoneNumber}
                        className="h-7 mb-1"
                        disabled={!enableEdit}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                        }}
                    />
                    <input
                        value={passenger.emailAddress}
                        className="h-7 mb-1"
                        disabled
                    />
                    <input
                        value={passenger.passportNumber}
                        className="h-7 mb-1"
                        disabled={!enableEdit}
                        onChange={(e) => setPassportNumber(e.target.value)}
                    />
                    <button
                        className={`h-8 bg-blue-300 rounded-full w-1/2 ${
                            enableEdit ? "" : "hidden"
                        } `}
                        onClick={() => {
                            updateProcess();
                        }}
                    >
                        Update
                    </button>
                </div>
            </div>
            <div className="w-1/6 mr-auto ml-auto mt-10">
                <button
                    className="bg-blue-500 text-white w-full p-2 text-xl rounded-full"
                    onClick={() => {
                        setLoggedOut(true);
                    }}
                >
                    Logout
                </button>
            </div>
            <div className={`h-screen mt-5`}>
                {bookingHistories &&
                    bookingHistories.length > 0 &&
                    bookingHistories.map((bookingHistory) => (
                        <SmallBookingHistory data={bookingHistory} />
                    ))}
            </div>
        </div>
    );
};

export default PassengerDetailPage;

import { useContext, useEffect, useState } from "react";
import { PassengerContext } from "../contexts/PassengerContext";
import { Navigate } from "react-router-dom";

const PassengerDetailPage = () => {
    const { passenger, handleLogout, ready } = useContext(PassengerContext);
    const [loggedOut, setLoggedOut] = useState(false);

    function logOutProcess() {
        handleLogout();
        if (ready === false) {
            alert("Log out completed.");
            setLoggedOut(true);
        }
    }

    if (loggedOut) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <div>
                Welcome, <span>{passenger.fullName}</span>
            </div>
            <div className="flex flex-row">
                <div>
                    <p>Date Of Birth</p>
                    <p>Gender</p>
                    <p>Nationality</p>
                    <p>Phone number</p>
                    <p>Email</p>
                </div>
                <div>
                    <div>{passenger.dateOfBirth}</div>
                    <div>{passenger.gender}</div>
                    <div>{passenger.nationality}</div>
                    <div>{passenger.phoneNumber}</div>
                    <div>{passenger.email}</div>
                </div>
            </div>
            <div>
                <button onClick={logOutProcess()}>Logout</button>
            </div>
        </div>
    );
};

export default PassengerDetailPage;

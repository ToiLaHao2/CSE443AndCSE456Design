import { useContext, useEffect, useState } from "react";
import { PassengerContext } from "../contexts/PassengerContext";
import { Navigate } from "react-router-dom";

const PassengerDetailPage = () => {
    const { passenger, handleLogout, email } = useContext(PassengerContext);
    const [loggedOut, setLoggedOut] = useState(false);

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
                <button
                    onClick={() => {
                        setLoggedOut(true);
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default PassengerDetailPage;

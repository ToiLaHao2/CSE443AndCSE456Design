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
        <div className="h-screen text-center">
            <div className="mt-10 mb-5 text-3xl font-bold">
                Welcome,{" "}
                <span className="">
                    {passenger.fullName}Dương Thị Hoàng Oanh
                </span>
            </div>
            <div className="flex flex-row place-content-center w-1/2 ml-auto mr-auto mt-8 border-4 border-blue-500 p-5 shadow-blue-300 shadow-xl">
                <div className="text-left font-bold w-1/5 ml-auto">
                    <div className="h-8">Date Of Birth :</div>
                    <div className="h-8">Gender :</div>
                    <div className="h-8">Nationality :</div>
                    <div className="h-8">Phone number :</div>
                    <div className="h-8">Email :</div>
                    <button className="h-8 bg-blue-300 w-full rounded-full mb-1">
                        Edit
                    </button>
                    <button className="h-8 bg-blue-300 w-full rounded-full">
                        Booking history
                    </button>
                </div>
                <div className="text-left w-1/2 pl-2">
                    <div className="h-8">{passenger.dateOfBirth}17/11/2002</div>
                    <div className="h-8">{passenger.gender}Female</div>
                    <div className="h-8">{passenger.nationality}Vietnam</div>
                    <div className="h-8">{passenger.phoneNumber}0369708417</div>
                    <div className="h-8">
                        {passenger.email}oanh.duongthi.bbs20@eiu.edu.vn
                    </div>
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
        </div>
    );
};

export default PassengerDetailPage;

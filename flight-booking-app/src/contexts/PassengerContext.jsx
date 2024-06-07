import { createContext, useState, useEffect } from "react";
import { middleWareWithPOST } from "../api/ApiService";

export const PassengerContext = createContext();

const PassengerProvider = ({ children }) => {
    const [passenger, setPassenger] = useState(() => {
        const storePassengerData = localStorage.getItem("passengerDataTemp");
        return storePassengerData
            ? JSON.parse(storePassengerData)
            : {
                  id: null,
                  fullName: null,
                  dateOfBirth: null,
                  gender: null,
                  nationality: null,
                  ticketType: null,
                  passportNumber: null,
                  phoneNumber: null,
                  emailAddress: null,
                  countryOfResidence: null,
                  bookingHistory: null,
                  password: null,
              };
    });
    const [email, setEmail] = useState("");
    const [ready, setReady] = useState(false);

    async function getPassengerDetail() {
        const formData = new FormData();
        formData.append("email", email);
        await middleWareWithPOST
            .post("/passenger/detail", formData)
            .then((res) => setPassenger(res.data.object))
            .catch((err) => {
                console.log(err);
            });
    }

    function handleLoginSuccess(passengerData) {
        localStorage.setItem("passengerData", JSON.stringify(passengerData));
    }

    useEffect(() => {
        console.log(passenger);
        if (passenger !== null) {
            setReady(true);
            handleLoginSuccess(passenger);
        }
    }, [passenger]);

    function handleLogout() {
        try {
            localStorage.removeItem("passengerData");
            setPassenger(localStorage.getItem("passengerDataTemp"));
            setReady(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <PassengerContext.Provider
            value={{
                passenger,
                setPassenger,
                email,
                setEmail,
                ready,
                getPassengerDetail,
                handleLogout,
            }}
        >
            {children}
        </PassengerContext.Provider>
    );
};

export default PassengerProvider;

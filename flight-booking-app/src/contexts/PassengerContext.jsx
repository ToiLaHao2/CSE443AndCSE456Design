import { createContext, useState, useEffect } from "react";
import { middleWareWithPOST } from "../api/ApiService";

export const PassengerContext = createContext();

const PassengerProvider = ({ children }) => {
    const [passenger, setPassenger] = useState(() => {
        const storePassengerData = localStorage.getItem("passengerData");
        return storePassengerData
            ? JSON.parse(storePassengerData)
            : {
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
    const [email, setEmail] = useState(() => {
        const storeEmail = localStorage.getItem("email");
        return storeEmail === null ? storeEmail : "";
    });
    const [ready, setReady] = useState(() => {
        const ready = localStorage.getItem("ready");
        return ready ? false : ready;
    });

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
        localStorage.setItem("ready", true);
        localStorage.setItem("email", email);
    }

    useEffect(() => {
        console.log(passenger);
        if (passenger !== null && email !== "") {
            setReady(true);
            handleLoginSuccess(passenger);
        }
    }, [passenger, email]);

    function handleLogout() {
        try {
            localStorage.removeItem("passengerData");
            localStorage.removeItem("email");
            localStorage.removeItem("ready");
            setEmail(localStorage.getItem("email"));
            setPassenger(localStorage.getItem("passengerData"));
            setReady(localStorage.getItem("ready"));
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

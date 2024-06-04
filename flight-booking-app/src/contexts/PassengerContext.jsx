import { createContext, useState, useEffect } from "react";
import { middleWareWithPOST } from "../api/ApiService";

export const PassengerContext = createContext();

const PassengerProvider = ({ children }) => {
    const [passenger, setPassenger] = useState();
    const [email, setEmail] = useState(null);
    const [ready, setReady] = useState(false);

    const getPassengerDetail = () => {
        try {
            const formData = new FormData();
            formData.append("email", email);
            middleWareWithPOST
                .post("/passenger/detail", formData)
                .then((res) => setPassenger(res.response.data.object))
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setReady(true); // Đặt setReady(true) trong finally để đảm bảo rằng nó được gọi dù có lỗi hay không
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (email) {
            setReady(false); // Đặt setReady(false) khi email thay đổi để chuẩn bị cho việc gửi yêu cầu mới
            getPassengerDetail();
        }
    }, [email]);

    return (
        <PassengerContext.Provider
            value={{ passenger, setPassenger, email, setEmail, ready, getPassengerDetail }}
        >
            {children}
        </PassengerContext.Provider>
    );
};

export default PassengerProvider;

import { useContext, useEffect, useState } from "react";
import { middleWareWithPOST } from "../api/ApiService";
import { PassengerContext } from "../contexts/PassengerContext";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [emailLogin, setEmailLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { getPassengerDetail, email, setEmail, ready } =
        useContext(PassengerContext);

    useEffect(() => {
        if (email !== "") {
            getPassengerDetail();
        }
    }, [email, getPassengerDetail]);

    useEffect(() => {
        if (ready === true) {
            setIsLoggedIn(true);
        }
    }, [ready]);

    if (isLoggedIn) {
        return <Navigate to={"/"}/>
    }

    function handleCheckData() {
        if (emailLogin === "") {
            alert("Email is not fill in");
            return false;
        } else if (password === "") {
            alert("Password is not fill in");
            return false;
        } else {
            return true;
        }
    }

    function handleLogin(ev) {
        if (handleCheckData() == true) {
            const formData = new FormData();
            formData.append("email", emailLogin);
            formData.append("password", password);
            try {
                middleWareWithPOST
                    .post("/passenger/login", formData)
                    .then((res) => {
                        if (res.data.error === true) {
                            alert(res.data.message);
                        } else {
                            setEmail(emailLogin);
                            alert(res.data.message);
                        }
                    })
                    .catch((err) => {
                        alert(err);
                    });
            } catch (err) {
                alert(err);
            }
        }
    }

    return (
        <div className="flex w-full">
            <div className="w-full h-5/6 p-20 flex items-center justify-center lg:w-1/2">
                <div className="bg-white w-96 ml-40">
                    <h1 className="text-2xl font-semibold">Welcome Back!</h1>
                    <div className="mt-8">
                        <div>
                            <lable className="text-lg font-medium">Email</lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your email address..."
                                value={emailLogin}
                                onChange={(ev) => setEmailLogin(ev.target.value)}
                            />
                        </div>
                        <div>
                            <lable className="text-lg font-medium">
                                Password
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your password..."
                                type="password"
                                value={password}
                                onChange={(ev) => setPassword(ev.target.value)}
                            />
                        </div>
                        <div className="mt-8 flex justify-between items-center">
                            <button className="font-medium text-base text-blue-500">
                                Forgot password
                            </button>
                        </div>
                        <div className="mt-8 flex flex-col gap-y-4">
                            <button
                                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-700 text-white text-lg font-bold"
                                onClick={handleLogin}
                            >
                                Sign in
                            </button>
                        </div>
                        <div className="mt-6 flex flex-col gap-y-4">
                            <p className="text-center">
                                {" "}
                                You don't have account? Create here &#8595;
                            </p>
                            <button
                                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-medium"
                                onClick={() =>
                                    (window.location.href = "/signUp")
                                }
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden relative lg:flex items-center w-1/2 justify-center bg-blue-500">
                <div className="w-60 h-60 bg-gradient-to-tr from-blue-700 tp-blue-500 rounded-full animate-bounce" />
                <div className="w-full h-2/6 absolute bottom-0" />
            </div>
        </div>
    );
};

export default Login;

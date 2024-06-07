import React, { useContext, useEffect, useState } from "react";
import { middleWareWithPOST } from "../api/ApiService";
import { PassengerContext } from "../contexts/PassengerContext";

const Register = () => {
    const [fullname, setFullName] = useState(null);
    const [dob, setDob] = useState(null);
    const [gender, setGender] = useState(null);
    const [nationality, setNationality] = useState(null);
    const [password, setPassword] = useState(null);
    const [emailSignUp, setEmailSignUp] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
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
        if (fullname === null) {
            alert("Full name is not fill in");
            return false;
        } else if (dob === null) {
            alert("Date of birth is not fill in");
            return false;
        } else if (gender === null) {
            alert("Gender is not fill in");
            return false;
        } else if (nationality === null) {
            alert("Password is not fill in");
            return false;
        } else if (email === null) {
            alert("Email is not fill in");
            return false;
        } else if (password === null) {
            alert("Password is not fill in");
            return false;
        } else {
            return true;
        }
    }

    async function handleRegister(ev) {
        // ev.preventDefault();
        if (handleCheckData() === true) {
            const formData = new FormData();
            formData.append("fullName", fullname);
            formData.append("dateOfBirth", dob);
            formData.append("gender", gender);
            formData.append("nationality", nationality);
            formData.append("email", emailSignUp);
            formData.append("password", password);
            try {
                middleWareWithPOST
                    .post("/passenger/register", formData)
                    .then((res) => {
                        if (res.data.error === true) {
                            alert(res.data.message);
                        } else {
                            setEmail(emailSignUp);
                            alert(res.data.message);
                        }
                    })
                    .catch((err) => {
                        alert(err);
                    });
            } catch (error) {
                alert(err);
            }
        }
    }

    return (
        <div className="flex w-full">
            <div className="w-full h-5/6 p-20 flex items-center justify-center lg:w-1/2">
                <div className="bg-white w-96 ml-40">
                    <h1 className="text-2xl font-semibold text-center">
                        Welcome To TUF Airline
                    </h1>
                    <div className="mt-4 ">
                        <div className="pb-2">
                            <lable className="text-medium font-primary font-bold">
                                Full name
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-1 mt-1 ml-2 bg-transparent"
                                placeholder="Enter your full name..."
                                onChange={(ev) => setFullName(ev.target.value)}
                            />
                        </div>
                        <div className="pb-2">
                            <lable className="text-medium font-primary font-bold">
                                Date Of Birth
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-1 mt-1 ml-2 bg-transparent"
                                placeholder="Enter your date of birth..."
                                onChange={(ev) => setDob(ev.target.value)}
                            />
                        </div>
                        <div className="pb-2">
                            <lable className="text-medium font-primary font-bold">
                                Gender
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-1 mt-1 ml-2 bg-transparent"
                                placeholder="Enter your gender..."
                                onChange={(ev) => setGender(ev.target.value)}
                            />
                        </div>
                        <div className="pb-2">
                            <lable className="text-medium font-primary font-bold">
                                Nationality
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-1 mt-1 ml-2 bg-transparent"
                                placeholder="Enter your nationality..."
                                onChange={(ev) =>
                                    setNationality(ev.target.value)
                                }
                            />
                        </div>
                        <div>
                            <lable className="text-medium font-primary font-bold">
                                Email
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-1 mt-1 ml-2 bg-transparent"
                                placeholder="Enter your email address..."
                                onChange={(ev) =>
                                    setEmailSignUp(ev.target.value)
                                }
                            />
                        </div>
                        <div>
                            <lable className="text-medium font-primary font-bold">
                                Password
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-1 mt-1 ml-2 bg-transparent"
                                placeholder="Enter your password here..."
                                type={showPassword ? "text" : "password"}
                                onChange={(ev) => setPassword(ev.target.value)}
                            />
                            <label
                                for="check"
                                className="text-sm font-primary font-bold pt-2 pr-2"
                            >
                                Show Password
                            </label>
                            <input
                                id="check"
                                type="checkbox"
                                value={showPassword}
                                onChange={() =>
                                    setShowPassword((prev) => !prev)
                                }
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-y-2">
                        <button
                            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-blue-700 text-white text-base font-bold font-primary"
                            onClick={() => {
                                handleRegister();
                            }}
                        >
                            Register Now
                        </button>
                        <p className="text-center">
                            Or already have an account
                        </p>
                        <button
                            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-blue-500 text-white text-base font-bold font-primary"
                            onClick={() => (window.location.href = "/Login")}
                        >
                            Login
                        </button>
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

export default Register;

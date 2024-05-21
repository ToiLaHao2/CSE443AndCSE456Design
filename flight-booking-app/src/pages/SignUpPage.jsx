import React from "react";

const Register = () => {
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
                            />
                        </div>
                        <div className="pb-2">
                            <lable className="text-medium font-primary font-bold">
                                Date Of Birth
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-1 mt-1 ml-2 bg-transparent"
                                placeholder="Enter your date of birth..."
                            />
                        </div>
                        <div className="pb-2">
                            <lable className="text-medium font-primary font-bold">
                                Gender
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-1 mt-1 ml-2 bg-transparent"
                                placeholder="Enter your user name..."
                            />
                        </div>
                        <div className="pb-2">
                            <lable className="text-medium font-primary font-bold">
                                Nationality
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-1 mt-1 ml-2 bg-transparent"
                                placeholder="Enter your password..."
                            />
                        </div>
                        <div>
                            <lable className="text-medium font-primary font-bold">
                                Email
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-1 mt-1 ml-2 bg-transparent"
                                placeholder="Enter your email address..."
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-y-2">
                        <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-blue-700 text-white text-base font-bold font-primary">
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

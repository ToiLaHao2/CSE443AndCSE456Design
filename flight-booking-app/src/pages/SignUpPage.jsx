import React from "react";
const Register = () => {
    return (
        <div className="flex w-full h-screen">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                {/*form*/}
                <div className="bg-white ">
                    <h1 className="text-xl font-primary justify-center text-center pt-10">
                        Welcome To ADINA Hotel!{" "}
                    </h1>
                    <div className="mt-4 ">
                        <div className="pb-5">
                            <lable className="text-medium font-primary font-bold">
                                First Name
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                                placeholder="Enter your first name..."
                            />
                        </div>
                        <div className="pb-5">
                            <lable className="text-medium font-primary font-bold">
                                Last Name
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                                placeholder="Enter your last name..."
                            />
                        </div>
                        <div className="pb-5">
                            <lable className="text-medium font-primary font-bold">
                                User Name
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                                placeholder="Enter your user name..."
                            />
                        </div>
                        <div className="pb-5">
                            <lable className="text-medium font-primary font-bold">
                                Password
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                                placeholder="Enter your password..."
                            />
                        </div>
                        <div>
                            <lable className="text-medium font-primary font-bold">
                                Email
                            </lable>
                            <input
                                className="w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent"
                                placeholder="Enter your email address..."
                            />
                        </div>
                        <div className="mt-8 flex flex-col gap-y-4">
                            <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-yellow-500 text-white text-lg font-bold font-primary">
                                Register Now
                            </button>
                            <p className="text-center">
                                Or already have an account
                            </p>
                            <button
                                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-black text-white text-lg font-bold font-primary"
                                onClick={() =>
                                    (window.location.href = "/Login")
                                }
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden relative lg:flex h-full items-center w-1/2 justify-center bg-yellow-500">
                <div className="w-60 h-60 bg-gradient-to-tr from-orange-500 tp-yellow-500 rounded-full animate-bounce" />
                <div className="w-full h-1/2 absolute bottom-0" />
            </div>
        </div>
    );
};

export default Register;

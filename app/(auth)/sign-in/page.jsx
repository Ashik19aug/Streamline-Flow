import React from 'react';
import {EmailIcon, FacebookIcon, GoogleIcon, PasswordIcon} from "@/component/svg";

const Page = () => {
    return (
        <div className="flex flex-col w-full margin-x-auto gap-4 justify-center ">
            <h3 className="text-3xl text-center font-bold mt-4">Login</h3>
            <p className="text-lg text-center">Enter your authentication details</p>
            <form className="px-4">
                {/*  Email input   */}
                <label
                    htmlFor="input-group-1"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Your Email
                </label>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <EmailIcon/>
                    </div>
                    <input
                        type="text"
                        id="input-group-1"
                        className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                        placeholder="name@flowbite.com"
                    />
                </div>
                <label
                    htmlFor="input-group-2"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Your Password
                </label>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <PasswordIcon/>
                    </div>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                        placeholder="* * * * * * * *"
                    />
                </div>

                <div className="flex justify-center items-center">
                    <label
                        htmlFor="remember"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Don't have an account?
                        <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                            SignUp
                        </a>
                    </label>
                </div>

                <div className="flex justify-center items-center mt-4">
                    <button
                        type="button"
                        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Page;
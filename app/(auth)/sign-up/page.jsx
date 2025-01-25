import React from 'react';
import {EmailIcon, PasswordIcon} from "@/component/svg";
import {InputLabel} from "@/component";

const Page = () => {
    return (
        <div className="flex flex-col w-full margin-x-auto gap-4 justify-center ">
            <h3 className="text-3xl text-center font-bold mt-4">SignUp</h3>
            <p className="text-lg text-center">Enter your information for SignUp</p>
            <form className="px-4">
                {/*  Name input   */}
                <InputLabel Title={"Your Name"}/>
                <div className="relative mb-6">
                    <div className="w-[30px] absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <EmailIcon/>
                    </div>
                    <input
                        type="text"
                        id="input-group-1"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                        placeholder="name@flowbite.com"
                    />
                </div>
                {/*  Email input   */}
                <InputLabel Title={"Your Email"}/>
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

                <InputLabel Title={"Password"}/>
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

                <InputLabel Title={"Confirm Password"}/>
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
                        Already have have an account?
                        <a href="#" className="text-blue-600 hover:underline ">
                            SignIn
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
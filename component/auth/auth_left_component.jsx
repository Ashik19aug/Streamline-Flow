import React from 'react';
import Image from "next/image";

const AuthLeftComponent = () => {
    return (
        <div className="flex justify-center items-center w-1/4 mr-4 rounded-2xl">
            <Image
                src="/images/auth_banner.jpg"
                alt="logo"
                width={500}
                height={500}
                className="object-fill rounded-md"
            />
        </div>
    );
};

export default AuthLeftComponent;
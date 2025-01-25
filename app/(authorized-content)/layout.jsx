import React from 'react';
import {NavigationMenuSimple} from "@/component";

const Layout = ({children}) => {
    return (
        <div>
            <div className="flex justify-center items-center z-50">
                <NavigationMenuSimple/>
            </div>
            <div className="flex w-full min-h-screen justify-center items-center">
                {children}
            </div>
            <div>Footer</div>
        </div>
    );
};

export default Layout;
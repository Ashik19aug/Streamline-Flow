import React from 'react';
import {AuthLeftComponent} from "@/component";


const Layout = ({children}) => {
    return (
        <main>
            <div className="flex justify-center items-center w-full min-h-screen">
                <AuthLeftComponent/>
                <div className="w-1/4 h-[500px] flex justify-center items-center rounded-lg">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;
import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <div>Nav Bar</div>
            <div className="flex w-full  justify-center items-center">
                {children}
            </div>
            <div>Footer</div>
        </div>
    );
};

export default Layout;
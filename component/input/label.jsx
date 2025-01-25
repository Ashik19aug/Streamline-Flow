import React from 'react';

const Label = ({Title}) => {
    return (
        <label
            htmlFor="input-group-1"
            className="block mb-2 text-sm font-medium text-black"
        >
            {Title}
        </label>
    );
};

export default Label;
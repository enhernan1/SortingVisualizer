import React from "react";

const ArrayBar = ({ height, width, color}) => {
    const style={
        height: `${height}px`,
        width: width, 
        backgroudColor: color
    };

    return (
        <div className= "array-bar" style = {style}></div>
    );
};

export default ArrayBar;
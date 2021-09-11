import React from "react";

import './custom-button.styles.scss';

const Custombutton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted': '' } custom-button`} {...otherProps} > 
        {children}
    </button>
);

export default Custombutton;
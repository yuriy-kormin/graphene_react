import React from 'react';
import {Alert} from "react-bootstrap";

const ErrorAlert = ({children, ...props}) => {
    return (
        <Alert
            variant='danger'
            dismissible
            {...props}
        >{children}</Alert>
    );
};

export default ErrorAlert;
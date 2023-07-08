import React from 'react';
import Form from 'react-bootstrap/Form';

const TextInput = ({id,label,type,classes,...props}) => {
    return (
        <>
            <Form.Label htmlFor={id}>{label}</Form.Label>
            <Form.Control id={id} type={type} className={classes} ref={props._ref} {...props} />
        </>
    );
};

export default TextInput;
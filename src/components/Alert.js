import React from 'react'

export default function Alert(props) {

    const cap = (word) => {
        word=word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <div style={{height:'60px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{cap(props.alert.type)}:</strong>       {props.alert.msg}
        </div>}
        </div>
    )
}

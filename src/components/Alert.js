import React from 'react'
import PropTypes from 'prop-types'
export default function Alert(props) {
    const capatialize=(str)=>{
        const lower=str.toLowerCase();
        return str[0].toUpperCase()+str.slice(1);
       
    }
    return (
        props.alert&&<div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{props.alert.type==='danger'?"Sorry":capatialize(props.alert.type)}</strong>{props.alert.msg}
        </div>
    )
}

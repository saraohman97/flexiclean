import React, { useState } from 'react'

const ContactsFormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const { label, errorMessage, onChange, id, ...inputProps } = props

    const handleFocus = e => {
        setFocused(true)
    }

    return (
        <div className='input-group'>
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === 'message' && setFocused(true)}
                focused={focused.toString()}
                className={inputProps.name === 'message' && 'message'}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default ContactsFormInput
import React, { createContext, useState } from "react";

export const SmsCodeContext = createContext()


export const SmsCodeProvider = (props) => {

    const [smsCode,setSmsCode] = useState('');

    return(
        <SmsCodeContext.Provider
            value={[smsCode,setSmsCode]}
        >
            {props.children}
        </SmsCodeContext.Provider>
    )
}


import React, { createContext, useState } from "react";

export const SmsCodeContext = createContext()


export const SmsCodeProvider = (props) => {

    console.log("SmsCodeProvider");
    const [smsCode, setSmsCode] = useState('');

    /*********************  Generate a 6-digit random number  *********************/
    function generate(n) {
        var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.  
        if (n > max) {
            return generate(max) + generate(n - max);
        }
        max = Math.pow(10, n + add);
        var min = max / 10; // Math.pow(10, n) basically
        var number = Math.floor(Math.random() * (max - min + 1)) + min;
        return ("" + number).substring(add);
    }

    const defineCode = () => {
        console.log(process.env.REACT_APP_SMS_TIMER_LIMIT);
        let randomCode = generate(6);
        setSmsCode(randomCode)
        console.log(randomCode);
        setTimeout(() => {
            clearCode()
        }, Number(process.env.REACT_APP_SMS_TIMER_LIMIT));
    }

    const clearCode = () => {
        setSmsCode("")
    }

    return (
        <SmsCodeContext.Provider
            value={[smsCode, defineCode,clearCode]}
        >
            {props.children}
        </SmsCodeContext.Provider>
    )
}


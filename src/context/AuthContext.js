import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {


    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token === "886644") {
            setIsLogin(true)
        }
    }, [])

    const LogOut = () => {
        localStorage.removeItem('token')
        setIsLogin(false)
    }

    const LogIn = (current_path) => {
        localStorage.setItem('token', '886644')
        setIsLogin(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    return <AuthContext.Provider value={[isLogin, LogIn, LogOut]}>
        {props.children}
    </AuthContext.Provider>

}
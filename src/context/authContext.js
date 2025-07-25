"use client"

import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(null);

    const logIn = async (...data) => {
        const {email, password} = data.pop()
        const req = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({email, password})
        })
            .then((res) => res.json())
            .then((response)  => {
                console.log(response.data)
                if(!response.data.success) {
                    alert(response.data.message || "Aconteceu algo de errado na integração")
                    return false;
                }

                alert("Usuário autenticado com sucesso!")
                return true;
            })
            .catch(err => console.error("Erro: " + err))
    }

    const logOut = () =>{
        setAuth(null)
    }

    return (
        <AuthContext.Provider value={{auth, logIn, logOut}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);
"use client"
import React, {createContext, useContext, useEffect, useState} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(null);

    useEffect (async () => {
        const response = await fetch("/api/auth/verifySession", {
            method: "POST",
        })
        let data = (await response.json()).data;

        if(!data.access_token){
            //TODO: Verificar rotas seguras para redirecionar caso a sessão expire
            console.log('usuário não logado')
            return
        }
        
        setAuth(true)
        
      }, [])

    const logIn = async (...data) => {
        const {email, password} = data.pop()
        await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({email, password})
        })
            .then((res) => res.json())
            .then((response)  => {
                if(!response.data.success) {
                    alert(response.data.message || "Aconteceu algo de errado na integração")
                    return false;
                }
                setAuth(response.data.user)

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
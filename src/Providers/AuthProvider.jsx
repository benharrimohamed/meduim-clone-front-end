import React , {createContext, useState} from 'react';

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {

    const [loggedIn , setLoggedIn] =  useState(false)
    
    const loggeIn = () => {
        
        setLoggedIn (true)
    }

    return (

        <AuthContext.Provider value={'hello'}>
            {children}
        </AuthContext.Provider>
    )


}
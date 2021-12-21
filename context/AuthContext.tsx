import { createContext } from "react";
import {ReactNode} from "react"
import { api } from "../services/api";

type AuthProvideProps ={
    children: ReactNode
}

type SignInCredentials = {
    email: string;
    password: string;
}


type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>;
    isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}:AuthProvideProps){
    const isAuthenticated = false;

    async function signIn({email, password}: SignInCredentials){
        try {
            const response = await api.post('sessions', {
                email,
                password,
            })
            console.log(response.data)
        }catch (err){
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value = {{signIn, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}
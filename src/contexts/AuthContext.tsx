import supabase from "@/supabase.client";
import { createContext, useEffect, useState } from "react";

type AuthContextType = {
    isAuth: boolean,
    user: any,
}

const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = (children: React.ReactNode) => {
    const [isAuth, setIsAuth] = useState(true)
    const [user, setUser] = useState()
    const toggleAuth = () => {
        setIsAuth(!isAuth)
    }

    const fetchUser = async () => {
        const currentSession = await supabase.auth.getSession()

        console.log(currentSession)
    }

    const logoutUser = async() => {
        const { error } = await supabase.auth.signOut()

        if(!error) {
            // go to login page
        }

        return alert(error?.message)
    }
    useEffect(() => {
        fetchUser()
    }, []);

    return (
        <div>
            <AuthContext.Provider value={{ isAuth, user }}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}

export {AuthContext, AuthProvider};
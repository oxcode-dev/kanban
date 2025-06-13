import supabase from "@/supabase.client";
import { createContext, useEffect, useState } from "react";

type AuthContextType = {
    isAuth: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = (children: React.ReactNode) => {
    const [isAuth, setIsAuth] = useState(true)
    const toggleAuth = () => {
        setIsAuth(!isAuth)
    }

    const fetchUser = async () => {
        const currentSession = await supabase.auth.getSession()

        console.log(currentSession)
    }
    useEffect(() => {
        fetchUser()
    }, []);

    return (
        <div>
            <AuthContext.Provider value={{ isAuth }}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}

export {AuthContext, AuthProvider};
import supabase from "@/supabase.client";
import { createContext, useEffect, useState } from "react";

type AuthContextType = {
    auth: boolean,
    user: any,
    logoutUser: () => void,
}

const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = (children: React.ReactNode) => {
    const [user, setUser] = useState<any>()
    const [auth, setAuth] = useState<any>()

    const fetchUser = async () => {
        const currentSession = await supabase.auth.getSession()

        

        console.log(currentSession)
    }

    const logoutUser = async() => {
        const { error } = await supabase.auth.signOut()

        if(!error) {
            // go to login page
            setUser(null)
        }

        alert(error?.message)
    }
    useEffect(() => {
        fetchUser()
    }, []);

    return (
        <div>
            <AuthContext.Provider value={{ auth, user, logoutUser }}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}

export {AuthContext, AuthProvider};
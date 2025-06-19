import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import supabase from "@/supabase.client";
import { createContext, useEffect, useState } from "react";

export type AuthContextType = {
    auth: any,
    user: any,
    logoutUser: () => void,
}

type AuthProviderType = {
    children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children } : AuthProviderType) => {
    const [user, setUser] = useState<any>()
    const [auth, setAuth] = useState<any>()
    const { handleSignOut } = useSupabaseAuth()

    const fetchUser = async () => {
        // const currentSession = await supabase.auth.getSession()
        const currentSession = await supabase.auth.getUser()

        const { error, data } = await supabase
            .from("users")
            .select('*')
            .eq('id', currentSession?.data?.user?.id)

        if (error) {
            console.error(error.message);
            logoutUser()
            return;
        }

        setAuth(currentSession?.data?.user || null)
        setUser(data)
    }

    const logoutUser = async() => {
        const { error } = await handleSignOut()
        // const { error } = await supabase.auth.signOut()

        if(!error) {
            // go to login page
            setAuth(null)
            setUser(null)
        }

        alert(error?.message)
    }
    useEffect(() => {
        fetchUser()
    }, []);

    return (
        <AuthContext.Provider value={{ auth, user, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};

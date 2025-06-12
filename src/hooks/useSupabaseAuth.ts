import supabase from "@/supabase.client";
import { useState } from "react";
// import router from "../router";

export const useSupabaseAuth = () => {
    // const user = auth.currentUser;
    // const authStore = useAuthStore()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    
    // const handleSignOut = async() => {
    //     await signOut(auth).then(() => {
    //         authStore.clearAuthUser()    
    //         location.href = '/auth'
    //     }).catch((error) => {
    //         console.log(errorResponse(error.code))
    //     });
    // }

    const handleSignIn = async (email: string, password: string) => {
        setIsLoading(true)

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })
            setIsLoading(false)

            return { data, error }
        } catch (error) {
            // setError(errorResponse(e.code));
            console.log(error)
            setIsLoading(false)
        }
    }

    const handleSignUp = async (email: string, password: string) => {
        setIsLoading(true)

        try {
            const { error } = await supabase.auth.signUp({
                email: email,
                password: password,
            })

            return { error }
        } catch (e) {
            setIsLoading(false)
        }
    }

    // const handleChangePassword = (password) => {
    //     setIsLoading(true)

    //     updatePassword(user, password).then(() => {
    //         setIsLoading(false)
    //         alert('Password Updated Successfully!!!')
    //     })
    //     .catch((error) => {
    //         setIsLoading(false)
    //         if(error.code === 'auth/requires-recent-login') {
    //             alert(errorResponse(error.code))
    //             handleSignOut()
    //         }

    //         console.log(errorResponse(error.code))
    //     });
    // }

    // const handleUpdateUserEmail = email => {
    //     setIsLoading(true)

    //     updateEmail(auth.currentUser, email).then(() => {
    //         setIsLoading(false)
    //         alert('Email Updated Successfully!!!')
    //     }).catch((error) => {
    //         setIsLoading(false)
    //         if(error.code === 'auth/requires-recent-login') {
    //             alert(errorResponse(error.code))
    //             handleSignOut()
    //         }

    //         console.log(errorResponse(error.code))
    //     });
    // }

    // const handleDeleteUser = () => {
    //     deleteUser(user).then(() => {
    //         alert('Account Deleted')
    //         handleSignOut()
    //     }).catch((error) => {
    //         if(error.code === 'auth/requires-recent-login') {
    //             alert(errorResponse(error))
    //             handleSignOut()
    //         }
    //         console.log(errorResponse(error.code));
    //     });
    // }

    return { 
        handleSignIn, handleSignUp,

        // handleSignUp, handleSignIn, handleSignOut, handleChangePassword, 
        // handleUpdateUserEmail, handleDeleteUser, isLoading, error 
    }
} 
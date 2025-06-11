import supabase from "@/supabase.client";
import { useState } from "react";
// import router from "../router";

export const useFirebaseAuth = () => {
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
        let result = null

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: 'valid.email@supabase.io',
                password: 'example-password',
            })
            setIsLoading(false)

            console.log(data, error)

            // authStore.saveAuthUser(result.user)
            // router.push('/')
        } catch (error) {
            // setError(errorResponse(e.code));
            console.log(error)
            setIsLoading(false)
        }
    }

    // const handleSignUp = async (email, password) => {
    //     setIsLoading(true)
    //     let result = null

    //     try {
    //         result = await createUserWithEmailAndPassword(auth, email, password);
    //         setIsLoading(false)
    //         authStore.saveAuthUser(result.user)
    //         router.push('/')
    //     } catch (e) {
    //         setError(errorResponse(e.code));
    //         setIsLoading(false)
    //     }
    // }

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
        handleSignIn,

        // handleSignUp, handleSignIn, handleSignOut, handleChangePassword, 
        // handleUpdateUserEmail, handleDeleteUser, isLoading, error 
    }
} 
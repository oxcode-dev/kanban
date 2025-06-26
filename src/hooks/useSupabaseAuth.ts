import supabase from "@/supabase.client";

export const useSupabaseAuth = () => {
    
    const handleSignOut = async() => {
        const { error } = await supabase.auth.signOut()

        return { error }
    }

    const handleSignIn = async (email: string, password: string) => {

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })

            return { data, error }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignUp = async (email: string, password: string, redirectToUrl: string | undefined) => {

        try {
            const { error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    emailRedirectTo: redirectToUrl,
                },
            })

            return { error }
        } catch (error) {
            console.error(error)
        }
    }

    const handleResetPassword = async (email: string, redirectToUrl: string | undefined) => {
        const { error, data } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: redirectToUrl,
        })

        return {
            error, data
        }
    }

    const handleChangePassword = async (password: string) => {

        const {error} = await supabase.auth.updateUser({ password: 'new_password' })

       return error
    }

    const handleUpdateUserEmail = async (email: string) => {

        const { data, error } = await supabase.auth.updateUser({
            email: email,
        })

        if(error) {
            return error//.message
        }

        return data
    }

    const handleDeleteUser = async () => {
        const currentUser = await supabase.auth.getUser()
        const { error } = await supabase.auth.admin.deleteUser(currentUser?.data?.user?.id || '')

        return error
    }

    return { 
        handleSignIn, handleSignUp, handleSignOut, handleChangePassword,
        handleResetPassword, handleUpdateUserEmail, handleDeleteUser
    }
} 



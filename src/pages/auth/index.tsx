import { AuthContext, AuthContextType } from "@/contexts/AuthContext";
import LoginForm from "@/forms/auth/LoginForm";
import SignUpForm from "@/forms/auth/SignUpForm";
import AuthLayout from "@/layout/auth";
import { useContext, useEffect, useState } from "react";

const AuthPage = () => {
    const [isLoginActive, setIsLoginActive] =  useState(true)

    const { auth } = useContext(AuthContext) as AuthContextType

    // useEffect(() => {
    //     console.log(auth)
    // })

    return (
        <>
            <AuthLayout>

                <div>
                    { auth?.email }
                    <div className="py-4 pb-6 space-y-1">
                        <p className="text-base text-gray-500 font-medium">
                            Please enter your details
                        </p>
                        <p className="font-bold text-3xl">
                            Welcome Back
                        </p>
                    </div>

                    <div>
                        {
                            isLoginActive ? (
                                <LoginForm />
                            ) : (
                                <SignUpForm />
                            )
                        }
                    </div>

                    <div className="inline-flex space-x-2 justify-center w-full text-gray-500 font-medium pt-4">
                        <span>
                            { isLoginActive ? `Don't have an account?` : 'Already have an account?'}
                        </span>
                        <a onClick={() => setIsLoginActive(!isLoginActive)} href="#" className="text-blue-600 underline">
                            { isLoginActive ? `Sign up` : 'Login'}
                        </a>
                    </div>
                </div>
                   
            </AuthLayout>
        </>
    )
}

export default AuthPage;
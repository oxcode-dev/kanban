import LoginForm from "@/forms/auth/LoginForm";
import AuthLayout from "@/layout/auth";
import { useState } from "react";

const AuthPage = () => {
    const [isLoginActive, setIsLoginActive] =  useState(true)
    return (
        <>
            <AuthLayout>
                

                    <div>
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
                                ) : null
                            }
                        </div>

                        {
                            isLoginActive ? (
                                <div className="inline-flex space-x-2 justify-center w-full text-gray-500 font-medium pt-4">
                                    <span>
                                        Don't have an account?
                                    </span>
                                    <a href="#" className="text-blue-600 underline">
                                        Sign up
                                    </a>
                                </div>
                            ): null
                        }
                    </div>
                   
            </AuthLayout>
        </>
    )
}

export default AuthPage;
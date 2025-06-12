import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { FormEvent, useState } from "react";

const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const { handleSignUp } = useSupabaseAuth()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
    
        // @ts-ignore
        const { error } = await handleSignUp(email, password)

        // console.log(error?.message)
        if(error) {
            alert(error.message)
            setIsLoading(false)
            return
        }

        alert('Check your email for confirmation!!!')
        setIsLoading(false)
        setEmail('')
        setPassword('')
        location.reload()
    }

    return (
        <>
            <form onSubmit={e => handleSubmit(e)} className="space-y-3">
                <div className="relative">
                    <label className="">Email</label>
                    <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="focus:outline-none border border-gray-300 shadow p-2 w-full rounded" />
                </div>
                <div className="py-1">
                    <label>Password</label>
                    <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="focus:outline-none border border-gray-300 shadow p-2 w-full rounded" />
                </div>
                <div className="justify-between items-center hidden">
                    <div className="flex items-center">
                        <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" />
                        <label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">Remember for 30 days</label>
                    </div>
                    <a href="#">forgot password</a>
                </div>
                <div className="pt-5">
                    <button disabled={isLoading} type="submit" className="bg-blue-600 text-white w-full p-2 text-lg rounded cursor-pointer">
                        { isLoading ? 'Loading...' : 'Sign Up'}
                    </button>
                </div>
            </form>
        </>
    )
}

export default SignUpForm;
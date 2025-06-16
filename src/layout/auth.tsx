import { JSX } from "react"

type AuthLayoutProps = {
    children: JSX.Element
}
const AuthLayout = ({ children } : AuthLayoutProps) => {
    return (
        <>
            <div className="flex w-full justify-center min-h-screen bg-gray-200 py-8">
                <div className="border border-slate-200 shadow bg-white min-w-lg rounded-lg p-4">
                    <div className="p-4 sm:px-8 flex flex-col">
                        <div className="pb-8 pt-4">
                            <h2 className="font-bold text-3xl text-blue-600 drop-shadow">Kanban</h2>
                        </div>

                        <div>
                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthLayout;
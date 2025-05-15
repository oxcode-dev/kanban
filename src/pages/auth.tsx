const AuthPage = () => {
    return (
        <>
            <div className="flex w-full justify-center h-screen bg-gray-200 py-8">
                <div className="border border-slate-200 shadow bg-white min-w-lg rounded-lg p-4">
                    <div className="p-4 sm:px-8 flex flex-col">
                        <div className="pb-8 pt-4">
                            <h2 className="font-bold text-3xl text-blue-600 drop-shadow">Kanban</h2>
                        </div>

                        {/* Login */}
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
                                <form className="space-y-3">
                                    <div className="relative">
                                        <label className="">Email</label>
                                        <input type="text" className="focus:outline-none border border-gray-400 shadow p-2 w-full rounded" />
                                    </div>
                                    <div className="py-1">
                                        <label>Password</label>
                                        <input type="password" className="focus:outline-none border border-gray-400 shadow p-2 w-full rounded" />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" />
                                            <label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">Remember for 30 days</label>
                                        </div>
                                        <a href="#">forgot password</a>
                                    </div>
                                    <div className="pt-5">
                                        <button className="bg-blue-600 text-white w-full p-2 text-lg rounded">
                                            Login
                                        </button>
                                    </div>

                                    <div className="inline-flex space-x-2 justify-center w-full">
                                        <span>
                                            Don't have an account?
                                        </span>
                                        <a href="#">
                                            Sign up
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthPage;
const AuthPage = () => {
    return (
        <>
            <div className="flex w-full justify-center h-screen bg-gray-200 py-8">
                <div className="border border-slate-200 shadow bg-white min-w-lg rounded-lg p-4">
                    <div className="p-4 sm:px-8 flex flex-col">
                        <div className="pb-8 pt-4">
                            <h2>Kanban</h2>
                        </div>

                        {/* Login */}
                        <div>
                            <div className="py-4 space-y-3">
                                <p className="text-base text-gray-500 font-medium">
                                    Please enter your details
                                </p>
                                <p className="font-bold text-3xl">
                                    Welcome Back
                                </p>
                            </div>

                            <div>
                                <form>
                                    <div className="relative">
                                        <label className="absolute">Email</label>
                                        <input />
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" />
                                            <label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">Remember for 30 days</label>
                                        </div>
                                        <a href="#">forgot password</a>
                                    </div>
                                    <div>
                                        <button className="bg-blue-600 text-white w-full p-2 text-lg">
                                            Login
                                        </button>
                                    </div>

                                    <div>
                                        <span>
                                            
                                        </span>
                                        <a href="#">

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
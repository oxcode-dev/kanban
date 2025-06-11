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
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthPage;
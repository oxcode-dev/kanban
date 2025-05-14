const AuthPage = () => {
    return (
        <>
            <div className="flex w-full justify-center h-screen bg-gray-200 py-8">
                <div className="border border-slate-200 shadow bg-white min-w-lg rounded-lg p-4">
                    <div className="">
                        <h2>Kanban</h2>
                    </div>

                    {/* Login */}
                    <div>
                        <div>
                            <p>
                                Please enter your details
                            </p>
                            <p>
                                Welcome Back
                            </p>
                        </div>

                        <div>
                            <form>
                                <div>
                                    <label>Email</label>
                                    <input />
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthPage;
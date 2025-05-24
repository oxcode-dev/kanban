const BacklogList = () => {
    return (
        <>
        
            <section className="py-1 my-4">
                <div className="w-full mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">

                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th className="px-6 align-middle border border-solid border-gray-300 text-gray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            <button>
                                                <span className="w-4 h-4 border border-gray-600 inline-flex rounded items-center justify-center cursor-pointer">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg> */}
                                                </span>
                                            </button>
                                        </th>
                                        <th className="px-6 align-middle border border-solid border-gray-300 text-gray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Title
                                        </th>
                                        <th className="px-6 align-middle border border-solid border-gray-300 text-gray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Status
                                        </th>
                                        <th className="px-6 align-middle border border-solid border-gray-300 text-gray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Priority
                                        </th>
                                        <th className="px-6 align-middle border border-solid border-gray-300 text-gray-600 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    { [1, 2, 3, 4, 5].map((number, key) => (
                                        <tr>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-gray-500 ">
                                                <button type="button">
                                                    <span className="w-4 h-4 border border-gray-600 inline-flex rounded items-center justify-center bg-gray-900 text-white cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                                                    </span>
                                                </button>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-gray-500 ">
                                                /argon/
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-gray-500 ">
                                                4,569
                                            </td>
                                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-gray-500">
                                                340
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-gray-500">
                                                46,53%
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BacklogList;
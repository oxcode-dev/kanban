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
                                            <div className="flex items-center">
                                                <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:outline-none h-4 w-4 rounded" />
                                            </div>
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
                                                <div className="flex items-center">
                                                    <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:outline-none h-4 w-4 rounded" />
                                                </div>
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
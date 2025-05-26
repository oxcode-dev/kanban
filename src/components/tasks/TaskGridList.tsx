import TaskCard from "./TaskCard"

const TaskGridList = () => {
    return (
        <>
            <div>
                <div className="bg-gray-100 my-4 max-w-xs rounded p-1">
                    <div className="inline-flex items-center justify-between w-full p-2">
                        <p>
                            Research
                        </p>

                        <button className="cursor-pointer inline-flex justify-center items-center bg-white rounded p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                        </button>
                    </div>

                    <div>
                        <div className="p-2 space-y-4">
                            {
                                Array.from('123456789', Number).map((item, key) => (
                                    <div>
                                        <TaskCard />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TaskGridList;
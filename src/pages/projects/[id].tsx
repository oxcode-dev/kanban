import BacklogList from "@/components/tasks/BacklogList";
import TaskList from "@/components/tasks/TaskList";
import DefaultLayout from "@/layout/default";

const ProjectTasks = () => {
    const navItems = [
        'Overview', 'Tasks', 'Backlogs', 'Comments'
    ]
    return (
        <>
            <DefaultLayout>
                <div className="mx-auto container">
                    <div className="py-4">
                        <h2 className="py-2 text-2xl font-semibold">Tasks Board</h2>
                        <p className="text-base text-gray-500">
                            Keep track of your tasks all in one place.
                        </p>
                    </div>

                    <div className="border-b border-gray-200 pt-4">
                        <div className="flex justify-between">
                            <div className="flex space-x-4 items-center">
                                {
                                    navItems.map((item, key) => (
                                        <div className="border-b-2 pb-3" key={key}>
                                            <span className="text-sm text-gray-500">
                                                {item}
                                            </span>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>

                    <div>
                        {/* <BacklogList /> */}
                        {/* <TaskList /> */}

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
                                    <div className="p-2">
                                        {/* Card */}
                                        <div className="bg-white p-2 shadow border border-gray-50">
                                            <div className="inline-flex justify-between items-center w-full">
                                                <p>
                                                    <span className="text-xs bg-gray-100 text-gray-600 inline-flex items-center space-x-1.5 p-0.5 px-1.5 rounded">
                                                        <span className="w-1.5 h-1.5 inline-flex bg-red-600 rounded-full"></span>
                                                        <span className="text-xs font-semibold">On Track</span>
                                                    </span>
                                                </p>

                                                <button className="cursor-pointer inline-flex justify-center items-center bg-white rounded p-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
                                                </button>
                                            </div>

                                            <div className="py-1">
                                                <p className="text-gray-500 font-semibold">
                                                    Writing an Articles on AI Technology
                                                </p>
                                                <p className="text-gray-500 font-light text-sm truncate">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam debitis animi qui cum eius suscipit aut neque! Suscipit, veritatis inventore. Excepturi illo facere rem corrupti neque blanditiis consectetur, nam culpa.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                   
                </div>
            </DefaultLayout>
        </>
    )
}

export default ProjectTasks;
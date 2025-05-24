import DefaultLayout from "@/layout/default";

const ProjectTasks = () => {
    const navItems = [
        'Overview', 'Tasks', 'Backlogs', 'Comments'
    ]
    return (
        <>
            <DefaultLayout>
                <div className="mx-auto container">
                    <h2>Tasks Board</h2>

                    <div className="border-b border-gray-200 py-4">
                        <div className="flex justify-between">
                            <div className="flex space-x-4">
                                {
                                    navItems.map((item, key) => (
                                        <div key={key}>
                                            {item}
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                   
                </div>
            </DefaultLayout>
        </>
    )
}

export default ProjectTasks;
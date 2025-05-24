import DefaultLayout from "@/layout/default";

const ProjectTasks = () => {
    const navItems = [
        'Overview', 'Tasks', 'Backlogs', 'Comments'
    ]
    return (
        <>
            <DefaultLayout>
                <div className="mx-auto container">
                    Hello World
                
                    <h2>Tasks Board</h2>

                    <div>
                        {
                            navItems.map((item, key) => (
                                <div key={key}>
                                    {item}
                                </div>
                            ))
                        }

                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}

export default ProjectTasks;
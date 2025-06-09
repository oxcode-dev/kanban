import BacklogList from "@/components/tasks/BacklogList";
import TaskList from "@/components/tasks/TaskList";
import DefaultLayout from "@/layout/default";
import TaskNav from "@/components/tasks/TaskNav";
import TaskBoard from "@/components/tasks/TaskBoard";

const ProjectTasks = () => {
   
    return (
        <>
            <DefaultLayout>
                <div className="mx-auto container">
                   <TaskNav />

                    <div className="pb-8">
                        {/* <BacklogList /> */}
                        {/* <TaskList /> */}

                        <TaskBoard />

                    </div>
                   
                </div>
            </DefaultLayout>
        </>
    )
}

export default ProjectTasks;
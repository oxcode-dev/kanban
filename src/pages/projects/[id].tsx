import BacklogList from "@/components/tasks/BacklogList";
import TaskCard from "@/components/tasks/TaskCard";
import TaskGridList from "@/components/tasks/TaskGridList";
import TaskList from "@/components/tasks/TaskList";
import DefaultLayout from "@/layout/default";
import { TaskProps, taskStatus, tasks } from "@/data/tasks";
import { useState } from "react";
import TaskNav from "@/components/tasks/TaskNav";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

const ProjectTasks = () => {
    const [allTasks, setAllTasks] = useState(tasks)
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event

        if(!over) return 

        const taskId = active.id as number
        const newStatus = over.id as TaskProps['status']

        setAllTasks(() => allTasks.map((task) => task.id === taskId ? {
            ...task, status: newStatus
        } : task))
    }
   
    return (
        <>
            <DefaultLayout>
                <div className="mx-auto container">
                   <TaskNav />

                    <div className="pb-8">
                        {/* <BacklogList /> */}
                        {/* <TaskList /> */}

                        <div className="flex space-x-4 w-full overflow-x-auto">
                            <DndContext onDragEnd={handleDragEnd}>
                                {
                                    taskStatus.map((status, key) => (
                                        <div key={key}>
                                            <TaskGridList tasks={allTasks} status={status} />
                                        </div>
                                    ))
                                }
                            </DndContext>
                        </div>

                    </div>
                   
                </div>
            </DefaultLayout>
        </>
    )
}

export default ProjectTasks;
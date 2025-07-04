'use client'
import { TaskProps } from "@/data/tasks"
import TaskCard from "./TaskCard"
import { useDroppable } from "@dnd-kit/core"

type StatusType = {
    id: number,
    title: string
}

type TaskGridListProps = {
    status: StatusType,
    tasks: TaskProps[],
}
const TaskGridList = ({ status, tasks } : TaskGridListProps) => {
    const {isOver, setNodeRef} = useDroppable({
        id: status.id
      });
    const style = {
        background: isOver ? 'white' : undefined,
        zIndex: -1,
    };
    const filteredTasks = tasks.filter(n => n.status === status.id)
    return (
        <>
            <div className="relative">
                <div className="bg-gray-100 my-4 max-w-xs min-w-xs rounded p-1 py-4 max-h-[500px] overflow-y-scroll">
                    <div className="inline-flex items-center justify-between w-full p-2">
                        <p>
                            { status?.title }
                        </p>

                        <button className="cursor-pointer inline-flex justify-center items-center bg-white rounded p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                        </button>
                    </div>

                    <div>
                        <div style={style} ref={setNodeRef} className="p-2 space-y-4">
                            {
                                filteredTasks.map((task, key) => (
                                    <div key={key}>
                                        <TaskCard task={task} />
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
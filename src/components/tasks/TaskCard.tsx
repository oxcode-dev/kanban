import { useDraggable } from "@dnd-kit/core"

type TaskProps = {
    id: number, 
    title: string,
    status: number,
}

type TaskListProps = {
    task: TaskProps,
}

const TaskCard = ({ task }: TaskListProps) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: task.id,
    })
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 1000,
    } : undefined;

    return (
        <>
            <div ref={setNodeRef} {...listeners} {...attributes} style={style} className="bg-white p-2 shadow border border-gray-50 rounded-lg relative z-50">
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
                    <p className="text-gray-500 font-semibold text-sm">
                        { task.title }
                    </p>
                    <p className="text-gray-500 font-light text-xs truncate">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam debitis animi qui cum eius suscipit aut neque! Suscipit, veritatis inventore. Excepturi illo facere rem corrupti neque blanditiis consectetur, nam culpa.
                    </p>
                </div>

                <div className="inline-flex justify-between items-center w-full pt-1">
                    <p className="inline-flex space-x-1 items-center text-xs text-gray-500">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" /></svg>
                        </span> 
                        <span>25 Mar 2023</span> 
                    </p>
                    <p>
                        <span className="text-xs bg-red-100 text-red-600 inline-flex items-center space-x-1.5 p-1 px-2 rounded-full">
                            <span className="text-xs">low</span>
                        </span>
                    </p>
                </div>
                <div className="border-t border-gray-200 mt-1 pt-1">
                    <div className="inline-flex space-x-1.5">
                        <span className="text-xs bg-green-100 text-green-600 inline-flex items-center p-0.5 px-2 rounded">
                            <span className="text-xs">Design</span>
                        </span>
                        <span className="text-xs bg-green-100 text-green-600 inline-flex items-center p-0.5 px-2 rounded">
                            <span className="text-xs">Food Processing</span>
                        </span>
                        <span className="text-xs bg-green-100 text-green-600 inline-flex items-center p-0.5 px-2 rounded">
                            <span className="text-xs">Web Application</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskCard;
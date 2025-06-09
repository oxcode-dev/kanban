const TaskBoard = () => {
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
        </>
    )
}

export default TaskBoard;
const TaskBoard = () => {
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
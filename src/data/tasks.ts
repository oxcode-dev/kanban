type TaskStatusProps = {
    id: number, 
    title: string,
}
export const taskStatus: TaskStatusProps[] = [
    { id: 1, title: "To Do",},
    { id: 2, title: "In Progress",},
    { id: 3, title: "Done",}
];

type TaskProps = {
    id: number, 
    title: string,
    status: number,
}

export const tasks: TaskProps[] = [
    { id: 101, title: "Write project proposal", status: 1 },
    { id: 102, title: "Design wireframes", status: 1 },
    { id: 103, title: "Create wireframes", status: 2 },
    { id: 103, title: "Create Low wireframes", status: 2 },
    { id: 104, title: "Set up project repo", status: 2},
    { id: 105, title: "Research feature ideas", status: 3 },
    { id: 106, title: "Write user stories", status: 3 },
]
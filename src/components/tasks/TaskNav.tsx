export default function TaskNav () {
    const navItems = [
        'Overview', 'Tasks', 'Backlogs', 'Comments'
    ]

    return (
        <>
            <div>
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
            </div>
        </>
    )
}
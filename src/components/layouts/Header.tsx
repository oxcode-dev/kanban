const Header = () => {
    return (
        <>
            <div className="bg-white py-6">
                <div className="flex mx-auto justify-between container">
                    <div>Kanban</div>
                    <div>
                        <nav>
                            <ul className="flex space-x-2 items-center">
                                <li>
                                    <a href="">notification</a>
                                </li>
                                <li>
                                    <a href="">user</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;

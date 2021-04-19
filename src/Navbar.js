const Navbar = () => {
    return (
        <div className="p-4">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link text-dark" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
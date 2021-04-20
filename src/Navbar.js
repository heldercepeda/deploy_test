const Navbar = () => {
    return (
        <div className="p-4 border bg-dark rounded-lg">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link text-light" href="/"><strong>Home</strong></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="/about"><strong>About</strong></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="/contact"><strong>Contact</strong></a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
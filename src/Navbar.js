const Navbar = () => {
    return (
        <div className="p-4">
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link text-dark" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="/contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
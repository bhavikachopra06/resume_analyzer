import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src="/images/logo.png" alt="HireScope Logo" className="h-[1.95rem] w-auto block" />
            </Link>
            <Link to="/upload" className="font-courier primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar

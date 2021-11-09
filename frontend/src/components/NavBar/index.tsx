import ImgDsDark from 'assets/img/ds-dark.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link to="/">
                        <img src={ImgDsDark} alt="DevSuperior" width="120" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="www.">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="ww.">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="www." id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="www.">Action</a></li>
                                    <li><a className="dropdown-item" href="www.">Another action</a></li>
                                    <li><a className="dropdown-item" href="www.">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

    );
}

export default NavBar;

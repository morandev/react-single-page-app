import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {

    /**
     * custom hook from react - navigation provider
     */
    const navigate = useNavigate();

    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/login">
            Login
    </NavLink>

    /**
     *  replace se usa para reemplazar el historial, 
     *  y evitar que al utilizar el boton de back del 
     *  navegador, se vuelva a la aplicacion
     */
    const handleLogout = () => {
        navigate('/login', {
            replace: true, 
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                        <NavLink className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`} to="/marvel">
                            Marvel
                        </NavLink>

                        <NavLink className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`} to="/dc">
                            DC
                        </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                        {/* <NavLink className={({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}`} to="/login">
                            Logout
                        </NavLink> */}
                        <span className="nav-item nav-link text-info">
                            Morandev
                        </span>
                        <button 
                            className="btn nav-item nav-link"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                </ul>
            </div>
        </nav>
    );
};

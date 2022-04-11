import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom';
function NavBar () {
    return (
        <div className="bg-dark bg-gradient text-white">
            <div className="container d-flex justify-content-between navBar p-0">
                <div className="pt-3 pb-3">
                    <Link to="/" className="itemNavBar"><span className="itemLogo">S</span>uple<span className="itemLogo">S</span>tore</Link>
                </div>
                <nav className="d-flex pb-3 pt-3">
                    <Link to="/productos/Definición" className="itemNavBar">DEFINICIÓN</Link>
                    <Link to="/productos/Energía" className="ms-5 itemNavBar">ENERGÍA</Link>
                    <Link to="/productos/Adelgazante" className="ms-5 itemNavBar">ADELGAZANTE</Link>
                    <Link to="CartContainer" className="ms-5 itemNavBar"><CartWidget /></Link>
                </nav>
            </div>
        </div>
    )
}
export default NavBar;
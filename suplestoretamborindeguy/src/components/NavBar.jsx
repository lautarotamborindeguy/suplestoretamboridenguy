import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom';
function NavBar () {
    const navegacion = [
        {
            name : "DEFINICIÓN",
            url : "/productos/Definición"
        },
        {
            name : "ENERGÍA",
            url : "/productos/Energía"
        },
        {
            name : "ADELGAZANTE",
            url : "/productos/Adelgazante"
        }
    ]
    return (
        <div className="bg-dark bg-gradient text-white">
            <div className="container d-flex justify-content-between navBar p-0">
                <div className="pt-3 pb-3">
                    <Link to="/" className="itemNavBar"><span className="itemLogo">S</span>uple<span className="itemLogo">S</span>tore</Link>
                </div>
                <nav className="d-flex pb-3 pt-3">
                    {navegacion.map(category=>(<Link to={`${category.url}`}className="ms-5 itemNavBar">{category.name}</Link>))}
                    <Link to={`CartContainer`}className="ms-5 itemNavBar"><CartWidget /></Link>
                </nav>
            </div>
        </div>
    )
}
export default NavBar;
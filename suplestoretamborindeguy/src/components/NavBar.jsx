import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
function NavBar () {
    let activeStyle = { color: '#ac2828', textDecoration: 'underline' };
    const navegacion = [
        {
            name : "DEFINICIÓN",
            url : "/productos/Definicion"
        },
        {
            name : "ENERGÍA",
            url : "/productos/Energia"
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
                    {navegacion.map(category=>(<NavLink to={`${category.url}`}  className="ms-5 itemNavBar" style={({ isActive }) => isActive ? activeStyle : undefined}>{category.name}</NavLink>))}
                    <NavLink to={`CartContainer`} className="ms-5 itemNavBar" style={({ isActive }) => isActive ? activeStyle : undefined}><CartWidget /></NavLink>
                </nav>
            </div>
        </div>
    )
}
export default NavBar;
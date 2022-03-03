import CartWidget from "./CartWidget";

function NavBar () {
    return (
        <div className="bg-dark bg-gradient text-white">
            <div className="container d-flex justify-content-between navBar p-0">
                <div className="pt-3 pb-3">
                    <a href="#" className="itemNavBar"><span className="itemLogo">S</span>uple<span className="itemLogo">S</span>tore</a>
                </div>
                <nav className="d-flex pb-3 pt-3">
                    <a href="#" className="itemNavBar">Suplementos</a>
                    <a href="#" className="ms-5 itemNavBar">Categorías</a>
                    <a href="#" className="ms-5 itemNavBar">Marcas</a>
                    <a href="#" className="ms-5 itemNavBar">Contacto</a>
                    <a href="#" className="ms-5 itemNavBar"><CartWidget /></a>
                </nav>
            </div>
        </div>
    )
}
export default NavBar;
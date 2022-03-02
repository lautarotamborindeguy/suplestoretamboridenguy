function NavBar () {
    return (
        <div className="bg-dark bg-gradient text-white">
            <div className="container d-flex justify-content-between navBar">
                <div className="pt-3 pb-3">
                    <a href="#" className="itemNavBar"><span className="itemLogo">S</span>uple<span className="itemLogo">S</span>tore</a>
                </div>
                <div className="d-flex pb-3 pt-3">
                    <a href="#" className="itemNavBar">Suplementos</a>
                    <a href="#" className="ms-5 itemNavBar">Categorías</a>
                    <a href="#" className="ms-5 itemNavBar">Marcas</a>
                    <a href="#" className="ms-5 itemNavBar">Contacto</a>
                </div>
            </div>
        </div>
    )
}
export default NavBar;
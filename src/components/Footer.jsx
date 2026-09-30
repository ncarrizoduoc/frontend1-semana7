function Footer() {
    return (
        <footer className="bg-dark text-white my-0 py-4">
            <div className="container text-start">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className="col py-3">
                        <h4 className="mb-3">Contáctanos:</h4>
                        <address>
                            <p>Teléfono: +56999999999</p>
                            <p>Correo: correofalso@gamestore.cl</p>
                        </address>
                    </div>
                    <div className="col py-3">
                        <h4 className="mb-3">Dirección</h4>
                        <address>
                            <p>Av. Calle 123</p>
                        </address>
                    </div>
                    <div className="col py-3">
                        <h4 className="mb-3">Horario de atención:</h4>
                        <p>Lun a vie: 10:00 a 18:30</p>
                        <p>Sáb: 11:00 a 19:00</p>
                    </div>
                    <div className="col py-3">
                        <h4 className="mb-3">Nuestras redes sociales:</h4>
                        <ul className="list-unstyled">
                            <li><a className="text-white text-decoration-none" href="https://www.instagram.com" target="_blank">Instagram</a></li>
                            <li><a className="text-white text-decoration-none" href="https://www.x.com" target="_blank">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <p className="fst-italic text-start mt-4 mb-0">@Gamestore. Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer
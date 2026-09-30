import godOfWarImage from "../assets/img/featured/god_of_war.jpg";
import marioOdysseyImage from "../assets/img/featured/mario_odyssey.jpg";
import simpsonsGameImage from "../assets/img/featured/simpsons_game.jpg";

function Carrusel() {
    return (
        <section id="productos-destacados" className="bg-light py-3">
            <div className="container-fluid px-0">
                <div className="container">
                    <div className="text-start mb-4">
                        <h2 className="fw-light">Productos destacados</h2>
                        <p className="lead">¡Echa un vistazo a nuestros productos más vendidos!</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-12">
                        <div id="carrusel-productos-destacados" className="carousel slide carousel-fade"
                            data-bs-ride="carousel" data-bs-interval="3000">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carrusel-productos-destacados" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carrusel-productos-destacados" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carrusel-productos-destacados" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={godOfWarImage} className="carousel-image d-block w-100"
                                        alt="Imagen del juego God of War"/>
                                        <div className="carousel-caption d-none d-md-block px-5 py-5">
                                            <h3 className="mb-5">God Of War (Playstation 4)</h3>
                                            <p className="px-5">¡Relanzamiento de la exitosa franquicia de Playstation!
                                                Habiendo consumado su venganza contra los dioses el Olimpo años atrás,
                                                Kratos ahora vive como un hombre en el reino de los dioses y los monstruos
                                                nórdicos.
                                                En este hostil e inhóspito mundo, debe pelear por sobrevivir... y enseñarle a su
                                                hijo a hacer lo mismo.</p>
                                            <a type="button" className="btn btn-primary text-light my-2" href="#">Ir al producto</a>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={simpsonsGameImage} className="carousel-image d-block w-100"
                                        alt="The Simpsons game"/>
                                        <div className="carousel-caption d-none d-md-block px-5 py-5">
                                            <h3 className="mb-5">The Simpsons Game (Playstation 2)</h3>
                                            <p className="px-5">¡Toma el control de la familia más famosa de Springfield!
                                                Homero, Bart, Marge, Lisa y Maggie descubren que son parte de un videojuego y
                                                deberán
                                                usar sus nuevas habilidades para salvar al mundo... o algo así.</p>
                                            <a type="button" className="btn btn-primary text-light my-2" href="#">Ir al producto</a>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={marioOdysseyImage} className="carousel-image d-block w-100"
                                        alt="Super Mario Odyssey"/>
                                        <div className="carousel-caption d-none d-md-block px-5 py-5">
                                            <h3 className="mb-5">Super Mario Odyssey</h3>
                                            <p className="px-5">¡No te pierdas la nueva aventura de Super Mario!
                                                Explora increíbles lugares lejos del reino Champiñón al unirte a Mario y su
                                                nuevo amigo Cappy
                                                en una increíble aventura en 3D.</p>
                                            <a type="button" className="btn btn-primary text-light my-2" href="#">Ir al producto</a>
                                        </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carrusel-productos-destacados"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carrusel-productos-destacados"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Carrusel
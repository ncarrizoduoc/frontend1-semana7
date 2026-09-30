import formatoMoneda from "../utils/formatoMoneda.js";
import productImages from "../utils/productImages.js";

function ProductCard({ producto, addToCart }) {
    const {
        sku:id,
        nombre,
        categoria,
        precio,
        precio_normal,
        descripcion,
    } = producto;

    const { src: imagen_src, alt: imagen_alt } = producto.imagen;
    const source = productImages[`../${imagen_src}`];

    return (
        <article className="col">
            <div className="card h-100 bg-light tarjeta-producto square-card rounded-4 p-3">
                <img src={source} className="card-img-top" alt={imagen_alt} />
                <div className="card-body">
                    <p className="card-header fw-bold text-primary mb-3">{categoria}</p>
                    <h5 className="card-title">{nombre}</h5>
                    <div>
                        <p className="card-text fw-light">
                            <del>{formatoMoneda.format(precio_normal)}</del>
                        </p>
                        <p className="card-text" id="precio">{formatoMoneda.format(precio)}</p>
                    </div>
                    <p className="card-text py-2">{descripcion}</p>
                    <div className="product-actions">
                        <a href="#" className="btn btn-light border-primary">Ir al producto</a>
                        <button onClick={() => addToCart(producto)} 
                            id={id} className="btn btn-primary boton-agregar-al-carro">Agregar al carro</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductCard
import formatoMoneda from "../utils/formatoMoneda.js";
import productImages from "../utils/productImages.js";

function CarritoCard({ item, removeFromCart }) {
    const {
        itemId: id,
        nombre,
        categoria,
        precio,
        precio_normal,
        descripcion,
    } = item;

    const { src: imagen_src, alt: imagen_alt } = item.imagen;
    const source = productImages[`../${imagen_src}`];

    return (
        <li className="list-group-item d-flex align-items-center gap-3 bg-light">
            <img src={source} className="img-thumbnail"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
                alt={imagen_alt}/>
                <div className="flex-grow-1">
                    <h5 className="mb-1">{nombre}</h5>
                    <p className="mb-1 text-muted">{categoria}</p>
                    <p className="mb-0">Precio: {formatoMoneda.format(precio)}</p>
                </div>
                <button onClick={() => removeFromCart(id)} type="button" className="btn btn-danger boton-eliminar">Eliminar</button>
        </li>
    )

}

export default CarritoCard;
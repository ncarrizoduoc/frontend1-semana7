import formatoMoneda from "../utils/formatoMoneda.js";

const CarritoTotal= ({cart}) => {
    const total = cart.reduce((sum, item) => sum + item.precio, 0);
    return <h3>Total: {formatoMoneda.format(total)}</h3>;
}

export default CarritoTotal;
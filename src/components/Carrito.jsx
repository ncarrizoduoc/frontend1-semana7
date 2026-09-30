import CarritoTotal from "./CarritoTotal.jsx";
import CarritoCard from "./CarritoCard.jsx";
import CarritoCantidad from "./CarritoCantidad.jsx";

function Cart({ cart, removeFromCart }) {

    return (
        <section className="container col my-3">
            <div className="d-flex justify-content-between align-items-center my-4">
                <h1 className="mb-0 ">Carrito de compras</h1>
            </div>
            {cart.length === 0 ? (
                <p id="texto-carrito-vacio">Tu carrito está vacío.</p>
            ) : (
                <div className="row g-4">
                    <ul id="carrito-compras" className="list-group col-12 col-lg-8 mb-3">
                        {cart.map((item) => (
                            <CarritoCard key={item.itemId} item={item} removeFromCart={removeFromCart}/>
                        ))}
                    </ul>
                    <div className="col-12 col-lg-4">
                        <CarritoCantidad cart={cart} />
                        <CarritoTotal cart={cart}/>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Cart;
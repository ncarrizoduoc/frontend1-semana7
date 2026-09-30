const formatoMoneda = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0
});

export default formatoMoneda;
const productImages = import.meta.glob("../assets/img/products/*", {
    eager: true,
    query: "?url",
    import: "default",
});

export default productImages;
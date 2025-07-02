// =================== PRODUCTOS ===================
const productos = [
    // Camisas
    {
        id: "camisa-1",
        titulo: "Camisa Casual Azul",
        imagen: [
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 1200,
        descuento: 10,
        informacion: ["Algodón 100%", "Manga larga", "Slim fit"],
        envio: "Envío Gratis",
        stock: 15,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-2",
        titulo: "Camisa Blanca Elegante",
        imagen: [
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 1350,
        descuento: 15,
        informacion: ["Poliéster", "Manga larga", "Regular fit"],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-3",
        titulo: "Camisa Cuadros Rojos",
        imagen: [
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 1100,
        descuento: 5,
        informacion: ["Algodón", "Manga corta", "Cuadros"],
        envio: "Envío Gratis",
        stock: 20,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-4",
        titulo: "Camisa Negra Formal",
        imagen: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b",
            "https://images.unsplash.com/photo-1526178613658-3f1622045557"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 1450,
        descuento: 20,
        informacion: ["Poliéster", "Manga larga", "Formal"],
        envio: "Envío Gratis",
        stock: 12,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-5",
        titulo: "Camisa Verde Militar",
        imagen: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 1250,
        descuento: 12,
        informacion: ["Algodón", "Manga corta", "Casual"],
        envio: "Envío Gratis",
        stock: 18,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-6",
        titulo: "Camisa Denim",
        imagen: [
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 1300,
        descuento: 8,
        informacion: ["Denim", "Manga larga", "Casual"],
        envio: "Envío Gratis",
        stock: 14,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-7",
        titulo: "Camisa Rosa Pastel",
        imagen: [
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 1400,
        descuento: 10,
        informacion: ["Algodón", "Manga larga", "Color pastel"],
        envio: "Envío Gratis",
        stock: 16,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-8",
        titulo: "Camisa Slim Fit Celeste",
        imagen: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 1500,
        descuento: 18,
        informacion: ["Algodón", "Slim fit", "Celeste"],
        envio: "Envío Gratis",
        stock: 11,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-9",
        titulo: "Camisa Rayas Azul",
        imagen: [
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 1270,
        descuento: 7,
        informacion: ["Algodón", "Rayas", "Manga larga"],
        envio: "Envío Gratis",
        stock: 13,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "camisa-10",
        titulo: "Camisa Estampada Tropical",
        imagen: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1526178613658-3f1622045557"
        ],
        categoria: { nombre: "Camisas", id: "camisas" },
        precio: 1600,
        descuento: 22,
        informacion: ["Poliéster", "Estampado tropical", "Manga corta"],
        envio: "Envío Gratis",
        stock: 9,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },

    // Suéters
    {
        id: "sueter-1",
        titulo: "Suéter Ligero Gris",
        imagen: [
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 1800,
        descuento: 10,
        informacion: ["Acrílico", "Gris claro", "Manga larga"],
        envio: "Envío Gratis",
        stock: 15,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-2",
        titulo: "Suéter Cuello Alto Negro",
        imagen: [
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 2000,
        descuento: 12,
        informacion: ["Lana", "Negro", "Cuello alto"],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-3",
        titulo: "Suéter Abierto Beige",
        imagen: [
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 1700,
        descuento: 8,
        informacion: ["Algodón", "Beige", "Manga larga"],
        envio: "Envío Gratis",
        stock: 20,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-4",
        titulo: "Suéter Rayas Azul y Blanco",
        imagen: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b",
            "https://images.unsplash.com/photo-1526178613658-3f1622045557"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 1900,
        descuento: 15,
        informacion: ["Poliéster", "Rayas", "Manga larga"],
        envio: "Envío Gratis",
        stock: 12,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-5",
        titulo: "Suéter Verde Olivo",
        imagen: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 1800,
        descuento: 10,
        informacion: ["Acrílico", "Verde olivo", "Manga larga"],
        envio: "Envío Gratis",
        stock: 18,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-6",
        titulo: "Suéter Negro Clásico",
        imagen: [
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 2000,
        descuento: 8,
        informacion: ["Lana", "Negro", "Manga larga"],
        envio: "Envío Gratis",
        stock: 14,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-7",
        titulo: "Suéter Rosa Pastel",
        imagen: [
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 1900,
        descuento: 10,
        informacion: ["Algodón", "Manga larga", "Color pastel"],
        envio: "Envío Gratis",
        stock: 16,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-8",
        titulo: "Suéter Slim Fit Celeste",
        imagen: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 2100,
        descuento: 18,
        informacion: ["Algodón", "Slim fit", "Celeste"],
        envio: "Envío Gratis",
        stock: 11,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-9",
        titulo: "Suéter Rayas Azul",
        imagen: [
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 1970,
        descuento: 7,
        informacion: ["Algodón", "Rayas", "Manga larga"],
        envio: "Envío Gratis",
        stock: 13,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: "sueter-10",
        titulo: "Suéter Estampado Tropical",
        imagen: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1526178613658-3f1622045557"
        ],
        categoria: { nombre: "Suéters", id: "sueters" },
        precio: 2200,
        descuento: 22,
        informacion: ["Poliéster", "Estampado tropical", "Manga corta"],
        envio: "Envío Gratis",
        stock: 9,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    },

    // Pantalones
    {
        id: "pantalon-1",
        titulo: "Pantalón Jeans Azul",
        imagen: [
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 2200,
        descuento: 10,
        informacion: ["Denim", "Azul clásico", "Corte recto"],
        envio: "Envío Gratis",
        stock: 15,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-2",
        titulo: "Pantalón Chino Beige",
        imagen: [
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 2100,
        descuento: 12,
        informacion: ["Algodón", "Beige", "Slim fit"],
        envio: "Envío Gratis",
        stock: 12,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-3",
        titulo: "Pantalón Jogger Negro",
        imagen: [
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 1800,
        descuento: 15,
        informacion: ["Poliéster", "Negro", "Jogger"],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-4",
        titulo: "Pantalón Cargo Verde",
        imagen: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1526178613658-3f1622045557"
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 2300,
        descuento: 18,
        informacion: ["Algodón", "Verde militar", "Cargo"],
        envio: "Envío Gratis",
        stock: 9,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-5",
        titulo: "Pantalón Deportivo Gris",
        imagen: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 1700,
        descuento: 10,
        informacion: ["Poliéster", "Gris", "Deportivo"],
        envio: "Envío Gratis",
        stock: 14,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-6",
        titulo: "Pantalón Formal Negro",
        imagen: [
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 2500,
        descuento: 20,
        informacion: ["Poliéster", "Negro", "Formal"],
        envio: "Envío Gratis",
        stock: 8,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-7",
        titulo: "Pantalón Slim Fit Azul",
        imagen: [
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 2000,
        descuento: 14,
        informacion: ["Denim", "Azul", "Slim fit"],
        envio: "Envío Gratis",
        stock: 11,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-8",
        titulo: "Pantalón Cargo Marrón",
        imagen: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 2100,
        descuento: 12,
        informacion: ["Algodón", "Marrón", "Cargo"],
        envio: "Envío Gratis",
        stock: 10,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-9",
        titulo: "Pantalón Jogger Azul",
        imagen: [
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 1850,
        descuento: 10,
        informacion: ["Poliéster", "Azul", "Jogger"],
        envio: "Envío Gratis",
        stock: 13,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    },
    {
        id: "pantalon-10",
        titulo: "Pantalón Chino Negro",
        imagen: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1526178613658-3f1622045557"
        ],
        categoria: { nombre: "Pantalones", id: "pantalones" },
        precio: 2150,
        descuento: 15,
        informacion: ["Algodón", "Negro", "Chino"],
        envio: "Envío Gratis",
        stock: 9,
        proveedor: "Tienda Oficial",
        tallas: ["28", "30", "32", "34", "36"]
    }
];

// Agrega productos de niño, mujer, hombre, niña
for(let i=1; i<=10; i++) {
    productos.push({
        id: `nino-${i}`,
        titulo: `Ropa de Niño ${i}`,
        imagen: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9"
        ],
        categoria: { nombre: "Ropa de Niño", id: "ropa-nino" },
        precio: 900 + i*50,
        descuento: 5 + i,
        informacion: ["Algodón", "Colores variados", "Tallas infantiles"],
        envio: "Envío Gratis",
        stock: 10 + i,
        proveedor: "Tienda Oficial",
        tallas: ["2", "4", "6", "8", "10"]
    });
}
for(let i=1; i<=10; i++) {
    productos.push({
        id: `mujer-${i}`,
        titulo: `Ropa de Mujer ${i}`,
        imagen: [
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
        ],
        categoria: { nombre: "Ropa de Mujer", id: "ropa-mujer" },
        precio: 1500 + i*80,
        descuento: 8 + i,
        informacion: ["Moda mujer", "Colores variados", "Tallas S-XL"],
        envio: "Envío Gratis",
        stock: 8 + i,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    });
}
for(let i=1; i<=10; i++) {
    productos.push({
        id: `hombre-${i}`,
        titulo: `Ropa de Hombre ${i}`,
        imagen: [
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        ],
        categoria: { nombre: "Ropa de Hombre", id: "ropa-hombre" },
        precio: 1600 + i*70,
        descuento: 7 + i,
        informacion: ["Moda hombre", "Colores variados", "Tallas S-XL"],
        envio: "Envío Gratis",
        stock: 9 + i,
        proveedor: "Tienda Oficial",
        tallas: ["S", "M", "L", "XL"]
    });
}
for(let i=1; i<=10; i++) {
    productos.push({
        id: `nina-${i}`,
        titulo: `Ropa de Niña ${i}`,
        imagen: [
            "https://images.unsplash.com/photo-1526178613658-3f1622045557",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
        ],
        categoria: { nombre: "Ropa de Niña", id: "ropa-nina" },
        precio: 950 + i*55,
        descuento: 6 + i,
        informacion: ["Algodón", "Colores variados", "Tallas infantiles"],
        envio: "Envío Gratis",
        stock: 11 + i,
        proveedor: "Tienda Oficial",
        tallas: ["2", "4", "6", "8", "10"]
    });
}

// =================== TIENDA EN LÍNEA ===================
document.addEventListener('DOMContentLoaded', function() {
    const usuario = JSON.parse(localStorage.getItem('usuario_registrado'));
    const nombreUsuario = document.getElementById('nombre-usuario');
    const userMenu = document.getElementById('user-menu');

    const infoUser = document.querySelector('.info-user');

    if (infoUser) {
        if (usuario && usuario.usuario) {
            // Si hay usuario logueado, muestra solo el menú de usuario
            infoUser.innerHTML = `
                <div class="user-dropdown">
                    <button class="user-btn">
                        <i class="bi bi-person-circle"></i> ${usuario.usuario} <i class="bi bi-caret-down-fill"></i>
                    </button>
                    <div class="user-menu">
                        <a href="mis-datos.html"><i class="bi bi-person-lines-fill"></i> Mi cuenta</a>
                        ${usuario.usuario === "admin" ? `<a href="admin.html"><i class="bi bi-shield-lock"></i> Panel Admin</a>` : ""}
                        <a href="#" id="cerrar-sesion"><i class="bi bi-box-arrow-right"></i> Cerrar sesión</a>
                    </div>
                </div>
                <a href="#">Mis Compras</a>
                <a href="carrito.html">
                    <i class="bi bi-cart icono-carrito"></i>
                    <span class="num-en-carrito" id="num-en-carrito">0</span>
                </a>
            `;
            document.getElementById('cerrar-sesion').onclick = function(e) {
                e.preventDefault();
                localStorage.removeItem('usuario_registrado');
                window.location.reload();
            };

            // Dropdown toggle
            const userBtn = infoUser.querySelector('.user-btn');
            const userMenu = infoUser.querySelector('.user-menu');
            userBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                userMenu.classList.toggle('show');
            });
            document.addEventListener('click', function() {
                userMenu.classList.remove('show');
            });
        } else {
            // Si NO hay usuario logueado, muestra los botones de crear cuenta e ingresar
            infoUser.innerHTML = `
                <a href="login.html">Creá tu cuenta</a>
                <a href="login.html">Ingresá</a>
                <a href="#">Mis Compras</a>
                <a href="carrito.html">
                    <i class="bi bi-cart icono-carrito"></i>
                    <span class="num-en-carrito" id="num-en-carrito">0</span>
                </a>
            `;
        }
    }

    if (usuario && usuario.usuario) {
        nombreUsuario.textContent = usuario.usuario;

        let menuHtml = `
            <a href="mis-datos.html"><i class="bi bi-person-lines-fill"></i> Mi cuenta</a>
        `;
        if (usuario.usuario === "admin") {
            menuHtml += `
                <a href="admin.html"><i class="bi bi-shield-lock"></i> Panel Admin</a>
            `;
        }
        menuHtml += `
            <a href="#" id="cerrar-sesion"><i class="bi bi-box-arrow-right"></i> Cerrar sesión</a>
        `;
        userMenu.innerHTML = menuHtml;

        document.getElementById('cerrar-sesion').onclick = function(e) {
            e.preventDefault();
            localStorage.removeItem('usuario_registrado');
            window.location.reload();
        };
    } else {
        nombreUsuario.textContent = "Invitado";
        userMenu.innerHTML = `
            <a href="login.html"><i class="bi bi-box-arrow-in-right"></i> Ingresá</a>
            <a href="login.html"><i class="bi bi-person-plus"></i> Creá tu cuenta</a>
        `;
    }
});

// Mostrar usuario/admin logueado en el header de TODAS las páginas
document.addEventListener('DOMContentLoaded', function() {
    const infoUser = document.getElementById('info-user-header');
    const usuario = JSON.parse(localStorage.getItem('usuario_registrado'));

    if (infoUser) {
        if (usuario && usuario.usuario) {
            infoUser.innerHTML = `
                <div class="user-dropdown">
                    <button class="user-btn">
                        <i class="bi bi-person-circle"></i> ${usuario.usuario} <i class="bi bi-caret-down-fill"></i>
                    </button>
                    <div class="user-menu">
                        <a href="mis-datos.html"><i class="bi bi-person-lines-fill"></i> Mi cuenta</a>
                        ${usuario.usuario === "admin" ? `<a href="admin.html"><i class="bi bi-shield-lock"></i> Panel Admin</a>` : ""}
                        <a href="#" id="cerrar-sesion"><i class="bi bi-box-arrow-right"></i> Cerrar sesión</a>
                    </div>
                </div>
                <a href="#">Mis Compras</a>
                <a href="carrito.html">
                    <i class="bi bi-cart icono-carrito"></i>
                    <span class="num-en-carrito" id="num-en-carrito">0</span>
                </a>
            `;
            document.getElementById('cerrar-sesion').onclick = function(e) {
                e.preventDefault();
                localStorage.removeItem('usuario_registrado');
                window.location.reload();
            };

            // Dropdown toggle
            const userBtn = infoUser.querySelector('.user-btn');
            const userMenu = infoUser.querySelector('.user-menu');
            userBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                userMenu.classList.toggle('show');
            });
            document.addEventListener('click', function() {
                userMenu.classList.remove('show');
            });
        } else {
            infoUser.innerHTML = `
                <a href="login.html">Creá tu cuenta</a>
                <a href="login.html">Ingresá</a>
                <a href="#">Mis Compras</a>
                <a href="carrito.html">
                    <i class="bi bi-cart icono-carrito"></i>
                    <span class="num-en-carrito" id="num-en-carrito">0</span>
                </a>
            `;
        }
    }
});

// Función para mostrar productos en la página principal
// Función para mostrar productos (recibe array de productos)
function mostrarProductos(productosAMostrar) {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = '';

    if (!Array.isArray(productosAMostrar) || productosAMostrar.length === 0) {
        contenedor.innerHTML = '<p>No hay productos disponibles.</p>';
        return;
    }

    productosAMostrar.forEach(producto => {
        const imagenSrc = (producto.imagen && producto.imagen.length > 0) ? producto.imagen[0] : 'ruta/a/imagen-por-defecto.jpg';
        const descuentoHtml = producto.descuento ? `<span class="descuento">${producto.descuento}% OFF</span>` : '';

        contenedor.innerHTML += `
            <div class="producto" data-id="${producto.id}" style="cursor:pointer;">
                <img class="producto-imagen" src="${imagenSrc}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <span class="producto-precio">$${producto.precio}</span>
                    ${descuentoHtml}
                    <span class="producto-tipo-envio">${producto.envio}</span>
                </div>
            </div>
        `;
    });

    // Evento delegado para click en producto
    contenedor.onclick = function(e) {
        const card = e.target.closest('.producto');
        console.log("Click en producto:", card);

        if (card) {
            const id = card.getAttribute('data-id');
            console.log("ID del producto clicado:", id);

            const productoSeleccionado = obtenerProductosParaMostrar().find(p => p.id == id);
            console.log("Producto encontrado:", productoSeleccionado);

            if (productoSeleccionado) {
                localStorage.setItem("producto_seleccionado", JSON.stringify(productoSeleccionado));

                // 👇 Aquí está la línea que preguntaste:
                console.log("Guardado en localStorage:", localStorage.getItem("producto_seleccionado"));

                window.location.href = "ordenar-producto.html";
            } else {
                alert("Producto no encontrado.");
            }
    }
}
    

}
// Función para filtrar productos por categoría
function filtrarProductos(categoria) {
    const productosMostrar = obtenerProductosParaMostrar();
    let productosFiltrados = [];

    if (categoria === 'todos') {
        productosFiltrados = productosMostrar;
    } else {
        productosFiltrados = productosMostrar.filter(p => {
            if (typeof p.categoria === "string") {
                return p.categoria === categoria;
            }
            return p.categoria.id === categoria;
        });
    }
    mostrarProductos(productosFiltrados);

    const tituloSeccion = document.getElementById('titulo-seccion');
    if (tituloSeccion) {
        tituloSeccion.textContent = categoria === 'todos' ? 'Todos los productos' : categoria.charAt(0).toUpperCase() + categoria.slice(1);
    }
}

// Obtener productos desde localStorage o array por defecto, asegurando id único y categoría consistente
function obtenerProductosParaMostrar() {
    const productosAdmin = JSON.parse(localStorage.getItem('productos_admin'));
    if (productosAdmin && Array.isArray(productosAdmin) && productosAdmin.length > 0) {
        return productosAdmin.map((p, idx) => ({
            ...p,
            id: p.id || `admin-prod-${idx}`, 
            categoria: typeof p.categoria === "string"
                ? { nombre: p.categoria.charAt(0).toUpperCase() + p.categoria.slice(1), id: p.categoria }
                : p.categoria
        }));
    }
    return productos.map((p, idx) => ({
        ...p,
        id: p.id || `prod-${idx}`
    }));
}

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const index = carrito.findIndex(item => item.id === producto.id);

    if (index !== -1) {
        carrito[index].cantidad = (carrito[index].cantidad || 1) + 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarNumeroCarrito();
}

// Actualiza el número de productos en el carrito
function actualizarNumeroCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const num = carrito.reduce((acc, prod) => acc + (prod.cantidad || 1), 0);
    const badge = document.getElementById('num-en-carrito');
    if (badge) badge.textContent = num;
}

document.addEventListener('DOMContentLoaded', () => {
    // Mostrar todos los productos al cargar
    if (typeof productos !== 'undefined' && productos.length > 0) {
        filtrarProductos('todos');

        // Activar botón 'todos' si existe
        const botonTodos = document.getElementById('todos');
        if (botonTodos) {
            botonTodos.classList.add('active');
        }
    } else {
        mostrarProductos([]);
    }

    // Manejar botones de categoría
    const botonesCategoria = document.querySelectorAll('.boton-categoria');
    botonesCategoria.forEach(boton => {
        boton.addEventListener('click', function() {
            // Quitar clase active de todos
            botonesCategoria.forEach(b => b.classList.remove('active'));
            // Agregar clase active al actual
            this.classList.add('active');
            // Filtrar según id
            filtrarProductos(this.id);
        });
    });

    // Inicializar número del carrito
    actualizarNumeroCarrito();

    // Agregar eventos a botones de agregar al carrito (si los hay)
    document.querySelectorAll('.btn-agregar-carrito').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            const producto = obtenerProductosParaMostrar().find(p => p.id == id);
            if (producto) agregarAlCarrito(producto);
        });
    });
});

// =================== PRODUCTOS ===================
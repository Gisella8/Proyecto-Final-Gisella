//CATÁLOGO DE PRODUCTOS
const productos=[
    //Postres
    {
        id:"Postre01",
        titulo:"Frutos rojos",
        imagen:"https://cloudfront-us-east-1.images.arcpublishing.com/copesa/HFJCF6L62RCANBA73VSC54DROM.png",
        categoria:{
            nombre:"Frutos Rojos",
            id:"frutos rojos"
        },
        precio:6500
    },

    {
        id:"Postre02",
        titulo:"Maracuyá",
        imagen:"https://cdn.colombia.com/gastronomia/2013/02/08/pastel-de-maracuya-3076.jpg",
        categoria:{
            nombre:"Maracuyá",
            id:"maracuya"
        },
        precio:7000
    },

    {
        id:"Postre03",
        titulo:"Arequipe",
        imagen:"https://www.elespectador.com/resizer/v2/7C3YKVW5HRDZDEGU5AUNIHRGDU.jpg?auth=6f8512057eb82c7b0f4a8cbf93fd5953e513609e80776e2b0943d928f114ab20&width=920&height=613&smart=true&quality=60",
        categoria:{
            nombre:"Arequipe",
            id:"arequipe"
        },
        precio:6500
    },

        {
        id:"Tres leches",
        titulo:"Dulce",
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92Aw3MLLP2_yPrqB0wKdCJ8n6swY8NTwjQg&s",
        categoria:{
            nombre:"Tres Leches",
            id:"tres leches"
        },
        precio :6500
    }

];

//Código de programación JS

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {


    contenedorProductos.innerHTML = "";


    productosElegidos.forEach(producto => {


        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;


        contenedorProductos.append(div);
    })


    actualizarBotonesAgregar();
}


cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {


        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");


        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }


    })
});


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");


    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


let productosEnCarrito;


let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);


    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }


    actualizarNumerito();


    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}


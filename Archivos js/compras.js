document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        {
            id: 1,
            nombre: "Producto 1",
            precio: 10.00,
        },
        {
            id: 2,
            nombre: "Producto 2",
            precio: 15.00,
        },
        // Agrega más productos según tu catálogo
    ];

    const carrito = [];

    const carritoContainer = document.getElementById("carrito");
    const totalElement = document.getElementById("total");
    const comprarBtn = document.getElementById("comprarBtn");

    function actualizarCarrito() {
        carritoContainer.innerHTML = ""; // Limpia el carrito

        let total = 0;

        carrito.forEach((item) => {
            const producto = productos.find((p) => p.id === item.id);

            const itemElement = document.createElement("div");
            itemElement.className = "col-12 mb-3";

            itemElement.innerHTML = `
                <div class="row">
                    <div class="col-3"><img src="imagen-producto.jpg" alt="${producto.nombre}" class="img-fluid"></div>
                    <div class="col-3">${producto.nombre}</div>
                    <div class="col-3"><input type="number" class="form-control" value="${item.cantidad}"></div>
                    <div class="col-2">$${producto.precio.toFixed(2)}</div>
                    <div class="col-1"><button class="btn btn-danger">Eliminar</button></div>
                </div>
            `;

            carritoContainer.appendChild(itemElement);

            total += item.cantidad * producto.precio;
        });

        totalElement.textContent = total.toFixed(2);
    }

    // Evento para agregar un producto al carrito
    function agregarAlCarrito(id) {
        const item = carrito.find((i) => i.id === id);

        if (item) {
            item.cantidad++;
        } else {
            carrito.push({ id, cantidad: 1 });
        }

        actualizarCarrito();
    }

    // Evento para eliminar un producto del carrito
    function eliminarDelCarrito(id) {
        const index = carrito.findIndex((i) => i.id === id);

        if (index !== -1) {
            const item = carrito[index];

            if (item.cantidad > 1) {
                item.cantidad--;
            } else {
                carrito.splice(index, 1);
            }

            actualizarCarrito();
        }
    }

    // Escuchar eventos de compra y eliminación
    comprarBtn.addEventListener("click", () => {
        // Aquí puedes implementar la lógica para finalizar la compra
        alert("Compra realizada. Total: $" + totalElement.textContent);
    });

    carritoContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-danger")) {
            const id = e.target.parentElement.parentElement.querySelector(".img-fluid").alt;
            eliminarDelCarrito(id);
        }
    });

    // Inicializa el carrito
    actualizarCarrito();
});

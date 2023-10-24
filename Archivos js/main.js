// Función para navegar a una página
function navigateTo(page) {
    window.location.href = page;
}

// Función para resaltar el botón seleccionado y deseleccionar los demás
function highlightButton(buttonId) {
    const buttons = document.querySelectorAll(".menu-btn");
    buttons.forEach((button) => {
        button.classList.remove("selected");
    });
    document.getElementById(buttonId).classList.add("selected");
}

// Función para buscar productos (puedes personalizarla según tus necesidades)
function searchProduct() {
    const searchTerm = document.getElementById("searchInput").value;
    // Aquí puedes realizar la búsqueda y redirigir a la página de resultados, por ejemplo:
    navigateTo(`busqueda.html?query=${searchTerm}`);
}

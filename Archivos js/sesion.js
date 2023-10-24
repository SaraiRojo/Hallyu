// Simulación de inicio de sesión y registro (para demostración)
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    // Aquí debes realizar la lógica real de inicio de sesión
    alert(`Iniciando sesión con: \nCorreo Electrónico: ${email}\nContraseña: ${password}`);
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    // Aquí debes realizar la lógica real de registro de usuario
    alert(`Registrando usuario: \nNombre de Usuario: ${username}\nCorreo Electrónico: ${email}\nContraseña: ${password}`);
});

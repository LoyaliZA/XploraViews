// Selecciona todos los elementos con la clase .menu-item
const menuItems = document.querySelectorAll('.menu-item');

// Agrega un evento de clic a cada elemento de menú
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Elimina la clase 'active' de todos los elementos
        menuItems.forEach(item => item.classList.remove('active'));

        // Agrega la clase 'active' solo al elemento clicado
        this.classList.add('active');
    });
});

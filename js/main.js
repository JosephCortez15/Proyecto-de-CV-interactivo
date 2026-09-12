const btnTema = document.getElementById('btn-tema');
const htmlElement = document.documentElement;

btnTema.addEventListener('click', function() {
    const temaActual = htmlElement.getAttribute('data-theme');
    if (temaActual === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        btnTema.textContent = 'Modo Oscuro';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        btnTema.textContent = 'Modo Claro';
    }
});

const formulario = document.getElementById('form-contacto');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        const nombre = document.getElementById('nombre').value;
        const motivo = document.getElementById('motivo').value;
        const mensaje = document.getElementById('mensaje').value;
        if (nombre.trim() === '') {
            evento.preventDefault();
            alert('Por favor, ingresa un nombre válido (no solo espacios en blanco).');
            return;
        }
        if (motivo === '') {
            evento.preventDefault();
            alert('Es necesario que selecciones un motivo de contacto en la lista.');
            return;
        }
        if (mensaje.trim().length < 10) {
            evento.preventDefault();
            alert('Tu mensaje es muy corto, por favor detalla un poco más tu consulta.');
            return;
        }
        alert('Validación exitosa. ¡Tu mensaje se ha preparado para envío!');
    });
}
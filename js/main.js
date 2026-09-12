
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', function(){
    document.body.classList.toggle('Modo oscuro');

    if(document.body.classList.contains('Modo oscuro')){
        btnTema.textContent = 'Modo claro';
    } else {
        btnTema .textContent = 'Modo oscuro'
    }
});

const formulario = document.getElementById('form-contacto');

if(formulario){
    formulario.addEventListener('submit', function(evento){
        const nombre = document.getElementById('nombre').value;
        const motivo = document.getElementById('asunto').value;

        if(nombre.trim() == ''){
            evento.preventDefault();
            alert('Por favor, ingrese un nombre valido');
            return;
        }

        if(motivo === ''){
            evento.preventDefault();
            alert('Por favor, seleccione un motivo de contacto');
            return;
        }

        alert('Formulario valido correctamente. Gracias por su mensaje')
    });
}
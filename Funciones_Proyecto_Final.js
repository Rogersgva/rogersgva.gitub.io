

document.getElementById('boton_color').addEventListener('click', function() {

    document.body.style.backgroundColor = 'rgb(183, 219, 228)';
})

document.getElementById('boton_default').addEventListener('click', function() {

    document.body.style.backgroundColor = 'white';
})

document.getElementById('boton_ocultar').addEventListener('click', function() {

    document.getElementById('demo').style.display = 'none';
})
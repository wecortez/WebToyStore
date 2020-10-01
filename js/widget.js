$(document).ready(function(){
    $('#form-usu').fadeOut();
})

function efecto(){
    $('#form-usu').fadeToggle(1000);
}

document.getElementById('desplegar').addEventListener('click',function(){
    efecto();
});
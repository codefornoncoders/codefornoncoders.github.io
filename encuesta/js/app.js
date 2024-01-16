const ID_CONTENEDOR_RESPUESTA = 'scResultados'


function guardarDatos(){

    limpiarRespuesta()

    let vNombre = validaNombre()
    let vCorreo = validaCorreo()
    let vGenero = validaGenero()

    if(vNombre && vCorreo && vGenero){
        reportaExito("Guardado!")
    }
}

function validaNombre(){
    let nombre = obtenerValor('txtNombre')
    if(nombre == ""){
        reportaError("Escribe un Nombre")
        return false
    }

    return true
}

function validaCorreo(){
    let correo = obtenerValor('txtCorreo')

    if(correo == ""){
        reportaError("Escribe un Correo")
        return false
    }

    if(!correo.includes("@")){
        reportaError("Escribe un correo valida con formato @")
        return false
    }

    return true
}

function validaGenero(){
    let genero = document.querySelector('input[name="rdoGenero"]:checked');

    if(genero == null || (
        genero.value != "m" &&
        genero.value != "f" &&
        genero.value != "o")){
            reportaError("Selecciona un genero válido")
            return false
        }

    return true
}

function limpiarRespuesta(){
    let contenedorRespuesta = document.getElementById(ID_CONTENEDOR_RESPUESTA);
    contenedorRespuesta.innerText = "";
}

function reportaError(mensaje) {
    let contenedorRespuesta = document.getElementById(ID_CONTENEDOR_RESPUESTA);
    contenedorRespuesta.setAttribute("class", "")
    contenedorRespuesta.classList.add('error')
    contenedorRespuesta.innerText += mensaje.concat("\n") 
}

function reportaExito(mensaje){
    let contenedorRespuesta = document.getElementById(ID_CONTENEDOR_RESPUESTA);
    contenedorRespuesta.setAttribute("class", "")
    contenedorRespuesta.classList.add('exito')
    contenedorRespuesta.innerText += mensaje.concat("\n") 
}

function obtenerValor(input){
    return document.getElementById(input).value;
}

function actualizaSatisfaccion(){
    let satisfaccion = obtenerValor('nmSatisfaccion')
    document.getElementById('scSatisfaccion').innerText = satisfaccion
}



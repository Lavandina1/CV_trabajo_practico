const persona = {
    nombre: "Roy Richardson",
    mail: "roy.richardson@example.com",
    nacimiento: "3-4-1945",
    dir: "7001 James St",
    tel: "(234) 454-5436"
};

// elemento a crear, formato string, el array en formato string y id, en formato string
function poner_texto_desde_array(elemento_a_crear, array, id) {
    var elemento = document.createElement(elemento_a_crear);
    var texto = document.createTextNode(array);
    elemento.appendChild(texto);
    var direccion = document.getElementById(id);
    direccion.appendChild(elemento);
}
// 
poner_texto_desde_array("h1", persona.nombre, "titulo")

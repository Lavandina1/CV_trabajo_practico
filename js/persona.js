const persona = {
    nombre: "Roy Richardson",
    mail: "Mail: roy.richardson@example.com",
    nacimiento: "Nacimiento: 3-4-1945",
    dir: "Dir: 7001 James St",
    tel: "Tel: (234) 454-5436",
    pres: "Soy Roy, oriundo de New Zeland, practico basquet y surfing, me dedico a programar en mis ratos libres.........",
    hab: "C++, Web-design, JavaScript"
};

// elemento a crear, formato string, el array en formato string y id, en formato string
function poner_elemento_y_texto_desde_array(elemento_a_crear, array, id) {
    var elemento = document.createElement(elemento_a_crear);
    var texto = document.createTextNode(array);
    elemento.appendChild(texto);
    var direccion = document.getElementById(id);
    direccion.appendChild(elemento);
}
// 

function poner_texto_a_elemento(id, texto) {
    document.getElementById(id).innerHTML = texto
}

poner_elemento_y_texto_desde_array("h1", persona.nombre, "titulo");


document.getElementById('pres_bot').addEventListener('click', function () {
    document.getElementById('ul1').style.display = "none";
    document.getElementById('p2').style.display = "none";
    document.getElementById('p1').style.display = "initial";
    poner_texto_a_elemento("p1", persona.pres)
})

document.getElementById('hab_bot').addEventListener('click', function () {
    document.getElementById('ul1').style.display = "none";
    document.getElementById('p2').style.display = "initial";
    document.getElementById('p1').style.display = "none";
    poner_texto_a_elemento("p2", persona.hab)
})
document.getElementById('cont_bot').addEventListener('click', function () {
    document.getElementById('p1').style.display = "none";
    document.getElementById('ul1').style.display = "initial";
    document.getElementById('p2').style.display = "none";
    poner_texto_a_elemento("li1", persona.mail);
    poner_texto_a_elemento("li2", persona.nacimiento);
    poner_texto_a_elemento("li3", persona.dir);
    poner_texto_a_elemento("li4", persona.tel);

})
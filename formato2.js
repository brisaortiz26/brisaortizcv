document.getElementById('boton').onclick = function () {
    console.log("mi informacion");
    document.getElementById('mi_info').innerHTML = "Fecha de nacimiento: 25-05-02";
    document.getElementById('dato2').innerHTML = "Documento: 44106568";
    document.getElementById('dato3').innerHTML = "Contacto: 11601927919";
    document.getElementById('dato4').innerHTML = "Localidad: Ezeiza";
    document.getElementById('dato5').innerHTML = "Nacionalidad: Argentina";
    document.getElementById('dato9').innerHTML = "Email: briithomps@gmail.com";
}

document.getElementById('boton2').onclick = function () {
    console.log("ver");
    document.getElementById('dato6').innerHTML = "Desarrollo Front-End (01/2023)";
    document.getElementById('dato7').innerHTML = "Desarrollo Back-End (10/2022)";
    document.getElementById('dato8').innerHTML = "Lenguaje Java";
}

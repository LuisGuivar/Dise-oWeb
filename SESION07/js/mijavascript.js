function compara(){
    var a =2;
    var b =2;
    if (a == b)
    alert ("a y b son iguales");
    else
    alert ("a y b son diferentes");
}

function resta(x,y){
    var rest = x- y;
    document.write("<h2> La resta es " + rest + "</h2>");
}

function suma(a,b){
var suma = a+b;
document.getElementById("sumar").innerHTML="La suma es " + suma
}

function escribir(){
    calor=document.getElementById('entrada').value;
    document.getElementById('contenido').innerHTML=''+valor;
}

$(document).ready(function(){
$("a").click(function(evento){
    alert("Has pulsado el enlace .Ahora seras enviado a la pagina de la USAT");
});
});

//Ocultar / Mostrar bloque
$("#c1b").click(function(){
    $("#cont1").toggle(1500);
},function(){
    $("#cont1").toggle(1500);
})
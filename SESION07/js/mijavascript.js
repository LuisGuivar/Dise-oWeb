function Sumatoria(){
    var sumatoria =0;
    var contador =0;
    while(contador <=10){
        sumatoria += contador;
        contador++;
        alert(sumatoria);
        
    }
   
}
function Sumatoriadepares(){
    var sumatoria =0;
       for(var i=0; i<10; i++){
           if(i % 2 == 0){
               sumatoria+=i;
            
           }
           
       }
       alert("La sumatoria de numeros pares entre 0 y 10 es:" + sumatoria)
      
       
    }
   
function PedirNumeros(){
   
        var numeroGuardado = [];
        var msg = 'Multiplicamos los números elejidos por 3:\n';
        for(i=0; i<5; i++){
            numeroPedido = prompt('Ingrese un número');
            numeroGuardado[i] = Number(numeroPedido);
        }
        for (i in numeroGuardado){
            msg = msg + numeroGuardado[i] + '*3 = ' + (numeroGuardado[i] * 3) + '\n';
        }
        alert(msg);
   
}


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
    valor=document.getElementById('entrada').value;
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
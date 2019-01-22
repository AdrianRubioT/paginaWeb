function cargar() {
    document.getElementById("div1").addEventListener("dragover", allowDrop);
    document.getElementById("div2").addEventListener("dragover", allowDrop);
    document.getElementById("div3").addEventListener("dragover", allowDrop);

    document.getElementById("drag1").addEventListener("dragstart", drag);
    document.getElementById("drag2").addEventListener("dragstart", drag);
    document.getElementById("drag3").addEventListener("dragstart", drag);
    document.getElementById("drag4").addEventListener("dragstart", drag);
    document.getElementById("drag5").addEventListener("dragstart", drag);

    document.getElementById("div3").addEventListener("drop", drop);
    document.getElementById("div2").addEventListener("drop", drop);
    document.getElementById("div1").addEventListener("drop", drop);
}

function allowDrop(ev) {
    console.log(ev)
    //Permitir que reciba algún elemento
    ev.preventDefault();
    if (ev.target.getAttribute("draggable") == "true")
        ev.dataTransfer.dropEffect = "none"; // dropping is not allowed
    else
        ev.dataTransfer.dropEffect = "all"; // drop it like it's hot    
}

function drag(ev) {

    //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {


    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();

    //Guardamos el elemento, llamado "text" en una variable.
    var data = ev.dataTransfer.getData("text");

    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
    ev.target.appendChild(document.getElementById(data));

}


window.addEventListener("load", cargar);
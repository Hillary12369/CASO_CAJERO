document.getElementById("clear").addEventListener("click", clear);
function clear(){
    var elemento = document.getElementById("caja-password");
    elemento.value =  elemento.value.substring(0, elemento.value.length - 1);
}

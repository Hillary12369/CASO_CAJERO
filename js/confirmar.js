function confirmar(){
    let saldo = 5000;
      var elemento = document.getElementById("caja-password").value;
      if(elemento == ""){
          document.getElementById("valid_mul").style.display="block";
          document.getElementById("valid_mul").innerHTML="- Ingresar un valor real -";
      }else{
        if(elemento > saldo){
          document.getElementById("valid_mul").style.display="block";
        document.getElementById("valid_mul").innerHTML="- Saldo no disponible -"; 
      }else{
        if(elemento%10 == 0){
          document.getElementById("valid_mul").style.display="block";
          document.getElementById("valid_mul").innerHTML="- Estamos en proceso..... -";
          function hastapronto(){
              window.location = "transaccion.html"
          }
          setTimeout(hastapronto,1200);
        }else{
          document.getElementById("valid_mul").style.display="block";
          document.getElementById("valid_mul").innerHTML="- No es multiplo de 10 -";
        }
      }
    }
  }



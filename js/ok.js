var constraseña_real = "77072787";
   class Usuario{
       constructor(constraseña){
           this.constraseña = constraseña;
       };
       constraseña(){
           return this.constraseña;
       };
   };
   function okey(){
       var user = new Usuario(document.getElementById("caja-password").value)
       if(user.constraseña == constraseña_real){
           document.getElementById("contraincorrecta").style.display="block";
           document.getElementById("contraincorrecta").innerHTML="- Logeo Verficado -";
           
           logeado = true;
           if(logeado){
              function okis(){
               window.location = "menuprincipal.html"
              }
              setTimeout(okis,1800); 
           }else{
               document.getElementById("contraincorrecta").style.display="block";
               var elemento = document.getElementById("caja-password");
               elemento.value = "";
           }
       }else{
           document.getElementById("contraincorrecta").style.display="block";
           var elemento = document.getElementById("caja-password");
           elemento.value = ""; 
       }
   }
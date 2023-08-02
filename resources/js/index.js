
    window.onload = function(){ 
        document.onscroll=function(e){
     if(window.scrollY>1500){
     document.getElementById("scroll").style.display="block";
     }
     else document.getElementById("scroll").style.display="none";
     };
 
 
     document.getElementById("scroll").onclick = function(mousedown) {
         window.scrollTo(821, 821);
     }; 
     }
function raiz(){
    var n = document.getElementById("numero").value;

    var r = document.getElementById("resultado");
    
    var ra = Math.sqrt(parseInt(n));
    
    r.innerHTML=ra;
    console.log(ra);


}
function carregar(){
    if(document.getElementById("salMes")){
        document.getElementById("salMes").addEventListener("change", function(){
        this.value = parseFloat(this.value).toFixed(2);
     });
    }
}
 

function mostrarResultado(val) {
    document.getElementById('horaTrabVal').innerHTML=val; 
  }
  function mostrarResultado1(val) {
    document.getElementById('diaSemanaVal').innerHTML=val; 
  }
  function mostrarResultado2(val) {
    document.getElementById('semanaMesVal').innerHTML =val; 
  }



    
calculaX = function (){
    var salarioMes = parseFloat(document.getElementById('salMes').value);
    var horaTrab = parseFloat(document.getElementById('horaTrab').value); 
    var diaSemana = parseFloat(document.getElementById('diaSemana').value);
    var semanaMes = parseFloat(document.getElementById('semanaMes').value);
    var custoHora = (salarioMes/((horaTrab*diaSemana)*semanaMes)).toFixed(2);
   document.getElementById('custoHora').value = custoHora;
   document.getElementById('semanaMesVal').value = semanaMes;
   
}



function mostrarResultado(val) {
    document.getElementById('horaTrabVal').value=val; 
  }
  function mostrarResultado1(val) {
    document.getElementById('diaSemanaVal').value=val; 
  }
  function mostrarResultado2(val) {
    document.getElementById('semanaMesVal').value=val; 
  }



    
calculaX = function (){
    var salarioMes = parseFloat(document.getElementById('salMes').value);
    var horaTrab = parseFloat(document.getElementById('horaTrab').value); 
    var diaSemana = parseFloat(document.getElementById('diaSemana').value);
    var semanaMes = parseFloat(document.getElementById('semanaMes').value);
    var custoHora = salarioMes/((horaTrab*diaSemana)*semanaMes);
   document.getElementById('custoHora').value = custoHora;
   document.getElementById('semanaMesVal').value = semanaMes;
   
}

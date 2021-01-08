

calculaX = function (){
    var salarioMes =  parseFloat(document.getElementById('salMes').value) ;
    var horaTrab = parseFloat(document.getElementById('horaTrab').value); 
    var diaSemana = parseFloat(document.getElementById('diaSemana').value);
    var custoHora = salarioMes/((horaTrab*diaSemana)*4);
   document.getElementById('custoHora').value = custoHora;
   
}

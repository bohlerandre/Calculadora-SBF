
var horaTrab = parseFloat(document.getElementById('horaTrab').value);
horaTrab.innerHTML = form-range.value;

calculaX = function (){
    var salarioMes = parseFloat(document.getElementById('salMes').value);
    horaTrab = parseFloat(document.getElementById('horaTrab').value); 
    var diaSemana = parseFloat(document.getElementById('diaSemana').value);
    var semanaMes = parseFloat(document.getElementById('semanaMes').value);
    var custoHora = salarioMes/((horaTrab*diaSemana)*semanaMes);
   document.getElementById('custoHora').value = custoHora;
   
}

const $botonCalcularSueldoMensual = document.querySelector('.boton-calcular-sueldo-mensual');

$botonCalcularSueldoMensual.onclick = function(){
    const MESES_EN_UN_ANIO = 12;
    const $salarioAnual = document.querySelector('.salario-anual');
    const salarioAnual = Number($salarioAnual.value);
    const $salarioMensual = document.querySelector('.salario-mensual');

    $salarioMensual.value = (salarioAnual / MESES_EN_UN_ANIO).toFixed(2);
}

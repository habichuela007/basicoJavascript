const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalculate = document.querySelector('#btnCalculate');
const pResult = document.querySelector('#result');

//Pilas, cuando llamamos a la función desde HTML SI necesitamos paréntesis
//EN el javascript NO debido a que javascript interpreta que debe ejecutar una función ya ejecutada (va a agregar otros paréntesis)
//btnCalculate.addEventListener('click',btnOnClick);

form.addEventListener('submit',btnOnClick)

function btnOnClick(event){
    console.log(event);
    event.preventDefault();
    const sumaInputs = parseInt(input1.value)  + parseInt(input2.value);
    //console.log('Escuchando el evento de clic');
    //console.log(input1.value + input2.value);
    //console.log(Number(input1.value) + Number(input2.value));
    //console.log(parseInt(input1.value) + parseInt(input2.value));
    pResult.innerText = "Resultado " + sumaInputs;
}

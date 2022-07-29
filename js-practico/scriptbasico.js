// h1 {color: red}
// . parrafito {.....}
//#pid {...}
//console.log('Hello Wordl');

const h1 = document.querySelector('h1');
//const p = document.querySelector('p');
const p = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

//console.log(h1);
//console.log(h1.ATTRIBUTE_NODE);
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
}
);

//h1.innerHTML = 'Patito <br> Feo'
h1.innerText = 'Patito <br> Feo'
//h1.getAttribute
//h1.setAttribute('class','rojo');
h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle

input.value = "456"

//console.log(document.createElement('img'))
const img = document.createElement('img');
img.setAttribute('src','https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/2021-10/los-mejores-juegos-de-perritos-cachorros-por-mes-de-edad.png?itok=UNEbd6Xh')

console.log(img);

pid.innerHTML = "";
//pid.append(img);
pid.appendChild(img);
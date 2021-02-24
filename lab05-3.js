function nightMode(){
    h1.innerText="GOOD NIGHT";
    text1.innerText = "night";
    text2.classList.remove('red');
    text2.classList.add('blue');
    text3.innerText = "day";
    text4.innerText = "day";
    body.classList.remove('day');
    body.classList.add('night');
    button.removeEventListener('click',nightMode);
    button.addEventListener('click',dayMode);
    
}
function dayMode(){
    h1.innerText="GOOD MORNING";
    text1.innerText = "day";
    text2.classList.remove('blue');
    text2.classList.add('red');
    text3.innerText = "night";
    text4.innerText = "night";
    body.classList.remove('night');
    body.classList.add('day');
    button.removeEventListener('click',dayMode);
    button.addEventListener('click',nightMode);
}
const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const body = document.querySelector('body');
button.addEventListener('click',nightMode);
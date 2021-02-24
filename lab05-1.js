function onClickButton(target){
    const t = target.currentTarget;
    alert(t.innerText + " : 555555");
    t.style.backgroundColor = "gray";
}
function onClickText(){
    const message = document.querySelectorAll("p").forEach(p=>p.innerText="Hi");
    text = document.querySelectorAll("p").forEach(p=>p.removeEventListener('click',onClickText));
    // text = document.querySelectorAll("p").forEach(p=>p.addEventListener('click',onClickText2));
}
// function onClickText2(){
//     const message = document.querySelectorAll("p").forEach(p=>p.innerText="Don't click me");
//     text = document.querySelectorAll("p").forEach(p=>p.removeEventListener('click',onClickText2));
//     text = document.querySelectorAll("p").forEach(p=>p.addEventListener('click',onClickText));
// }
const button = document.querySelectorAll("button").forEach(button=>button.addEventListener('click',onClickButton));
var text = document.querySelectorAll("p").forEach(p=>p.addEventListener('click',onClickText));

function addEvent(){
    var img = document.createElement('img');
    img.src ="https://cdn2.iconfinder.com/data/icons/ui-essentials-2/1250/trash-delete-can-garbage-app-android-phone-512.png";
    img.classList.add('size');
    var h = document.createElement('p');
    h.classList.add('addbox');
    var p = document.createElement('span');
    var t = document.createTextNode(document.querySelector('input').value);
    p.appendChild(t);
    p.classList.add('text');
    h.appendChild(img);
    h.appendChild(p);
    document.getElementById('box').appendChild(h);
    h.addEventListener('click',checkedEvent);
    img.addEventListener('click',deleteEvent);
}
function checkedEvent(target){
    const a = target.currentTarget;
    a.querySelector('span').innerHTML = '<s>' + a.querySelector('span').innerHTML + '</s>';
}
function deleteEvent(){
    var parent = this.parentNode;
    parent.parentNode.removeChild(parent);
}
const textbox = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',addEvent)
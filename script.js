var menu = document.querySelector('.menu-collapse')
var sideVar = document.querySelector('.side-bar')
var container = document.querySelector('.container')


menu.onclick = function (){
    sideVar.classList.toggle('menu-short')
    container.classList.toggle('large-container')
}

var darkBtn=document.getElementById("dark-btn");
let lke=document.querySelector('.lke');

const user = document.querySelector('.user-icon');
const sett = document.querySelector('#sett')
user.onclick=function hello(){
    sett.classList.toggle('settings-menu-height')
}

darkBtn.onclick=function (){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem('theme') == 'light'){
        localStorage.setItem('theme', 'dark');
    }
    else{
        localStorage.setItem('theme', 'light');
    }
}

if(localStorage.getItem('theme') == 'light'){
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}
else if(localStorage.getItem('theme') == 'dark'){
    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
}
else{
    localStorage.setItem('theme', 'light');
}
lke.onclick=function (){
    lke.src='images/like.png'
}
lke.ondblclick=function (){
    lke.src='images/like-blue.png'
}
// lke.onclick=function hello(){
//     for (var i=0; i<lke.length; i++){
//     lke[i].src='images/like.png'
// }}

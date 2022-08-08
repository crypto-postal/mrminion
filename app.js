const btn = document.querySelector('[data-bs-target="#data"]');
btn.innerHTML = 'Upload'+ ' <i class="fa-solid fa-arrow-down-short-wide"></i>';
const navi = document.querySelector('#navi');
navi.classList.add("icon-bar");
const nav_a = document.querySelector('#navi a');
nav_a.setAttribute('id','nav_a');
const a_id = document.querySelector('#nav_a');
a_id.append(btn);
navi.append(a_id);

const light = document.querySelector('div .light');
light.setAttribute('class','grow');
const cls = document.querySelectorAll('.icon span');
cls.forEach(item=> item += item.classList.add("like"));
let home = document.getElementById('home');
home.setAttribute('class','top');
document.querySelector('#home h2').innerHTML = '<i class="fa-solid fa-hand-point-up" style="font-size:48px;color:#176023;"></i>';

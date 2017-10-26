// set no js as default before document.loaded

document.addEventListener('DOMContentLoaded', (event) => {

// hide hidden content if js loads, show nav btn
const activeElems = document.querySelectorAll('.is-active');
for (let i = 0; i < activeElems.length; i++){
  activeElems[i].classList.remove('is-active');
}
const menuBtn = document.getElementById('menu-btn');
menuBtn.classList.remove('is-hidden');

// toggle navigation, focus on first nav elem or h1/logo for accessibility
menuBtn.addEventListener('click', ()=>{
  const mainNav = document.getElementById('c-nav-links');
  const logo = document.getElementById('logo');
  mainNav.classList.toggle('is-active');
  if (mainNav.classList.contains('is-active')){
    mainNav.firstElementChild.focus();
  } else {
    logo.focus();
  }
});

// show/close login dialog
const loginBtn = document.getElementById('btn-login');
const dialog = document.getElementById('dialog');
const overlay = document.getElementById('overlay');

loginBtn.addEventListener('click', ()=>{
  overlay.classList.toggle('is-active');
  dialog.classList.toggle('is-active');
});

// close dialog w/overlay
overlay.addEventListener('click', () => {
  event.preventDefault();
  dialog.classList.toggle('is-active');
  overlay.classList.toggle('is-active');
});

// close dialog w/x button
const closeBtn = document.getElementById('btn-close-dialog');
closeBtn.addEventListener('click', () => {
  event.preventDefault();
  dialog.classList.toggle('is-active');
  overlay.classList.toggle('is-active');
});



// fill table with json company data
const tbody = document.getElementById('js-tbody');
for (let i = 0; i < data.length; i++){
  let trow = document.createElement('tr');
  Object.values(data[i]).forEach((value) => {
    let cell = document.createElement('td');
    cell.innerHTML = value;
    trow.append(cell);
  });
  trow.children[1].innerHTML = trow.children[1].innerHTML  + ' %';
  trow.children[2].innerHTML = '$' + parseFloat(trow.children[2].innerHTML).toFixed(2);
  if (trow.firstElementChild.innerHTML === 'URBank'){
    tbody.prepend(trow);
  } else {
    tbody.append(trow);
  }
}


// toggle aria expanded on nav button
// var toggle = document.querySelector('#toggle');
// var menu = document.querySelector('#menu');
//
// toggle.addEventListener('click', function(){
//   if (menu.classList.contains('is-active')) {
//     this.setAttribute('aria-expanded', 'false');
//     menu.classList.remove('is-active');
//   } else {
//     menu.classList.add('is-active');
//     this.setAttribute('aria-expanded', 'true');
//   }
// });
});

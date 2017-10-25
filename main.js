// set no js as default before document.loaded

document.addEventListener('DOMContentLoaded', (event) => {

let activeElems = document.querySelectorAll('.is-active');
console.log(activeElems);

for (let i = 0; i < activeElems.length; i++){
  activeElems[i].classList.remove('is-active');
}

let tbody = `<tr>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
</tr>`;


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

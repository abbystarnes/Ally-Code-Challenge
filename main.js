// set no js as default before document.loaded

document.addEventListener('DOMContentLoaded', (event) => {

// hide hidden content if js loads
let activeElems = document.querySelectorAll('.is-active');
for (let i = 0; i < activeElems.length; i++){
  activeElems[i].classList.remove('is-active');
}

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

// let tbody = `<tr>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>`;


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

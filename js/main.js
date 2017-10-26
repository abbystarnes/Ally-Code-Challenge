// set no js as default before document.loaded
document.addEventListener('DOMContentLoaded', (event) => {

  // hide hidden content if js loads, show nav btn
  const activeElems = document.querySelectorAll('.is-active');
  for (let i = 0; i < activeElems.length; i+= 1){
    activeElems[i].classList.remove('is-active');
  }
  const menuBtn = document.getElementById('menu-btn');
  menuBtn.classList.remove('is-hidden');

  const tabs = document.getElementsByClassName('c-tabs__tab');
  const panels = document.getElementsByClassName('c-tabs__tabPanel');
  for (let i = 1; i < panels.length; i+= 1){
    panels[i].classList.remove('is-selected')
  }

  // toggle navigation, focus on first nav elem or h1/logo for accessibility
  menuBtn.addEventListener('click', ()=>{
    const mainNav = document.getElementById('c-nav-links');
    const logo = document.getElementById('logo');
    let isExpanded = menuBtn.getAttribute('aria-expanded');
    menuBtn.setAttribute('aria-expanded', 'true');
    if (isExpanded === 'false'){
      isExpanded = 'true';
    } else {
      isExpanded = 'false';
    }
    menuBtn.setAttribute('aria-expanded', isExpanded);
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
  const formField1 = document.getElementById('form-field-1');

  loginBtn.addEventListener('click', ()=>{
    overlay.classList.toggle('is-active');
    dialog.classList.toggle('is-active');
    window.setTimeout(function ()
   {
     formField1.focus();
   }, 0);
  });

  // close dialog w/overlay
  overlay.addEventListener('click', () => {
    event.preventDefault();
    dialog.classList.toggle('is-active');
    overlay.classList.toggle('is-active');
    logo.focus();
  });

  // close dialog w/x button
  const closeBtn = document.getElementById('btn-close-dialog');
  closeBtn.addEventListener('click', () => {
    event.preventDefault();
    dialog.classList.toggle('is-active');
    overlay.classList.toggle('is-active');
    logo.focus();
  });

  // toggle tabs
  for (let i = 0; i < tabs.length; i += 1){
    tabs[i].addEventListener('click', ()=>{
      for (let x = 0; x < tabs.length; x++){
        tabs[x].classList.remove('is-selected');
        tabs[x].setAttribute('aria-selected', 'false');
      }
      for (let x = 0; x < panels.length; x += 1){
        panels[x].classList.remove('is-selected');
        panels[x].setAttribute('aria-hidden', 'true');
      }
      tabs[i].classList.add('is-selected');
      tabs[i].setAttribute('aria-selected', 'true');
      let selected_panel = document.getElementById(tabs[i].dataset.panel);
      selected_panel.classList.add('is-selected');
      selected_panel.firstElementChild.focus();
      selected_panel.setAttribute('aria-hidden', 'false');
    });
  }

  // fill table with json company data
  const tbody = document.getElementById('js-tbody');
  for (let i = 0; i < data.length; i += 1){
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

});

let tugle_menu = document.querySelector('.tuggole-menu'),
  menu = document.querySelector('.link-navBar'),
  svg_x = document.querySelector('.tuggole-menu1'),
  svg_menu = document.querySelector('.tuggole-menu');
tugle_menu.addEventListener('click', function () {
  menu.classList.toggle('toggle');
  svg_x.style.display = 'block';
  svg_menu.style.display = 'none';
  if (searchContainer.classList.contains('toggle')) {
    searchContainer.classList.remove('toggle');
  }
});
svg_x.addEventListener('click', function () {
  menu.classList.toggle('toggle');
  svg_x.style.display = 'none';
  svg_menu.style.display = 'block';
});
let loader = document.querySelector('.loader-container');

window.onload = function () {
  loader.style.display = 'none';
};
// Запретить скроллинг при открытом бургер-меню
document.querySelector('.navbar-toggler').addEventListener('click', function () {
  document.body.classList.toggle('overflow-hidden');
});

// Закрытие меню при выборе пункта
document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    document.body.classList.remove('overflow-hidden');
    document.querySelector('.navbar-collapse').classList.remove('show');
  });
});

// Закрытие меню при клике вне его области
document.addEventListener('click', function (e) {
  if (!document.querySelector('.navbar-collapse').contains(e.target) && !document.querySelector('.navbar-toggler').contains(e.target)) {
    document.body.classList.remove('overflow-hidden');
    document.querySelector('.navbar-collapse').classList.remove('show');
  }
});
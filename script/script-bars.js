window.addEventListener('scroll', function() {
    var container = document.querySelector('.container-desplazar');
    var menu = document.querySelector('.menu');
    var scrollPos = window.scrollY;

    if (scrollPos > 0) {
        container.classList.add('ocultar');
        menu.classList.remove('ocultar');
    } else {
        container.classList.remove('ocultar');
        menu.classList.remove('ocultar');
    }
});

// Obtener el botón y el menú desplegable
var botonMenu = document.getElementById("botonMenu");
var menuDesplegable = document.getElementById("menuDesplegable");

// Cuando se hace clic en el botón, mostrar u ocultar el menú
botonMenu.onclick = function() {
  if (menuDesplegable.style.display === "block") {
    menuDesplegable.style.display = "none";
    botonX.style.display = "none";
    botonMenu.style.display = "block";
  } else {
    menuDesplegable.style.display = "block";
    botonMenu.style.display = "none";
    botonX.style.display = "block";
  }
}
botonX.onclick = function() {
  if (menuDesplegable.style.display === "block") {
    menuDesplegable.style.display = "none";
    botonMenu.style.display = "block";
    botonX.style.display = "none";
  } else {
    menuDesplegable.style.display = "block";
    botonX.style.display = "none";
    botonMenu.style.display = "block";
  }
}


//verifica tamaño de pantalla para quitar los icon menu y x
function verificarAnchoPantalla() {
  var icon = document.querySelector('.icon');
  if (window.innerWidth >= 700) {
    botonX.style.display = "none";
    botonMenu.style.display = "none";
    menuDesplegable.style.display = "flex";
  } else {
    botonMenu.style.display = "block";
    menuDesplegable.style.display = "none";
  }
}
window.addEventListener('load', verificarAnchoPantalla); // Verificar al cargar
window.addEventListener('resize', verificarAnchoPantalla); // Verificar al redimensionar

// Ocultar el menú cuando el usuario hace clic fuera de él
var botonInicio = document.getElementById("botonInicio");
var subMenuInicio = document.getElementById("subMenuInicio");


//----------------------------
function toggleSubMenu(id, iconId) {
  var submenu = document.getElementById(id);
  var icon = document.getElementById(iconId);
  var allSubmenus = document.querySelectorAll('.sub-menu');
  var allIcons = document.querySelectorAll('.menu-item i');
  
  // Cerrar todos los submenús y restablecer los íconos
  allSubmenus.forEach(function(item) {
    if (item.id !== id) {
      item.classList.remove('show');
    }
  });

  allIcons.forEach(function(item) {
      if (item.id !== iconId) {
    item.classList.remove('rotate');
      }
  });
  // Alternar el estado del submenú seleccionado y rotar el ícono
  submenu.classList.toggle('show');
  icon.classList.toggle('rotate');
}
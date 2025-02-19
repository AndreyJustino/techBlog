const btn_abrir = document.getElementById("btn-abrir");

btn_abrir.addEventListener("click", () => {

  let tamanho = document.documentElement.scrollWidth;

  if(tamanho >= 796){
    document.getElementById("overlay-menu").style.display = "none";
    document.getElementById("btn-abrir").style.display = "none";
  }else{
    const menu = document.getElementById("menu-mobile");
    const overlay_menu = document.getElementById("overlay-menu");

    if ((menu.style.display = "none")) {
      menu.style.display = "block";
      overlay_menu.style.display = "block";
      btn_abrir.style.display = "none";
    }
  }
  
});

const btn_fechar = document.getElementById("btn-fechar");

btn_fechar.addEventListener("click", () => {

  let tamanho = document.documentElement.scrollWidth;

  if(tamanho >= 796){
    document.getElementById("overlay-menu").style.display = "none";
    document.getElementById("btn-abrir").style.display = "none";
  }else{
    const menu = document.getElementById("menu-mobile");
    const overlay_menu = document.getElementById("overlay-menu");
    menu.style.display = "none";
    overlay_menu.style.display = "none";
    btn_abrir.style.display = "block";
  }

  
});

function rta() { // recurso técnico alternativo
  let tamanho = document.documentElement.scrollWidth;
  if (tamanho >= 796) {
    document.getElementById("overlay-menu").style.display = "none";
    document.getElementById("btn-abrir").style.display = "none";
  }

  if (tamanho <= 795) {
    document.getElementById("menu-mobile").style.display = "none";
    document.getElementById("btn-abrir").style.display = "block";

    if (document.getElementById("btn-abrir").style.display == "block") {
      document.getElementById("overlay-menu").style.display = "none";
    }
  }
}

window.addEventListener("load", () => {
    rta()
})
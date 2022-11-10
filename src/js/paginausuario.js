function abrirNav(){
    document.getElementById("menuOculto").style.width="250px";
    document.getElementById("principal").style.marginLeft="250px";
}
function fecharNav(){
    document.getElementById("menuOculto").style.width="0";
    document.getElementById("principal").style.marginLeft="0";
}


let subMenu=document.getElementById("submenu");

        function toggleMenu(){
            subMenu.classList.toggle("open-menu")
        }

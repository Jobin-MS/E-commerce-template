function displayMenu(){
    var menu_drop1 = document.getElementById("menu_drop1");
    menu_drop1.style.display="none";
    var menu_drop2 = document.getElementById("menu_drop2");
    menu_drop2.style.display="block";
    var menu_container = document.getElementById("menu_container");
    menu_container.style.display="flex";
}

function hideMenu(){
    var menu_drop1 = document.getElementById("menu_drop1");
    menu_drop1.style.display="block";
    var menu_drop2 = document.getElementById("menu_drop2");
    menu_drop2.style.display="none";
    var menu_container = document.getElementById("menu_container");
    menu_container.style.display="none";
}
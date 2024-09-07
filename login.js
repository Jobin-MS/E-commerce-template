// Function to show the Sign-up form and hide the Login form
function showsign() {
    document.getElementById("user").style.display = "none";  // Hide the login form
    document.getElementById("sign").style.display = "block";  // Show the sign-up form
}

// Function to show the Login form and hide the Sign-up form
function showlogin() {
    document.getElementById("sign").style.display = "none";  // Hide the sign-up form
    document.getElementById("user").style.display = "block";  // Show the login form
}
function displayMenu(){
    var menu_drop1 = document.getElementById("menu_drop1");
    menu_drop1.style.display="none";
    var menu_drop2 = document.getElementById("menu_drop2");
    menu_drop2.style.display="inline";
    var menu_container = document.getElementById("menu_container");
    menu_container.style.display="flex";
}

function hideMenu(){
    var menu_drop1 = document.getElementById("menu_drop1");
    menu_drop1.style.display="inline";
    var menu_drop2 = document.getElementById("menu_drop2");
    menu_drop2.style.display="none";
    var menu_container = document.getElementById("menu_container");
    menu_container.style.display="none";
}
const menuButton = document.getElementById("menu-button");
var menuOpen = false;
menuButton.addEventListener('click', () => {
    if(!menuOpen){
        menuButton.innerHTML = '<i class="bi bi-folder2-open recipebox-navbar-icon"></i>';
        menuOpen = true;
        console.log("opening menu")
    } else {
        menuButton.innerHTML = '<i class="bi bi-folder2 recipebox-navbar-icon"></i>';
        menuOpen = false;
        console.log("Closing menu")
    }
})


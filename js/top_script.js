//NAVBAR


function scrolled(){
    if(document.body.scrollTop > 1||document.documentElement.scrollTop > 1){
        document.getElementById("header").classList.add("headerShrunk");
        document.getElementById("moveUpBtn").classList.add("moveUpBtnVisible");
    }else{
        document.getElementById("header").classList.remove("headerShrunk");
    }
}

function hamBtnToggle(){
    menu = document.getElementById("header_list");
    menu.classList.toggle('menuOpened');
}
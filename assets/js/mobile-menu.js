function onClickShowMobileMenu() {
    var main_menu = document.getElementsByClassName('mobile--menu__left');

    for (var i=0; i<main_menu.length; i++) {
        main_menu.item(i).classList.add('mobile--menu__left__show');
        if(document.getElementsByClassName('hide--menu')){
            main_menu.item(i).classList.remove('hide--menu');
        }
    }

    var menu = document.getElementsByClassName('mobile--menu__left__show__main');

    for (var i=0; i<menu.length; i++) {
        menu.item(i).classList.add('show--menu');
    }

    var overlay = document.getElementsByClassName('mobile--menu__left__show__overlay');

    for (var i=0; i<overlay.length; i++) {
       overlay.item(i).classList.add('show--menu');
    }

    document.body.classList.add("overflow--hidden");
}

function onClickHideMobileMenu(){
    var main_menu = document.getElementsByClassName('mobile--menu__left');

    for (var i=0; i<main_menu.length; i++) {
        main_menu.item(i).classList.remove('mobile--menu__left__show');
    }

    
    var menu = document.getElementsByClassName('mobile--menu__left__show__main');

    for (var i=0; i<menu.length; i++) {
        menu.item(i).classList.remove('show--menu');
    }

    var overlay = document.getElementsByClassName('mobile--menu__left__show__overlay');

    for (var i=0; i<overlay.length; i++) {
        overlay.item(i).classList.remove('show--menu');
    }
    document.body.classList.remove("overflow--hidden");
}
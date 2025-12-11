const menu_open = document.getElementById('menu_open');
const menu_close = document.getElementById('menu_close');
const nav_bar = document.getElementById('nav_bar');

if (menu_open && menu_close && nav_bar) {
    const openMenu = () => {
        nav_bar.classList.add('nav_links__appear');
        nav_bar.classList.remove('nav_links__disappear');
        menu_close.classList.add('menu_close__appear');
        document.body.classList.add('no-scroll');
    };

    const closeMenu = () => {
        nav_bar.classList.remove('nav_links__appear');
        nav_bar.classList.add('nav_links__disappear');
        menu_close.classList.remove('menu_close__appear');
        document.body.classList.remove('no-scroll');
    };

    menu_open.addEventListener('click', openMenu);
    menu_close.addEventListener('click', closeMenu);
} else {
    console.warn('Navbar script: one or more elements not found', { menu_open, menu_close, nav_bar });
}
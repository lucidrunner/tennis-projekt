//Bit of a mess, but essentially appending this in the header-nav.js
const HamburgerMenu = () => {
  return `
    <li id="nav-dropdown-item" class="hover-underline-animation hamburger-anchor">
        <link rel="stylesheet" href="components/hamburgermenu.css" />
        <i class="fa-solid fa-bars fa-lg"></i>
            <div id="hamburger-container" class="hidden">
                <ul class="hamburger-menu">
                    <li class="hamburger-title">Bokning</li>
                    <a href="banor.html#booking"><li class="selectable">Banor</li></a>
                    <a href="omkl.html?room=herr#booking"><li class="selectable">
                        Omklädningsrum - Herr
                    </li></a>
                    <a href="omkl.html?room=dam#booking"><li class="selectable">
                        Omklädningsrum - Dam
                    </li></a>
                    <a href="bastu.html#booking"><li class="selectable">Bastu</li></a>
                </ul>
            </div>
    </li>`;
};

export default HamburgerMenu;

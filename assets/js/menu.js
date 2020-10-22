let itensMenu = [
    {
        id: "menu_1",
        titulo: "Sessões",
        link: "sessoes.html",
    },   
    {
        id: "menu_2",
        titulo: "Lives",
        link: "lives.html",
    }, 
    {
        id: "menu_3",
        titulo: "Formação",
        link: "formacao.html",
    }, 
    {
        id: "menu_4",
        titulo: "Cineastas",
        link: "cineastas.html",
    }, 
    {
        id: "menu_5",
        titulo: "Catálogo",
        link: "catalogo.html",
    }, 
];


function exibirMenu() {
    
    let menuFinal =  "";
    let lista = itensMenu.map(function(item){

        return ` 
            <li class="nav-item mx-0 mx-lg-1 navbarItemFont">
                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="${item.link}"> ${item.titulo} </a>
            </li>
        `;
    });
        
    for (let i = 0; i < itensMenu.length; i++) {
        // document.getElementById('menu').innerHTML += lista[i];
        menuFinal += lista[i];
    }

    let menu = `
        <a class="navbar-brand js-scroll-trigger" href="index.html">
            <!-- @todo   colocar em assets -->
            <img src="assets/img/logo-menu-100.png" alt="Maxakali">
        </a>
        <!-- hamburguer responsivo -->
        <button
            class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold  text-white rounded"
            type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
            aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto"> 
                ${menuFinal}

                <li class="nav-item mx-0 mx-lg-1 navbarItemFont">  
                </li>
                
                <li class="nav-item mx-0 mx-lg-1 navbarItemFont">  
                </li>

                <li class="nav-item mx-0 mx-lg-1 navbarItemFont">
                    <a class="nav-link py-3 px-0 px-lg-1 rounded js-scroll-trigger" href="https://www.facebook.com/redecineflecha" target="_blank" title="Facebook">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                </li>
                
                <li class="nav-item mx-0 mx-lg-1 navbarItemFont">

                    <a class="nav-link py-3 px-0 px-lg-1 rounded js-scroll-trigger" href="https://www.instagram.com/redecineflecha" target="_blank" title="Instagran">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                    
                <li class="nav-item mx-0 mx-lg-1 navbarItemFont">
                    <a class="nav-link py-3 px-0 px-lg-1 rounded js-scroll-trigger" href="https://www.youtube.com/channel/UCqM9snpQg9W3Xq0o6k5AzHw" target="_blank" title="YouTube">
                        <i class="fab fa-youtube"></i>
                    </a>
                </li>
            </ul>
        </div>
    `;

    document.getElementById('menu').innerHTML += menu;
}

exibirMenu();

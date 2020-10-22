function exibirRedesSociais() {
    
    let redesSociais = `
        <a class="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/redecineflecha" target="_blank">
            <i class="fab fa-fw fa-facebook-f"></i>
        </a>
        <a class="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/redecineflecha" target="_blank">
            <i class="fab fa-fw fa-instagram"></i>
        </a>
        <a class="btn btn-outline-light btn-social mx-1" href="https://www.youtube.com/channel/UCqM9snpQg9W3Xq0o6k5AzHw" target="_blank">
            <i class="fab fa-fw fa-youtube"></i>
        </a>
    `;

    document.getElementById('redes-sociais').innerHTML += redesSociais;
}

exibirRedesSociais();

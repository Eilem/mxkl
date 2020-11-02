function exibirBanner() {

    document.getElementById('banner-carrossel').innerHTML = `
    <div id="demo" class="carousel slide" data-ride="carousel"  data-interval="9000">
        <!-- The slideshow -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="img-fluid" src="img/banners/banner1.png" alt="Mostra Maxakali" width="auto" >
            </div>
            <div class="carousel-item">
                <a href="#" target="#">
                    <img class="img-fluid" src="img/banners/banner2.png" alt="Mostra Maxakali" width="auto">
                </a>
            </div>
        </div>
    </div>
    `;
} 

exibirBanner();

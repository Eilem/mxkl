let prefixPathLives = "./img/lives/";
let lives = [
        {
            id: "live_1",
            imagem :"Live_1.jpg",
            titulo: "Live 1",
            link: "https://www.youtube.com/watch?v=44KkHWrehqw",
        }, 
        {
            id: "live_2",
            imagem : "Live_2.jpg",
            titulo: "Live 2- ASCURI",
            link: "https://www.youtube.com/watch?v=YQjmsuZLtvM",
        }, 
        {
            id: "live_3",
            imagem : "Live_3.jpg",
            titulo: "Live 3",
            link: "https://www.youtube.com/watch?v=RbHl9sKDr-E",
        },  
];


function exibirLives() {
    
    let lista = lives.map(function(live){

        return ` 
        <div class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item mx-auto">
                <p> </p>
                <a href="${live.link}" target="_blank">
                    <img class="img-fluid" src="${prefixPathLives}${live.imagem}" alt="${live.titulo}" title=" ${live.titulo}" />
                </a>
            </div>                    
        </div>
        `;
    });
    
    for (let i = 0; i < lives.length; i++) {
        document.getElementById('lives').innerHTML += lista[i];
    }
}

exibirLives();

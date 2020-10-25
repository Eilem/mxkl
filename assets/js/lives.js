let prefixPathLives = "./img/lives/";
let lives = [
        {
            id: "live_1",
            imagem :"Live_1.jpg",
            titulo: "Ūn ka’ok koxukxop - imagens das mulheres fortes",
            link: "https://www.youtube.com/channel/UCqM9snpQg9W3Xq0o6k5AzHw",
            data: "12.11 às 17h",
            descricao: "Na primeira live de nossa programação vamos conversar sobre a presença crescente das mulheres nos cinemas indígenas. Destacaremos as particularidades do modo de ver das mulheres tikmũ ́ũn/maxakali e como a diplomacia cosmopolítica de suas miradas fundamentam as suas práticas",
            com: "Mari Corrêa e Patrícia Pará Yxapy",
            mediacao: "Ana Estrela",
        }, 
        {
            id: "live_2",
            imagem : "Live_2.jpg",
            titulo: "Da terra para tela, memória e cinema tikmũ ́ũn/maxakali",
            link: "https://www.youtube.com/channel/UCqM9snpQg9W3Xq0o6k5AzHw",
            data: "19.11 às 17h",
            descricao: "Nessa segunda live refletiremos sobre as formas tikmũ ́ũn/maxakali de memória e seu vínculo com os territórios originários. Apontando para essa relação de ancestralidade, discutiremos as maneiras pelas quais os processos de (re)elaboração da memória movimentam as produções audiovisuais desse povo",
            com: " Geralda Soares e Cleonice Pankararu ",
            mediacao: "Ana Estrela",
        }, 
        {
            id: "live_3",
            imagem : "Live_3.jpg",
            titulo: "Cosmovisão e alianças afetivas no cinema Tikmũ ́ũn/Maxakali",
            link: "https://www.youtube.com/channel/UCqM9snpQg9W3Xq0o6k5AzHw",
            data: " 26.11 às 17h",
            descricao: "Em nossa última live pensaremos sobre as formas de mediação entre-mundos que se derivam das práticas artísticas e audiovisuais Tikmũ ́ũn/Maxakali. Nos dedicaremos a refletir sobre a cosmovisão que fundamenta o cinema e a arte desse povo, e as maneiras pelas quais esses fazeres criam contextos para a produção de alianças afetivas com seres extra-humanos, como são os yãmĩyxop, e apontam ainda para a possibilidade de constituir relações não-extrativistas com os não-indígena",
            com: "Cristine Takuá e Ailton Krenak",
            mediacao: "Paula Berbert",
        },  
];


function exibirLives() {
    
    let lista = lives.map(function(live){
    

        // <div class="col-md-6 col-lg-4 mb-5">
        //     <div class="portfolio-item mx-auto">
        //         <p> </p>
        //         <a href="${live.link}" target="_blank">
        //             <img class="img-fluid" src="${prefixPathLives}${live.imagem}" alt="${live.titulo}" title=" ${live.titulo}" />
        //         </a>
        //     </div>                    
        // </div>

        return `       
            <div class="card card-margin">
                <img class="card-img-top" src="${prefixPathLives}${live.imagem}" alt="${live.titulo}">
                <div class="card-body text-center">
                <h5 class="card-title">${live.titulo}</h5>
                <h6 class="card-title">Data: ${live.data}</h6>
                <h6 class="card-title">Com: ${live.com}</h6>
                <h6 class="card-title">Mediação: ${live.mediacao}</h6>
                <p class="card-text">${live.descricao}.</p>
                    <a class="btn btn-primary" href="${live.link}" target="_blank">
                        <i class="fas fa-video fa-fw"></i>
                        Assistir
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

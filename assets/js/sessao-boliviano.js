let prefixPathBoliviano = "./img/filmes/sessao_boliviano/";
let prefixlink = "https://www.videocamp.com/pt";
let filmesBolivianos = [
    {
        id: 'boliviano_1',
        imagem : "still_quillpa.jpg",
        titulo : "Quillpa - as lhamas floridas",
        duracao : "28 min",
        ano : "2019",
        sinopse : "Durante o mês do carnaval nas comunidades quéchuas do departamento de Potosí, na comunidade de Culpina K, realiza-se a cerimônia do “floreado de lhamas”. Assim como florescem as plantas para dar frutos após esta época, também nas lhamas são colocadas lã colorida nas orelhas, no pescoço e nas costas, para expressar a gratidão à mãe terra (La Pachamama). Uma tradição pré-colombiana que continua a re(existir) nas terras Altas da Bolívia.",
        direcao : "Iván Molina Velasquez",
        realizacao : "Imolivis",
        lingua : "Quéchua / Legendado em Português",
        uri : "/campaigns/527?playlist_id=88",
    },
];


function exibirSessao() {

    let lista = filmesBolivianos.map( function( filmeAtual){

        return `
            <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal${filmeAtual.id}">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" title="${ filmeAtual.titulo}" src="${prefixPathBoliviano}${filmeAtual.imagem}" alt="${ filmeAtual.titulo}" />
                    <p class="text-center text-uppercase text-black">${filmeAtual.titulo} </p>
                </div>
            </div>
        `;
    });

    for (let i = 0; i < filmesBolivianos.length; i++) {
        document.getElementById('sessao_boliviano').innerHTML += lista[i];
    }


    let modals = filmesBolivianos.map( function(filmeAtual) {
        return `
            <div class="portfolio-modal modal fade" id="portfolioModal${filmeAtual.id}" tabindex="-1" role="dialog" aria-labelledby="portfolioModal${filmeAtual.id}Label" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fas fa-times"></i></span>
                        </button>

                        <div class="modal-body text-center">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal${filmeAtual.id}Label">
                                            ${filmeAtual.titulo}
                                        </h2>
                                        <div class="divider-custom">
                                            <div class="divider-custom-line"></div>
                                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                            <div class="divider-custom-line"></div>
                                        </div>
                                        <img class="img-fluid rounded mb-5" src="${prefixPathBoliviano}${filmeAtual.imagem}" alt="${filmeAtual.titulo}" title="${filmeAtual.titulo}" />

                                        <p><span>Título: </span> ${filmeAtual.titulo} </p>
                                        <p><span>Duração: </span> ${filmeAtual.duracao} </p>
                                        <p><span>Ano: </span> ${filmeAtual.ano} </p>
                                        <p class="mb-5"> <span>Sinopse: </span> ${filmeAtual.sinopse} </p>
                                        <p><span>Direção: </span> ${filmeAtual.direcao} </p>
                                        <p><span>Realização: </span> ${filmeAtual.realizacao} </p>
                                        <p><span>Língua: </span> ${filmeAtual.lingua} </p>
                                        <button class="btn btn-primary">
                                            <a href="${prefixlink}${filmeAtual.uri}" target="_blank">
                                                <i class="fas fa-video fa-fw"></i>
                                                Assistir
                                            </a>
                                        </button>
                                        <button class="btn btn-primary" data-dismiss="modal">
                                            <i class="fas fa-times fa-fw"></i>
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    for (let i = 0; i < filmesBolivianos.length; i++) {
        document.getElementById('modal_boliviano').innerHTML += modals[i];
    }
}

exibirSessao();

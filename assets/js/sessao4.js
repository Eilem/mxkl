let prefixPathSessao4 = "./img/filmes/sessao_4/";
let filmesSessao4 = [
    {
        id : "sessao_4_1",
        titulo: "KONÃGXEKA:<br/>O DILÚVIO MAXAKALI",
        infos: "(Brasil, 2016, 13 min, cor)",
        imagem: "konagxeka.jpg",
        sinopse: "Konãgxeka na língua indígena maxakali quer dizer “água grande”. Trata-se da versão maxakali da história do dilúvio. Como um castigo, por causa do egoísmo e da ganância dos homens, os espíritos yãmîy enviam a “grande água”. Trata-se de um filme indígena. Um dos diretores é representante do povo indígena Maxakali, de Minas Gerais. Filme falado em língua Maxakali, com legenda. O argumento do filme é o mito diluviano do povo Maxakali. As ilustrações para o filme foram feitas por indígenas Maxakali, durante oficina realizada na Aldeia Verde Maxakali, no município de Ladainha, Minas Gerais.",
        dados:'DIREÇÃO: Isael Maxakali, Charles Bicalho  | ROTEIRO: Isael Maxakali, Charles Bicalho  | MONTAGEM: Isael Maxakali, Charles Bicalho,  Jackson Abacatu e Marcos Henrique Coelho | DIREÇÃO DE ANIMAÇÃO: Jackson Abacatu | ASSISTENTES DE DIREÇÃO: Elizângela Maxakali e Sueli Maxakali | PRODUÇÃO: Charles Bicalho e Marcos Henrique Coelho | ASSISTENTE DE PRODUÇÃO: Cláudia Alves | DIREÇÃO DE ARTE: Charles Bicalho e Jackson Abacatu | EDIÇÃO DE SOM: Frederico Mucci e Jackson Abacate | ELENCO: Cassiano Maxakali, Isael Maxakali, Sueli Maxakali, Elizângela Maxakali | Belo Horizonte / Aldeia Verde (Ladainha - MG)',
        link: "https://www.looke.com.br/movies/dist/spcine/maxakali",
    },
    {
        id : "sessao_4_2",
        titulo: "GRIN",
        infos: "(Brasil, 2016, 41 min, cor)",
        imagem: "Grin.jpg",
        sinopse: " Um cineasta maxakali resgata memórias sobre a formação da Guarda Rural Indígena (Grin) durante a ditadura militar, com relatos das violências sofridas pelos seus parentes.",
        dados: 'DIREÇÃO: Isael Maxakali, Sueli Maxakali, Roney Freitas | PRODUÇÃO EXECUTIVA: Luara Oliveira, Fabiana Übida | MONTAGEM, ROTEIRO E PRODUÇÃO EXECUTIVA: Alexandre Taira Pesquisa | ARGUMENTO: Rosi Araujo | FOTOGRAFIA: Andre Luiz de Luiz | DIREÇÃO DE PRODUÇÃO: Vinícius Casimiro | ASSISTÊNCIA DE PRODUÇÃO E SOM DIRETO: Cecilia Engels | MIXAGEM: Eric Ribeiro Christani | TRADUÇÃO: Isael Maxakali, Sueli Maxakali, Douglas Campelo | São Paulo / Aldeia Verde (Ladainha - MG), T.I. Maxakali',
        link: "https://www.looke.com.br/movies/dist/spcine/maxakali",
    },
];

function exibeSessao4() {

    let lista = filmesSessao4.map( function( filmeAtual){
        return `
            <div class="col-md-6 col-lg-6 mb-5">
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal${filmeAtual.id}">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" title="${ filmeAtual.titulo}" src="${prefixPathSessao4}${filmeAtual.imagem}" alt="${ filmeAtual.titulo}" />
                    <p class="text-center text-uppercase text-black">${filmeAtual.titulo} </p>
                </div>
            </div>
        `;
    });

    for (let i = 0; i < filmesSessao4.length; i++) {
        document.getElementById('sessao_4').innerHTML += lista[i];
    }

    let modals = filmesSessao4.map( function(filmeAtual) {

        filmeAtual.titulo = filmeAtual.titulo ? filmeAtual.titulo : '';
        filmeAtual.subtitulo = filmeAtual.subtitulo ? filmeAtual.subtitulo : '';
        filmeAtual.infos = filmeAtual.infos ? filmeAtual.infos : '';

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
                                        <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal${filmeAtual.id}Label">${filmeAtual.titulo}</h2>
                                        <h4 class=" text-uppercase">${filmeAtual.subtitulo}</h4>
                                        <p>${filmeAtual.infos}</p>
                                      
                                        <img class="img-fluid rounded mb-3" src="${prefixPathSessao4}${filmeAtual.imagem}" alt="${filmeAtual.titulo}" title="${filmeAtual.titulo}" /> 
                                        <button class="btn btn-primary  mb-3">
                                            <a href="${filmeAtual.link}" target="_blank">
                                                <i class="fas fa-video fa-fw"></i>Assistir
                                            </a>
                                        </button>                                       
                                        <p class="text-justify">${filmeAtual.sinopse} </p> 
                                        <p class="text-reference text-justify"> ${filmeAtual.dados} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  
    });

    for (let i = 0; i < filmesSessao4.length; i++) {
        document.getElementById('modal_sessao_4').innerHTML += modals[i];
    }
}

exibeSessao4();
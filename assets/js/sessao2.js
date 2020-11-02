let prefixPathSessao2 = "./img/filmes/sessao_2/";
let filmes = [
    {
        id : "sessao_2_1",
        titulo : "ACORDAR DO DIA ",
        subtitulo: "Ãyõk mõka'ok hãmtup",
        infos: "(Brasil, 2009, 32 min, cor)",
        sinopse: "Na manhã da aldeia, uma bruma envolve e desfaz os limites concretos dos corpos, das posições, das idades. A ela juntam-se a fumaça dos fogos caseiros e o cheiro do café coado. Os que ali rodeiam, esperam, convivem devagar, com a certeza de que são donos em sua própria casa. No caminhão em direção à cidade de Batinga, estamos todos invadidos por cortes: cercas, sacos, moedas, movimentos bruscos, palavras ríspidas. Todos eles acusam um maior e primeiro corte: os Tikmu’un ultrapassaram a fronteira, estão no mundo dos mestres dos objetos, numa civilização onde cada coisa tem seu lugar. A presença deles na feira expõe a dura relação entre esses dois mundos. Batinga, uma pequena cidade na fronteira da Bahia, é chamada pelos Tikmũ´ũn / Maxakali como “Tatoka, o tatu está caro”, como lhe diziam os habitantes da cidade, antigamente, quando os Tikmũ´ũn / Maxakali Ihes traziam tatus para vender.",
        dados: "DIREÇÃO E FOTOGRAFIA: Derli Maxakali, Marilton Maxakali, Juninha Maxakali, Janaína Maxakali, Fernando Maxakali, Joanina Maxakali, Zé Carlos Maxakali, Bernardo Maxakali, João Duro Maxakali | EDIÇÃO: Mari Corrêa | ASSISTENTE DE EDIÇÃO: Eduardo Rossi | NARRAÇÃO: Marilton Maxakali | TRADUÇÃO: Marilton Maxakali, Rosângela Pereira de Tugny, Eduardo Rossi | FINALIZAÇÃO: Mari Corrêa | COORDENAÇÃO DO PROJETO: Rosângela Pereira de Tugny | OFICINA DE FORMAÇÃO: Mari Corrêa, Carolina Canguçu, Rafael Barros | PARTICIPAÇÃO: Instituto Catitu - Aldeia em cena, Vídeo nas Aldeias | COORDENAÇÃO DE PRODUÇÃO: Rafael Barros, Renata Otto  | COLABORAÇÃO: Júnia Torres | REALIZAÇÃO: Associação Filmes de Quintal | Aldeia Vila Nova (Pradinho, T. I. Maxakali)",
        imagem: "AcordarDoDia_STILL.png",
        link: "#",
    },
    {
        id : "sessao_2_2",
        titulo: "COSMOPISTA MAXAKALI",
        subtitulo: "Cosmopista",
        infos: "(Brasil, 2013, 114 min, cor)",
        sinopse: 'O vídeo foi realizado a partir de registros realizados em julho e agosto de 2013 por uma equipe de representantes Tikmũ´ũn / Maxakali e Pataxó - cineastas indígenas e pajés - e pesquisadores não-indígenas, durante uma viagem por parte de seus territórios ancestrais. O vídeo dá mostras de parte das experiências ocorridas pelo trajeto entre o território Maxakali do Pradinho (Bertópolis-MG), no extremo nordeste de Minas Gerais, e os territórios Pataxó de Barra Velha e da Reserva da Jaqueira (Porto Seguro - BA), localizadas no litoral sul da Bahia. O trânsito por diferentes regiões atualmente ocupadas pela sociedade nacional, mas outrora percorridas incessantemente por esses povos, ainda é atualizado pelos Maxakali. Desse modo, eles continuam percorrendo continuamente aquele que era anteriormente um território ocupado por todos aqueles seres que povoam seus cantos e relatos míticos, animais, plantas, seres-extraordinários, outros povos com os quais mantinham contato - entre eles os povos-papagaio, os Putuxop, ou Pataxó.',
        dados: 'Josemar Maxakali, Marilton Maxakali, Bruno Vasconcelos | SELEÇÃO DE CANTOS: Toninho Maxakali, Josemar Maxakali, Marilton Maxakali, Zé Antoninho Maxakali, Bruno Vasconcelos | SELEÇÃO DE IMAGENS: Josemar Maxakali, Marilton Maxakali, Bruno Vasconcelos | TRADUÇÃO: Josemar Maxakali, Marilton Maxakali | SOM DIRETO DOS CANTOS E DEPOIMENTOS DOS PAJÉS: Leonardo Pires Rosse | FOTOGRAFIA: Josemar Maxakali, Marilton Maxakali, Bruno Vasconcelos | MONTAGEM E FINALIZAÇÃO: Bruno Vasconcelos | PESQUISA E PRODUÇÃO: Ricardo Jamal | COORDENAÇÃO: Rosângela de Tugny | REALIZAÇÃO: ProdocSon – programa de documentação de sonoridades indígenas – Museu do Índio',
        imagem: "Cosmopista01_STILL.png",
        link: "#",
    },  
];

function exibeSessao2() {

    let lista = filmes.map( function( filmeAtual){

        return `
            <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal${filmeAtual.id}">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" title="${ filmeAtual.titulo}" src="${prefixPathSessao2}${filmeAtual.imagem}" alt="${ filmeAtual.titulo}" />
                    <p class="text-center text-uppercase text-black">${filmeAtual.titulo} </p>
                </div>
            </div>
        `;
    });

    for (let i = 0; i < filmes.length; i++) {
        document.getElementById('sessao_2').innerHTML += lista[i];
    }

    //iterar modal para a lista

    let modals = filmes.map( function(filmeAtual) {

        let conteudo = "";

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
                                        <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal${filmeAtual.id}Label">
                                            ${filmeAtual.titulo}
                                        </h2>
                                        <h4 class=" text-uppercase "> ${filmeAtual.subtitulo} </h4>
                                        <p> ${filmeAtual.infos} </p>
                                        <div class="divider-custom">
                                        </div>
                                        <img class="img-fluid rounded mb-5" src="${prefixPathSessao2}${filmeAtual.imagem}" alt="${filmeAtual.titulo}" title="${filmeAtual.titulo}" />

                                        <p> ${filmeAtual.dados} </p>

                                        <button class="btn btn-primary">
                                            <a href="${filmeAtual.link}" target="_blank">
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

    for (let i = 0; i < filmes.length; i++) {
        document.getElementById('modal_sessao_2').innerHTML += modals[i];
    }
}

exibeSessao2();

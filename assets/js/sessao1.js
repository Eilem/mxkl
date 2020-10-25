let prefixPathSessao1 = "./img/filmes/sessao_1/";
let filmes = [
    {
        id : "sessao_1_1",
        titulo : "Nativas Narrativas: Mirando Mundos Possíveis",
        subtitulo :  " Ep. 1: Teko Marangatu, Ep. 2: Ary Vaí , Ep. 3: Yvyra’i Jeguá",
        duracao : "Ep.1 - 5m57s , Ep.2 - 5m43s, Ep.3 - 6m51s ",
        ano: "2020",
        sinopse: "A websérie Nativas Narrativas: Mirando Mundos Possíveis é uma iniciativa autônoma da ASCURI (Associação Cultural de Realizadores Indígenas/MS) que visa mostrar as perspectivas dos povos indígenas diante da pandemia global do novo coronavírus em 2020.",
        direcao: "Associação Cultural de Realizadores Indígenas (ASCURI)",
        roteiro: "Ivan Molina e Eliel Benites",
        imagens: "Ademilson Kiki Concianza; Fernanda da Silva; Gilearde Barbosa; Junior Joel lopes; Inair Lopes",
        edicao: "Ademilson Kiki Concianza; Gilearde Barbosa; Fabio Concianza; Iulik de Farias; Junior Joel lopes; Inair Lopes; Gilmar Kiripuku Galache",
        produção: "Associação Cultural de Realizadores Indígenas (ASCURI)",
        imagem: "nativas_narrativas.png",
        link: "https://www.videocamp.com/pt/campaigns/521?playlist_id=88",
    },
    {
        id : "sessao_1_2",
        titulo: "Comunidade Myky contra covid-19",
        duracao: "6 min",
        ano: "2020",
        sinopse: "Até o momento, mesmo que o coronavírus não tenha chegado às famílias do povo Myky, no noroeste de Mato Grosso, a população tem se mobilizado para evitar a doença. Uma porteira foi construída na estrada que conecta o território às cidades, as idas ao município diminuíram, os mais velhos fazem remédio e rezam para sua proteção, algumas famílias realizam acampamentos de pesca para se distanciar ainda mais dos perigos. Um registro atual realizado por Typju Myky de um difícil contexto, sobretudo para os povos indígenas, e que se espera superar num futuro próximo.",
        direcao: "Typju Myky e Minã Myky",
        realizacao : "Coletivo Ijã Mytyli de Cinema Manoki e Myky e Rede CineFlecha",
        imagem: "Comunidade_Myky_contra_covid.png",
        link: "https://www.videocamp.com/pt/campaigns/543?playlist_id=88",
    },
  
];

function exibeSessao1() {

    let lista = filmes.map( function( filmeAtual){

        return `
            <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal${filmeAtual.id}">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" title="${ filmeAtual.titulo}" src="${prefixPathSessao1}${filmeAtual.imagem}" alt="${ filmeAtual.titulo}" />
                    <p class="text-center text-uppercase text-black">${filmeAtual.titulo} </p>
                </div>
            </div>
        `;
    });

    for (let i = 0; i < filmes.length; i++) {
        document.getElementById('sessao_1').innerHTML += lista[i];
    }

    //iterar modal para a lista

    let modals = filmes.map( function(filmeAtual) {

        let conteudo = "";

        if(filmeAtual.titulo){
            conteudo += `<p><span>Título: </span> ${filmeAtual.titulo} </p>`;
        }

        if(filmeAtual.subtitulo){
            conteudo += `<p>${filmeAtual.subtitulo} </p>`;
        }

        if(filmeAtual.duracao){
            conteudo += `<p><span>Duração: </span> ${filmeAtual.duracao} </p>`;
        }

        if(filmeAtual.ano){
            conteudo += `<p><span>Ano: </span> ${filmeAtual.ano} </p>`;
        }

        if(filmeAtual.sinopse){
            conteudo += `<p><span>Sinopse: </span> ${filmeAtual.sinopse} </p>`;
        }

        if(filmeAtual.direcao){
            conteudo += `<p><span>Direção: </span> ${filmeAtual.direcao} </p>`;
        }

        if(filmeAtual.realizacao){
            conteudo += `<p><span>Realização: </span> ${filmeAtual.realizacao} </p>`;
        }

        if(filmeAtual.lingua){
            conteudo += ` <p><span>Língua: </span> ${filmeAtual.lingua} </p>`;
        }

        if(filmeAtual.roteiro){
            conteudo += ` <p><span>Roteiro: </span> ${filmeAtual.roteiro} </p>`;
        }

        if(filmeAtual.imagens){
            conteudo += ` <p><span>Imagens: </span> ${filmeAtual.imagens} </p>`;
        }

        if(filmeAtual.edicao){
            conteudo += ` <p><span>Edição: </span> ${filmeAtual.edicao} </p>`;
        }

        if(filmeAtual.producao){
            conteudo += ` <p><span>Produção: </span> ${filmeAtual.producao} </p>`;
        }

        if(filmeAtual.orientacao){
            conteudo += ` <p><span>Orientação: </span> ${filmeAtual.orientacao} </p>`;
        }

        if(filmeAtual.traducao){
            conteudo += ` <p> <span>Tradução </span>${filmeAtual.traducao} </p>`;
        }

        if(filmeAtual.fotografia){
            conteudo += ` <p> <span>Fotografia: </span>${filmeAtual.fotografia} </p>`;
        }


        if(filmeAtual.maisInfos){
            conteudo += ` <p> ${filmeAtual.maisInfos} </p>`;
        }

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
                                        <img class="img-fluid rounded mb-5" src="${prefixPathSessao1}${filmeAtual.imagem}" alt="${filmeAtual.titulo}" title="${filmeAtual.titulo}" />

                                        ${conteudo}

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
        document.getElementById('modal_sessao_1').innerHTML += modals[i];
    }
}

exibeSessao1();

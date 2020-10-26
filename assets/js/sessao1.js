let prefixPathSessao1 = "./img/filmes/sessao_1/";
let filmes = [
    {
        id : "sessao_1_1",
        titulo : "POPXOP ",
        infos: "(Brasil, 2019, 103 min, cor)",
        sinopse: "Os Popxop, Macacos-Yãmĩyxop (Po’op-Yãmĩyxop), são aliados cantores do povo Tikmũ´ũn / Maxakali, hoje residentes do Vale do Mucuri, em Minas Gerais. Periodicamente, vêm às aldeias passar um longo período, que pode se estender por alguns meses, para manejar as saudades de suas mães e pais, pajés homens e mulheres Tikmũ´ũn / Maxakali. Eles cantam as histórias, os segredos, os caminhos e os olhares da Mata Atlântica, imitando e narrando cantos de outros grupos de Yãmĩyxop, seres encantados-cantores que também acompanham e protegem os Tikmũ´ũn / Maxakali. Trazendo saberes e experiências de alegria, garantem a saúde da comunidade e celebram encontros xamânicos que atravessam o território e o tempo.",
        dados: "DIREÇÃO: Natalino Maxakali e Ana Estrela | ROTEIRO: Ana Estrela, Manoel Damásio Maxakali, Arnalda Maxakali | FILMAGEM: Ana Estrela, Anísia Maxakali, Arnalda Maxakali, Jacinto Maxakali, Natalino Maxakali, Vanessa Maxakali | EDIÇÃO: Ana Estrela, Anísia Maxakali, Arnalda Maxakali, Miguelzinho Maxakali, Natalino Maxakali | LEGENDAGEM E TRADUÇÃO DOS CANTOS: Ana Estrela, Antônio Marcos Maxakali, Arnalda Maxakali, Israel Maxakali, Manoel Damásio Maxakali, Marilton Maxakali, Marquinhos Maxakali, Miguelzinho Maxakali, Natalino Maxakali, Pequi Maxakali | NARRAÇÃO: Adriana Maxakali, Bilza Maxakali, Edna Maxakali, Manoel Damásio Maxakali | TRILHA SONORA, PRODUÇÃO E REALIZAÇÃO: Aldeia Nova Vila (Pradinho, T. I. Maxakali)",
        imagem: "POPXOP_STILL.jpg",
        link: "#",
    },
    {
        id : "sessao_1_2",
        titulo: "CAÇANDO CAPIVARA",
        subtitulo: "Kuxakuk Xak",
        infos: "(Brasil, 2009, 57 min, cor)",
        dados: "DIREÇÃO: Derli Maxakali, Marilton Maxakali, Juninha Maxakali, Janaina Maxakali, Fernando Maxakali, Joanina Maxakali, Zé Carlos Maxakali, Bernardo Maxakali, João Duro Maxakali | EDIÇÃO: Mari Corrêa | ASSISTENTE DE EDIÇÃO: Eduardo Rossi | NARRAÇÃO: Marilton Maxakali, Derli Maxakali | TRADUÇÃO: Zé Antoninho Maxakali, Damasinho Maxakali, Vitorino Maxakali, Marilton Maxakali | COORDENAÇÃO DO PROJETO: Rosângela Pereira de Tugny | OFICINA DE FORMAÇÃO: Mari Corrêa, Carolina Canguçu, Rafael Barros | PARTICIPAÇÃO: Instituto Catitu - Aldeia em cena, Vídeo nas Aldeias | COORDENAÇÃO DE PRODUÇÃO: Rafael Barros, Renata Otto | COLABORAÇÃO: Júnia Torres | REALIZAÇÃO: Associação Filmes de Quintal | Aldeia Vila Nova (Pradinho, T. I. Maxakali)",
        imagem: "CacandoCapivaraSTILL.png",
        link: "#",
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

        filmeAtual.titulo = filmeAtual.titulo ? filmeAtual.titulo : '';
        filmeAtual.subtitulo = filmeAtual.subtitulo ? filmeAtual.subtitulo : '';
        filmeAtual.infos = filmeAtual.infos ? filmeAtual.infos : '';

        // if(filmeAtual.titulo){
        //     conteudo += `<p><span>Título: </span> ${filmeAtual.titulo} </p>`;
        // }

        // if(filmeAtual.subtitulo){
        //     conteudo += `<p>${filmeAtual.subtitulo} </p>`;
        // }

        // if(filmeAtual.duracao){
        //     conteudo += `<p><span>Duração: </span> ${filmeAtual.duracao} </p>`;
        // }

        // if(filmeAtual.ano){
        //     conteudo += `<p><span>Ano: </span> ${filmeAtual.ano} </p>`;
        // }

        // if(filmeAtual.sinopse){
        //     conteudo += `<p><span>Sinopse: </span> ${filmeAtual.sinopse} </p>`;
        // }

        // if(filmeAtual.direcao){
        //     conteudo += `<p><span>Direção: </span> ${filmeAtual.direcao} </p>`;
        // }

        // if(filmeAtual.realizacao){
        //     conteudo += `<p><span>Realização: </span> ${filmeAtual.realizacao} </p>`;
        // }

        // if(filmeAtual.lingua){
        //     conteudo += ` <p><span>Língua: </span> ${filmeAtual.lingua} </p>`;
        // }

        // if(filmeAtual.roteiro){
        //     conteudo += ` <p><span>Roteiro: </span> ${filmeAtual.roteiro} </p>`;
        // }

        // if(filmeAtual.imagens){
        //     conteudo += ` <p><span>Imagens: </span> ${filmeAtual.imagens} </p>`;
        // }

        // if(filmeAtual.edicao){
        //     conteudo += ` <p><span>Edição: </span> ${filmeAtual.edicao} </p>`;
        // }

        // if(filmeAtual.producao){
        //     conteudo += ` <p><span>Produção: </span> ${filmeAtual.producao} </p>`;
        // }

        // if(filmeAtual.orientacao){
        //     conteudo += ` <p><span>Orientação: </span> ${filmeAtual.orientacao} </p>`;
        // }

        // if(filmeAtual.traducao){
        //     conteudo += ` <p> <span>Tradução </span>${filmeAtual.traducao} </p>`;
        // }

        // if(filmeAtual.fotografia){
        //     conteudo += ` <p> <span>Fotografia: </span>${filmeAtual.fotografia} </p>`;
        // }


        // if(filmeAtual.maisInfos){
        //     conteudo += ` <p> ${filmeAtual.maisInfos} </p>`;
        // }

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
                                        <img class="img-fluid rounded mb-5" src="${prefixPathSessao1}${filmeAtual.imagem}" alt="${filmeAtual.titulo}" title="${filmeAtual.titulo}" />

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
        document.getElementById('modal_sessao_1').innerHTML += modals[i];
    }
}

exibeSessao1();

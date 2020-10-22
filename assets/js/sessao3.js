let prefixUrl = "https://www.videocamp.com/pt";
let prefixPathSessao3 = "./img/filmes/sessao_3/";

let filmesSessao3 = [
    {
        id: 'sessao_3_1',
        imagem : "KIPAEXOTI.png",
        titulo : "Kipaexoti",
        duracao : "15 min",
        ano : "2020",
        sinopse : "Kipaexoti é um filme produzido pela Ascuri que mostra a força e resistência do Povo Terena da aldeia Cachoeirinha (mbokoti) no Pantanal Sul (Miranda - MS), em manter viva sua dança tradicional denominada kipaexoti, também conhecida como dança da Ema.",
        direcao : "Associação Cultural de Realizadores Indígenas (ASCURI)",
        imagens : "Gilmar Kiripuku Galache e Sidivaldo Nguli Julio",
        edicao : "Gilmar Kiripuku Galache",
        traducao: "Zuleica Tiago",
        producao: "Associação Cultural de Realizadores Indígenas (ASCURI)",
        uri : "/campaigns/525?playlist_id=88",
    },
    {
        id: 'sessao_3_2',
        imagem : "POPXOP.jpg",
        titulo : "Popxop",
        duracao : "106 min",
        ano : "2019",
        sinopse : "Os Popxop, Macacos-Yãmĩyxop (Po´op-Yãmĩyxop), são aliados cantores do povo Tikmũ´ũn / Maxakali, hoje residentes do Vale do Mucuri, em Minas Gerais. Periodicamente, vêm às aldeias passar um longo período, que pode se extender por alguns meses, para manejar as saudades de suas mães e pais, pajés homens e mulheres Tikmũ´ũn / Maxakali. Eles cantam as histórias, os segredos, os caminhos e os olhares da Mata Atlântica, imitando e narrando cantos de outros grupos de Yãmĩyxop, seres encantados-cantores que também acompanham e protegem os Tikmũ´ũn / Maxakali. Trazendo saberes e experiências de alegria, garantem a saúde da comunidade e celebram encontros xamânicos que atravessam o território e o tempo.",
        direcao : "Natalino Maxakali e Ana Estrela",
        roteiro: "Ana Estrela, Manoel Damásio Maxakali e Arnalda Maxakali;",
        edicao: "Ana Estrela, Anísia Maxakali, Arnalda Maxakali, Miguelzinho Maxakali, Natalino Maxakali",
        maisInfos : "Filmagem: Ana Estrela, Anísia Maxakali, Arnalda Maxakali, Jacinto Maxakali, Natalino Maxakali, Vanessa Maxakali <br/><br/>  Legendagem e Tradução dos Cantos: Ana Estrela, Antônio Marcos Maxakali, Arnalda Maxakali, Israel Maxakali, Manoel Damásio Maxakali, Marilton Maxakali, Marquinhos Maxakali, Miguelzinho Maxakali, Natalino Maxakali, Pequi Maxakali.  <br/><br/> Narração: Adriana Maxakali, Bilza Maxakali, Edna Maxakali, Manoel Damásio Maxakali  <br/><br/> Trilha sonora, Produção e Realização: Popxop, Aldeia Nova Vila.",
        uri : "/campaigns/536?playlist_id=88",
    },
    {
        id: 'sessao_3_3',
        imagem : "Jakaira.png",
        titulo : "Jakaira, o Dono do Milho Branco ",
        duracao : "15m47s",
        ano : "2019",
        sinopse : "Na aldeia Guyra Kambi’y o povo Kaiowá (MS/Brasil) realiza a festa de batismo do milho branco, o Jerosy Puku. Os cantos e as danças conduzem a vinda de Jakaira, o dono do milho branco, entidade associada à fertilidade das roças. Misturando narrativa documental com elementos ficcionais, o filme fala da importância da manutenção dos costumes para a preservação do “jeito de ser” Kaiowá (ñandereko).",
        edicao : "Ademilson Kiki Concianza, Gilmar Kiripuku Galache",
        orientacao : "Eliel Benites",
        producao : "Associação Cultural de Realizadores Indígenas (ASCURI)",
        maisInfos: "Câmera Ademilson Kiki Concianza, Gilmar Kiripuku Galache e Renan Braga",
        uri : '/campaigns/526?playlist_id=88',
    },
    {
        id: 'sessao_3_4',
        imagem : "Tixirim.jpg",
        titulo : "Txirin, o batismo do gavião",
        duracao : "27 min",
        ano : "2017",
        sinopse : "O filme dirigido e idealizado por Isaka Mateus Huni Kuin apresenta o batismo do Trixin, uma antiga tradição do povo Huni Kuin acerca dos cantos utilizados para superar a dor da perda de um ente querido e trazer ânimo e prosperidade para os vivos, realizado por jovens da aldeia São Joaquim, Acre, 5 anos após o falecimento do pajé Agostinho Muru",
        direcao : "Isaka Mateus Huni Kuin",
        uri : "/campaigns/528?playlist_id=88",
    },
    {
        id: 'sessao_3_5',
        imagem : "Festa_porcao.JPG",
        titulo : "Festa do Porcão",
        duracao : "21 min",
        ano : "2015",
        sinopse : "A festa do Mbebe Akaee, ou a Festa do Porcão, é a principal festa do Povo Cinta Larga. Os convidados de outras aldeias são convidados a dançar, cantar, beber a chicha de mandioca, se divertir e principalmente flechar de forma ritualizada o porco do mato. A Festa foi realizada na Aldeia Roosevelt (RO).",
        direcao : "Nadja Marin e Justino Cinta Larga",
        realizacao : " Imagens e Produção: Coletivo Akubaaj Cinta Larga de Cinema <br/><br/> Apoio: LISA-USP e ASCURI",
        uri : "/campaigns/544?playlist_id=88",
    },
    {
        id: 'sessao_3_6',
        imagem : "TATAKOX.jpeg",
        titulo : "Tatakox Vila Nova",
        duracao : "28 min",
        ano : "2008",
        sinopse : "Quando as mulheres sentem saudade das suas crianças que morreram pequenas, os Tatakox vão buscá-las e trazem-nas às aldeias para que as mães as vejam. Com a filmadora nós pudemos ver de onde os Tatakox tiram as crianças. Depois, no mesmo dia, os meninos vivos da aldeia são levados por de suas mães pelos espíritos para ficar na casa dos homens e aprender",
        direcao : " Guigui Maxakali",
        fotografia: "João Duro Maxakali",
        producao: "Aldeia Maxakali Vila Nova",
        realizacao : "Aldeia Maxakali Vila Nova",
        maisInfos: " Montagem: Mari Corrêa.",
        uri : "/campaigns/546?playlist_id=88",
    },
];

function exibirSessao() {

    let lista = filmesSessao3.map(function(filmeAtual){
        return `
            <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal${filmeAtual.id}">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" title="${ filmeAtual.titulo}" src="${prefixPathSessao3}${filmeAtual.imagem}" alt="${ filmeAtual.titulo}" />
                    <p class="text-center text-uppercase text-black">${filmeAtual.titulo} </p>
                </div>
            </div>
        `;
    });

    for (let i = 0; i < filmesSessao3.length; i++) {
        document.getElementById('sessao_3').innerHTML += lista[i];
    }


    let modals = filmesSessao3.map( function(filmeAtual) {

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
                                        <img class="img-fluid rounded mb-5" src="${prefixPathSessao3}${filmeAtual.imagem}" alt="${filmeAtual.titulo}" title="${filmeAtual.titulo}" />

                                        ${conteudo}

                                        <button class="btn btn-primary">
                                            <a href="${prefixUrl}${filmeAtual.uri}" target="_blank">
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

    for (let i = 0; i < filmesSessao3.length; i++) {
        document.getElementById('modal_sessao_3').innerHTML += modals[i];
    }
}

exibirSessao();

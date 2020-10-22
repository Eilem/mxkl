let prefixPathSessao2 = "./img/filmes/sessao_2/";
let urlPrefix = "https://www.videocamp.com/pt";

let filmesSessao2 = [
    {
        id: 'sessao_2_1',
        imagem : "Os_aneis_de_Maakakoxi.png",
        titulo : "Mãkakoxi Kany’i Ynpakje’y - Os anéis de Mãkakoxi",
        duracao : "6 min",
        ano : "2020",
        sinopse : "O coco de tucum é um elemento muito utilizado pelos artesãos indígenas para a confecção de diversos artefatos em seu cotidiano. Três jovens mulheres Myky gravam pela primeira vez o processo de fazer os anéis de tucum com Mãkakoxi, um habilidoso artesão da aldeia Japuíra, localizada na Amazônia brasileira, região noroeste do estado de Mato Grosso.",
        direcao : "Kamtinuwy Myky, Mãnynu Myky e Takarauku Myky",
        realizacao : "Coletivo Ijã Mytyli de Cinema Manoki e Myky / LISA-USP",
        uri : "/campaigns/542?playlist_id=88",
    },
    {
        id: 'sessao_2_2',
        imagem : "Ini_Myky.png",
        titulo : "Ini Myky manãnu pänãtã - Construindo a casa myky",
        duracao : "12 min",
        ano : "2020",
        sinopse : "Em uma aldeia myky, uma das tarefas que deve ser realizada com a colaboração de toda comunidade é a construção da Ini, uma grande casa comunal. Esse documentário curta-metragem, o primeiro realizado exclusivamente por uma equipe de produção indígena, narra de forma íntima a retomada dessa edificação pelos mais jovens. Ao final, uma grande festa celebra as diversas pessoas e relações envolvidas na construção dessa maloca, que é central para a vida ritual do povo Myky, habitante da Amazônia brasileira, na região noroeste do estado de Mato Grosso.",
        direcao : "Typju Myky",
        realizacao : "Coletivo Ijã Mytyli de Cinema Manoki e Myky / LISA-USP",
        uri : "/campaigns/540?playlist_id=88",
    },
    {
        id: 'sessao_2_3',
        imagem : "matanag.jpg",
        titulo : "Mãtãnãg, a Encantada",
        duracao : "28 min",
        ano : "2019",
        sinopse : "Mãtãnãg, a Encantada acompanha a trajetória da índia Mãtãnãg, que segue o espírito de seu marido, morto por uma picada de cobra, até a aldeia dos mortos. Juntos eles superam os obstáculos que separam o mundo terreno do mundo espiritual.",
        direcao : "Shawara Maxakali e Charles Bicalho",
        realizacao : "Pajé Filmes",
        roteiro: "Pajé Totó Maxakali Charles Bicalho",
        traducao: "Charles Bicalho, Isael Maxakali, Sueli Maxakali",
        producao: "Charles Bicalho, Cláudia Alves, Marcos Henrique Coelho",
        maisInfos:" Consultoria Cultural: Isael Maxakali, Sueli Maxakali <br/><br/> Direção de animação: Jackson Abacatu; Ilustração: Alexandre Maxakali, Ariston Maxakali, Cassiano Maxakali, Eliana Maxakali, Erismar Maxakali, Evaldo Maxakali, Gerente Maxakali, Mamei Maxakali, Marcinho Maxakali, Marco Maxakali, Paulinho Maxakali, Shawara Maxakali <br/><br/>Montagem: Charles Bicalho, Jackson Abacatu, Marcos Henrique Coelho <br/><br/> Design de produção: Charles Bicalho, Comunidade Maxakali de Aldeia Verde, Jackson Abacatu <br/><br/>Canto: Alexandre Maxakali, Ariston Maxakali, Cassiano Maxakali, Gerente Maxakali, Mamei Maxakali, Isael Maxakali, Shawara Maxakali <br/><br/> Vozes de diálogo: Alexandre Maxakali (pajé), Ariston Maxakali (esposo de Mãtãnãg), Eliane Maxakali (amiga de Mãtãnãg), Shawara Maxakali (Mãtãnãg) <br/><br/> Som Direto e Design sonoro: Guilherme Bahia <br/><br/>Produção de animação: Etama Produções <br/><br/>Finalização de imagem: Jackson Abacatu <br/><br/>Finalização de áudio: Guilherme Bahia <br/><br/>Arte gráfica: Charles Bicalho, Jackson Abacatu ",
        uri : "/campaigns/539?playlist_id=88",
    },
    {
        id: 'sessao_2_4',
        imagem : "tecendo_nossos_caminhos .png",
        titulo : "Tecendo nossos caminhos",
        duracao : "6 min",
        ano : "2019",
        sinopse : "Apenas seis anciões da população Manoki na Amazônia brasileira ainda falam o idioma indígena, um risco iminente de perderem essa importante dimensão de seus modos de existência. Decididos a retomarem seu idioma com os mais velhos, os mais jovens decidem narrar em imagens e palavras seus desafios e desejos. A partir da analogia com a fragilidade do algodão que vira fio forte para suportar o peso na rede, Marta Tipuici fala da resistência de seu povo, sua relação com a avó e a esperança de voltarem a falar sua língua nas novas gerações.",
        direcao : "Cledson Kajoli, Jackson Xinunxi e Marta Tipuici",
        realizacao : "Coletivo Ijã Mytyli de Cinema Manoki e Myky / LISA-USP",
        uri : "/campaigns/535?playlist_id=88",
    },
    {
        id: 'sessao_2_5',
        imagem : "Mbya_Piragui.jpg",
        titulo : "Mbya’i Piragui - A lenda da Sereia",
        duracao : "13 min",
        ano : "2016",
        sinopse : "O cacique da Aldeia Sapukai, João da Silva (em memória), recomendou que se filmasse a lenda do Pescador e da Sereia, a fim de transmitir aos jovens certos costumes guaranis, preservados nas entrelinhas das estórias contadas pelos mais velhos. Este filme ressalta a necessidade de se estabelecer limites aos desejos excessivos, os quais podem atrair maus espíritos.",
        direcao : "Maurício Vera Mirim da Silva",
        fotografia: "Waubnasse Bobiwash",
        realizacao : "La Boîte Rouge Vif - Universidade de Chicoutimi (UQAC) e LISA/USP",
        uri : "/campaigns/529?playlist_id=88",
    },
    {
        id: 'sessao_2_6',
        imagem : "Pawaat_segredos_medicina_tradicional_Cinta_Larga.jpeg",
        titulo : "Pawaat - os segredos da medicina tradicional Cinta Larga",
        duracao : "13 min",
        ano : "2015",
        sinopse : "Na Aldeia Roosevelt (RO), jovens acompanham os conhecedores das plantas de cura na mata aprendendo sobre o rico conhecimentos que os Cinta Larga possuem sobre os remédios e venenos das plantas. ",
        direcao : "Tony Cinta Larga",
        maisInfos : "Imagens e Produção: Coletivo Akubaaj Cinta Larga de Cinema<br/> Apoio: LISA-USP e ASCURI",
        uri : "/campaigns/531?playlist_id=88",
    },
    {
        id: 'sessao_2_7',
        imagem : "pirakua.png",
        titulo : "Pirakuá - Os Guardiões do Rio Ápa",
        duracao : "11m14s",
        ano : "2014",
        sinopse : "Na fronteira do Brasil com o Paraguai, os Kaiowá da Aldeia Pirakuá, foram incumbidos por Pai Kuará para cuidar do bem mais importante para os seres humanos, a Água. Confinados em seu território, eles cumprem a missão a eles designada, com muita luta e força, mantendo a mata de pé e sua cultura ecoando pelos serros da Fronteira, orgulhando os Donos da Água.",
        direcao : "Gilmar Galache",
        producao : "Associação Cultural de Realizadores Indígenas (ASCURI)",
        imagens: "Ademilson Kiki Concianza e Gilmar Galache",
        edicao : "Gilmar Galache",
        traducao : 'Ademilson Kiki Concianza',
        uri : "/campaigns/523?playlist_id=88",
    },
    {
        id: 'sessao_2_8',
        imagem : "panambizinho.png",
        titulo : "Panambizinho - o fogo que nunca apaga",
        duracao : "12min13s",
        ano : "2014",
        sinopse : "Quando Pai Kuará foi embora com sua mãe morar no Céu, deixou para o Povo do Mato, o Fogo. Mas a dádiva teve seu preço, cuidar dos Rios e Matas para que todos possam ter acesso a esse recurso. Hoje, Panambizinho possui quase nada de sua mata original, devido ao plantio de soja e milho pelos Colonos não-indígenas, que roubaram as terras tradicionais em todo Mato grosso do Sul. Mas ainda sim o Povo do Mato Original cuida do que restou, e procura caminhos para recuperar a Mata Verdadeira.",
        direcao : "Gilmar Galache",
        producao : "Associação Cultural de Realizadores Indígenas (ASCURI)",
        imagens: "Ademilson Kiki Concianza e Gilmar Galache",
        edicao : "Gilmar Galache",
        traducao : 'Ademilson Kiki Concianza',
        uri : "/campaigns/522?playlist_id=88",
    },
    {
        id: 'sessao_2_9',
        imagem : "Vende-se_Pequi.jpg",
        titulo : "Vende-se Pequi",
        duracao : "24 min",
        ano : "2013",
        sinopse : "O povo indígena Manoki vive no noroeste de Mato Grosso e uma de suas atividades produtivas é a venda de pequi na estrada que passa por sua terra. Durante uma oficina de vídeo, jovens decidem mostrar para o mundo um pouco de suas aldeias e do processo de coleta e venda desse fruto. Instigados pela possibilidade de filmarem e serem os próprios protagonistas, eles saem à procura dos velhos numa tentativa de descobrir se existe alguma história sobre a origem do pequi. A elaboração desse filme foi um processo inteiramente compartilhado entre realizadores indígenas e não-indígena: desde a concepção e filmagem, até a edição e finalização. Todas as imagens do filme foram realizadas pelos próprios cinegrafistas Manoki.",
        direcao : "João Paulo Kajoli e André Lopes",
        realizacao : "Coletivo Ijã Mytyli de Cinema Manoki e Myky / LISA-USP",
        uri : "/campaigns/541?playlist_id=88",
    },
    {
        id: 'sessao_2_10',
        imagem : "QUANDO_OS_YAMIY_VEM_DANCAR.png",
        titulo : "Quando os Yãmĩy Vêm Dançar Conosco",
        duracao : "56 min",
        ano : "2012",
        sinopse : "Apesar de sua história antiga de contato com os brancos, desde o século 16, os Maxakali mantiveram sua língua e sua relativa autonomia em relação à sociedade nacional. Muitos velhos, pajés e lideranças maxakali afirmam que sua forca provém das relações que mantêm com seus Yãmiy, seus espíritos",
        direcao : "Isael Maxakali, Suely Maxakali e Renata Otto",
        imagens: "Isael Maxakali",
        traducao: "Isael Maxakali, Gilmar Maxakali e Suely Maxakali",
        producao: "Milene Migliano",
        fotografia: " Gercino Alves Batista, Milene Migliano e Renata Otto.",
        maisInfos : "Montagem: Carolina Canguçu; <br/><br/>Yãyãxop (pajés): Mamey Maxakali, Gustavo Maxakali, Totó Maxakali e Badu Maxakali <br/><br/> Direção de produção: Suely Maxakali e Milene Migliano <br/><br/> Assistentes de produção: Izaque Txekewe, Gercino Alves e Roberto Romero <br/><br/> Motorista: Leandro Diniz <br/><br/> Finalização de som: Bruno Vasconcelos <br/><br/> Finalização de imagem: Bernard Belisário <br/><br/> Arte gráfica: Flora Lopes e Luísa Rabello",
        uri : "/campaigns/538?playlist_id=88",
    },
    {
        id: 'sessao_2_11',
        imagem : "Manoa.jpg",
        titulo : "Manoá - A lenda das queixadas",
        duracao : "17 min",
        ano : "2000",
        sinopse : "Djekupe, jovem pai guarani, resolve caçar mesmo contra os protestos de sua mulher. No interior da mata, encontra três índias que prometem levá-lo à terra onde nada perece: yvy marã e'y",
        direcao : "José Alberto Mendes e Carlos Papá Mirim Poty ",
        uri : "/movies/manoa-a-lenda-das-queixadas",
    },

];

function exibirSessao() {
    let lista = filmesSessao2.map(function(filmeAtual){

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

    for (let i = 0; i < filmesSessao2.length; i++) {
        document.getElementById('sessao_2').innerHTML += lista[i];
    }

    let modals = filmesSessao2.map( function(filmeAtual) {

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
            conteudo += ` <p><span>Pesquisa e Roteiro: </span> ${filmeAtual.roteiro} </p>`;
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
            conteudo += ` <p> <span>Tradução: </span>${filmeAtual.traducao} </p>`;
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
                                        <img class="img-fluid rounded mb-5" src="${prefixPathSessao2}${filmeAtual.imagem}" alt="${filmeAtual.titulo}" title="${filmeAtual.titulo}" />

                                        ${conteudo}

                                        <button class="btn btn-primary">
                                            <a href="${urlPrefix}${filmeAtual.uri}" target="_blank">
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

    for (let i = 0; i < filmesSessao2.length; i++) {
        document.getElementById('modal_sessao_2').innerHTML += modals[i];
    }
}

exibirSessao();

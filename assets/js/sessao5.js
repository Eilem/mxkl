let prefixPathSessao1 = "./img/filmes/sessao_5/";
let filmes = [
    {
        id : "sessao_5_1",
        titulo: "MÃTÃNÃG, A ENCANTADA",
        infos: "(Brasil, 2019, 14 min, cor)",
        sinopse: "Mãtãnãg, a Encantada acompanha a trajetória da índia Mãtãnãg, que segue o espírito de seu marido, morto por uma picada de cobra, até a aldeia dos mortos. Juntos eles superam os obstáculos que separam o mundo terreno do mundo espiritual.",
        dados: 'DIREÇÃO: Shawara Maxakali, Charles Bicalho | PESQUISA E ROTEIRO: Pajé Totó Maxakali, Charles Bicalho | CONSULTORIA CULTURAL: Isael Maxakali, Sueli Maxakali | DIREÇÃO DE ANIMAÇÃO: Jackson Abacatu | ILUSTRAÇÃO: Alexandre Maxakali, Ariston Maxakali, Cassiano Maxakali, Eliana Maxakali, Erismar Maxakali, Evaldo Maxakali, Gerente Maxakali, Mamei Maxakali, Marcinho Maxakali, Marco Maxakali, Paulinho Maxakali, Shawara Maxakali | MONTAGEM: Charles Bicalho, Jackson Abacatu, Marcos Henrique Coelho | DESIGN DE PRODUÇÃO: Charles Bicalho, Comunidade Maxakali de Aldeia Verde, Jackson Abacatu | CANTO: Alexandre Maxakali, Ariston Maxakali, Cassiano Maxakali, Gerente Maxakali, Mamei Maxakali, Isael Maxakali, Shawara Maxakali | VOZES DE DIÁLOGO: Alexandre Maxakali (pajé), Ariston Maxakali (esposo de Mãtãnãg), Eliane Maxakali (amiga de Mãtãnãg), Shawara Maxakali (Mãtãnãg) | TRADUÇÃO DE MAXAKALI PARA PORTUGUÊS: Charles Bicalho, Isael Maxakali, Sueli Maxakali | SOM DIRETO E DESIGN SONORO: Guilherme Bahia | PRODUÇÃO: Charles Bicalho, Cláudia Alves, Marcos Henrique Coelho | PRODUÇÃO DE ANIMAÇÃO: Etama Produções | FINALIZAÇÃO DE IMAGEM: Jackson Abacatu | FINALIZAÇÃO DE ÁUDIO: Guilherme Bahia | ARTE GRÁFICA: Charles Bicalho, Jackson Abacatu | REALIZAÇÃO: Pajé Filmes | Belo Horizonte / Aldeia Verde ( Ladainha - MG)',
        link: "#",
    },
    {
        id : "sessao_5_2",
        titulo: "YÃMĨYHEX: AS MULHERES-ESPÍRITO",
        infos: "(Brasil, 2019, 76 min, cor)",
        sinopse: "Após passarem alguns meses na Aldeia Verde, as yãmĩyhex (mulheres-espírito) se preparam para partir. Os cineastas Sueli e Isael Maxakali registram os preparativos e a grande festa para sua despedida. Durante os dias de festa, uma multidão de espíritos atravessa a aldeia. As yãmĩyhex vão embora, mas sempre voltam com saudades dos seus pais e das suas mães.",
        dados: 'DIREÇÃO: Sueli Maxakali e Isael Maxakali |IMAGENS: Sueli Maxakali, Isael Maxakali, Alexandre Maxakali, Cassiano Maxakali, Patrícia Ferreira Para Yxapy, Roberto Romero, Carolina Canguçu | ASSISTÊNCIA DE DIREÇÃO: Carolina Canguçu e Roberto Romero| MONTAGEM: Luisa Lanna EM COLABORAÇÃO COM: Carolina Canguçu, Roberto Romero | FINALIZAÇÃO DE SOM: Pedro Portella | Aldeia Verde ( Ladainha - MG)',
        link: "#",
    },
  
];

function exibirSessao5() {

    let lista = filmesSessao5.map(function(filmeAtual){
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

    for (let i = 0; i < filmesSessao5.length; i++) {
        document.getElementById('sessao_5').innerHTML += lista[i];
    }


    let modals = filmesSessao5.map( function(filmeAtual) {

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

    for (let i = 0; i < filmesSessao5.length; i++) {
        document.getElementById('modal_sessao_3').innerHTML += modals[i];
    }
}

exibirSessao5();

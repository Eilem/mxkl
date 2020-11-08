let prefixPathSessao3 = "./img/filmes/sessao_3/";
let filmesSessao3 = [
    {
        id : "sessao_3_1",
        titulo: "OS YÃMĨY BATIZAM MENINOS",
        subtitulo: "Yãmĩy te kakxop pix ax",
        infos: "(Brasil, 2012, 22 min, cor)",
        imagem: "YamiyBatizamMeninos.png",
        sinopse: "Enquanto as brumas da madrugada se dissipam, os Yãmĩyxop chegam na aldeia e tomam as crianças Maxakali / Tikmũ’ũn carregando-as penduradas em suas costas. Faz-se necessário acordar o rio e amansá-lo para que banhe e batize os novos homens que agora passarão a frequentar a casa dos cantos. O filme expõe uma parcela do delicado sistema educacional Tikmũ’ũn.",
        dados: 'DIREÇÃO: Ismail Maxakali | FOTOGRAFIA: Ismail Maxakali, Josemar Maxakali | MONTAGEM: Ana Estrela, Ismail Maxakali, Marilton Maxakali | SOM: Ismail Maxakali, Josemar Maxakali | LEGENDA E TRADUÇÃO: Ismail Maxakali, Josemar Maxakali, Marilton Maxakali, Ana Estrela | COORDENAÇÃO: Rosângela de Tugny | PRODUÇÃO: INCTI - Instituto Nacional de Ciência e Tecnologia (Inclusão no Ensino Superior e na Pesquisa) | Aldeia Vila Nova (Pradinho, T. I. Maxakali)',
        link: "https://www.looke.com.br/filmes/os-yamiy-batizam-meninos",
    },
    {
        id : "sessao_3_2",
        titulo: "INICIAÇÃO DOS FILHOS DOS ESPÍRITOS DA TERRA",
        subtitulo: "Kakxop pit hãmkoxuk xop te yũmũgãhã",
        infos: "(Brasil, 2015, 48 min, cor)",
        imagem: "IniciaçãoDosFilhos.png",
        sinopse: "Os meninos da Aldeia Verde Tikmũ´ũn / Maxakali são iniciados pelos espíritos que vivem na terra. A partir de agora eles poderão frequentar o kuxex (casa de religião), conviver, alimentar e aprender com os Yãmĩyxop.",
        dados: 'DIREÇÃO E FOTOGRAFIA: Isael Maxakali | SOM: Isael Maxakali | MONTAGEM: Isael Maxakali, Carolina Canguçu, Sueli Maxakali | PRODUÇÃO: Aldeia Verde ( Ladainha - MG)',
        link: "https://www.looke.com.br/filmes/iniciacao-dos-filhos-dos-espiritos-da-terra",
    },
    {
        id : "sessao_3_",
        titulo: "TATAKOX VILA NOVA",
        subtitulo: "Tatakox da Aldeia Vila Nova",
        infos: "(Brasil, 2009, 22 min, cor)",
        imagem: "Tatakox.png",
        sinopse: "Quando as mulheres sentem saudade das suas crianças que morreram pequenas, os Tatakox vão buscá-las e trazem-nas às aldeias para que as mães as vejam. Com a filmadora nós pudemos ver de onde os Tatakox tiram as crianças. Depois, no mesmo dia, os meninos vivos da aldeia são levados por de suas mães pelos espíritos para ficar na casa dos homens e aprender.",
        dados: 'DIREÇÃO: Guigui Maxakali, Comunidade Maxakali Aldeia Vila Nova | EDIÇÃO: João Duro Maxakali, Guigui Maxakali, Mari Corrêa | LEGENDAGEM E FINALIZAÇÃO: Mari Corrêa | TRADUÇÃO: Zé Antoninho Maxakali, Rosângela Tugny, Douglas Campelo | PRODUÇÃO: Aldeia Vila Nova (Pradinho, T. I. Maxakali)',
        link: "https://www.looke.com.br/filmes/tatakox-da-aldeia-vila-nova",
    },
];

function exibeSessao3() {

    let lista = filmesSessao3.map( function( filmeAtual){
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
                                      
                                        <img class="img-fluid rounded mb-3" src="${prefixPathSessao3}${filmeAtual.imagem}" alt="${filmeAtual.titulo}" title="${filmeAtual.titulo}" />
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

    for (let i = 0; i < filmesSessao3.length; i++) {
        document.getElementById('modal_sessao_3').innerHTML += modals[i];
    }
}

exibeSessao3();
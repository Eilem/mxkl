let prefixPathFormacao = "./img/formacao/";
let formacao = [
    {
        id: 'img_1',
        imagem : "1-Sueli_Maxakali_filma_o_1_Encontro_de_Pajes_de_Aldeia_Nova.JPG",
        titulo : "Sueli Maxakali filma o 1º Encontro de Pajés de Aldeia Nova. ",
    },
    {
        id: 'img_2',
        imagem : "2-Mulheres_dançando_durante_o_1_Encontro_de_Pajes_de_Aldeia_Nova.jpeg",
        titulo : "Mulheres dançando durante o 1º Encontro de Pajés de Aldeia Nova. ",
    },
    {
        id: 'img_3',
        imagem : "3-Juninha_Maxakali_filma_chegada_das_Yamiyhex_na_Aldeia_Maravilha.jpg",
        titulo : "Juninha Maxakali filma chegada das Yãmĩyhex na Aldeia Maravilha.",
    },
    {
        id: 'img_4',
        imagem : "4-Juninha_Maxakali_filma_chegada_das_Yamiyhex_na_Aldeia_Maravilha_.jpeg",
        titulo : "Juninha Maxakali filma chegada das Yãmĩyhex na Aldeia Maravilha.",
    },
    {
        id: 'img_5',
        imagem : "5-Un_kau_ok.jpg",
        titulo : "Ūn ka’ok.",
    },
    {
        id: 'img_6',
        imagem : "6-Arnalda_Maxakali_ensina_mocas_a_filmar_os_Yamiyxop_na_Aldeia_Nova_Vila_no_Pradinho.jpeg",
        titulo : "Arnalda Maxakali ensina moças a filmar os Yãmĩyxop na Aldeia Nova Vila, no Pradinho.",
    },
    {
        id: 'img_7',
        imagem : "7-Janaina_Maxakali_filma_as_Yamiyhex_no_Pradinho.jpg",
        titulo : "Janaína Maxakali filma as Yãmĩyhex, no Pradinho.",
    },
    {
        id: 'img_8',
        imagem : "8-Janaina_Maxakali_filma_paje_Derli_Maxakali_na_Aldeia_Nova_Boa_no_Pradinho.jpg",
        titulo : "Janaína Maxakali filma pajé Derli Maxakali na Aldeia Nova Boa, no Pradinho.",
    },
    {
        id: 'img_9',
        imagem : "9-Nova_geracao_de_cineastas_Tikmuun_Maxakali.jpeg",
        titulo : "Nova geração de cineastas Tikmũ‘ũn Maxakali.",
    },
    {
        id: 'img_10',
        imagem : "10-Santinha_Maxakali_em_oficina_na_Aldeia_Maravilha.jpg",
        titulo : "Santinha Maxakali em oficina na Aldeia Maravilha",
    },
    {
        id: 'img_11',
        imagem : "11-Santinha_Maxakali_em_oficina_na_Aldeia_Maravilha_no_Pradinho.jpg",
        titulo : "Santinha Maxakali em oficina na Aldeia Maravilha no Pradinho.",
    },
    {
        id: 'img_12',
        imagem : "12-Un_Ka_ok_Koxukxop_na_Aldeia_Maravilha.jpg",
        titulo : "Ũn Ka'ok Koxukxop na Aldeia Maravilha",
    },
];

function exibirSessao() {

    let lista = formacao.map( function( imgAtual){

        return `
            <div class="col-md-6 col-lg-3 mb-5">
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal${imgAtual.id}">
                    <img class="img-fluid" title="${ imgAtual.titulo}" src="${prefixPathFormacao}${imgAtual.imagem}" alt="${ imgAtual.titulo}" />
                </div>
            </div>
        `;
    });

    for (let i = 0; i < formacao.length; i++) {
        document.getElementById('fotos_formacao').innerHTML += lista[i];
    }

    let modals = formacao.map( function(imgAtual) {
        return `
            <div class="portfolio-modal modal fade" id="portfolioModal${imgAtual.id}" tabindex="-1" role="dialog" aria-labelledby="portfolioModal${imgAtual.id}Label" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="fas fa-times"></i></span>
                        </button>

                        <div class="modal-body text-center">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">

                                        <img class="img-fluid rounded mb-5" src="${prefixPathFormacao}${imgAtual.imagem}" alt="${imgAtual.titulo}" title="${imgAtual.titulo}" />

                                        <p>${imgAtual.titulo} </p>
                                      
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

    for (let i = 0; i < formacao.length; i++) {
        document.getElementById('modal_formacao').innerHTML += modals[i];
    }
}

exibirSessao();

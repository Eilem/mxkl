let prefixPathFormacao = "./img/formacao/";
let formacao = [
    {
        id: 'img_1',
        imagem : "foto1.jpg",
        titulo : "Sueli Maxakali filma o 1º Encontro de Pajés de Aldeia Nova. ",
    },
    {
        id: 'img_2',
        imagem : "foto2.jpeg",
        titulo : "Mulheres dançando durante o 1º Encontro de Pajés de Aldeia Nova. ",
    },
    {
        id: 'img_3',
        imagem : "foto3.jpg",
        titulo : "Juninha Maxakali filma chegada das Yãmĩyhex na Aldeia Maravilha.",
    },
    {
        id: 'img_4',
        imagem : "foto4.jpeg",
        titulo : "Juninha Maxakali filma chegada das Yãmĩyhex na Aldeia Maravilha.",
    },
    {
        id: 'img_5',
        imagem : "foto5.jpeg",
        titulo : "Ūn ka’ok.",
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

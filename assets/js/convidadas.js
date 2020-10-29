let convidados = [
        {
            id: "convidado_1",
            nome :"Ailton Krenak",
            local :"Serra do Cipó / MG",
            bio: "Ambientalista, líder indígena, escritor, filósofo intérprete do Brasil, pertencente ao povo Krenak. Criador da ONG Núcleo de Cultura Indígena, Doutor honoris causa pela Universidade Federal de Juiz de Fora, Grão-cruz da Ordem do Mérito Cultural. Autor dos livros Ideias para adiar o fim do mundo (2019), O amanhã não está à venda (2020) e A vida não é útil (2020)",           
        }, 
        {
            id: "convidado_2",
            nome :"Cleonice Pankararu",
            local: "Araçuaí / MG",
            bio: "Liderança Pankararu da Aldeia Cinta Vermelha-Jundiba (CVJ) localizada no município de Araçuaí, no Vale do Jequitinhonha",           
        }, 
        {
            id: "convidado_3",
            nome :"Cristine Takuá",
            local: "T. I. Ribeirão Silveira - Bertioga / SP",
            bio: "Professora e artista indígena do povo Maxakali. Formada em Filosofia pela UNESP, ministra aulas de Filosofia, Sociologia, História e Geografia na Escola Estadual Indígena Txeru Ba’e Kua-I da Terra Indígena Ribeirão Silveira. É fundadora e diretora do Instituto Maracá e foi representante por São Paulo na Comissão Guarani Yvyrupa (2016-2019)",           
        }, 
        {
            id: "convidado_4",
            nome :"Geralda Soares",
            local: "Araçuaí / MG",
            bio: "Estudiosa do Jequitinhonha (MG), viveu por décadas com diferentes comunidades indígenas, acompanhando os Maxakali / Tikmũ´ũn através de gerações. Uma das mais profundas conhecedoras e atuantes indigenistas do país, é uma grande especialista na história da ocupação das regiões dos vales dos rios Jequitinhonha, Doce e Mucuri, em Minas Gerais",           
        }, 
        {
            id: "convidado_5",
            nome :"Mari Corrêa",
            local: "São Paulo / SP",
            bio: "Cineasta, produtora e editora de documentários. Inicia seu trabalho audiovisual com comunidades indígenas em 1992, no Parque Indígena do Xingu (MT, Brasil). Co-editora de Vídeo nas Aldeias ONG 1998-2009. Começou sua carreira profissional na França, em 1985. Como editora de cinema trabalhou para empresas de produção francesas independentes e empresas de televisão européias. Em 1997, dirigiu o longa-metragem Indiennes produzido para TV Arte (França/Alemanha) e expôs em festivais internacionais e televisão europeia. Em 2007 executa em coautoria com Karané Ikpeng o filme Meu Primeiro Contato Pirinop, uma co-produção de Vídeo nas Aldeias / Zarafa Films em associação com TV France 2. Em 2009 fundou o Instituto Catitu-Aldeia em Cena",           
        }, 
        {
            id: "convidado_6",
            nome :"Patrícia Pará Yxapy",
            local: "São Miguel das Missões / RS",
            bio: "Cineasta, formada pelas oficinas da ONG Vídeo nas Aldeias. É codiretora, com Ariel Ortega, dos premiados Bicicletas de Nhanderu (2011), Mbya-Mirim (2013) e Desterro Guarani (2011). Assina a codireção, com Vincent Carelli e Ernesto de Carvalho, de Tava: A casa de pedra (2012). Interessa-se pelas questões relativas ao lugar da mulher, tanto em seu povo quanto em outras sociedades. Participou de diversas mostras e festivais no Brasil e no mundo, tais como o American Native Film Festival, forumdoc.bh, Lugar do Real, Cine Fronteira, FINCAR, entre outros",           
        },
];


function exibirConvidados() {    
    let lista = convidados.map(function(convidado){
    
        return `
            <div class="col-md-6 col-lg-4">
                <div class="portfolio-item mx-auto">
                    <h5 class="text-center text-uppercase text-black">${convidado.nome}</h5>
                    <h6 class="text-center">(${convidado.local})</h6>
                    <p class="text-justify">${convidado.bio}</p>
                </div>
            </div>
        `;
    });
    
    for (let i = 0; i < convidados.length; i++) {
        document.getElementById('convidados').innerHTML += lista[i];
    }
}

exibirConvidados();

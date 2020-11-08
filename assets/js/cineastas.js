let prefixPath = "./img/cineastas/";

let cineastas = [
    // {
    //     nome : "Ana Estrela",
    //     imagem : "ana.png",
    //     biografia : "Ana Carolina Estrela da Costa, antropóloga e documentarista e co-fundadora da Rede CineFlecha, desenvolve há cerca de dez anos oficinas de formação audiovisual, além de vídeos, documentários e pesquisas com os Maxakali/Tikmũ´ũn, da região do Vale do Mucuri, em Minas Gerais. Doutoranda em Antropologia Social na Universidade de São Paulo e integrante do Centro de Estudos Ameríndios (CEstA) e do Laboratório de Imagem e Som em Antropologia (LISA), estuda a produção audiovisual indígena também há dez anos, e já realizou inúmeros projetos de produção audiovisual, dentre eles a criação do Coletivo de Cinema Maxakali do Pradinho. Seu projeto de doutorado conta com apoio da FAPESP.",
    // },    
    // {
    //     nome : "Bruno Vasconcelos",
    //     imagem : "bruno.png",
    //     biografia : "É formado em Comunicação Social pela UFMG e em Cinema pela EICTV - Escuela Internacional de Cine y TV, de Cuba. Integra o grupo de curadores e realizadores do forumdoc.bh. Trabalha em produções audiovisuais com desenho de som, montagem e fotografia.",
    // },    
    // {
    //     nome : "Charles Bicalho",
    //     imagem : "charles.png",
    //     biografia : "Superior de Tecnologia em Design Gráfico no Instituto de Arte e Projeto (INAP) em Belo Horizonte. Graduação em Letras na UFMG. Especialização em Pós-Produção para Cinema, TV e Novas Mídias no Centro Universitário UNA-BH. Master of Arts em Estudos Literários na University of New Mexico, EUA. Doutorado em Estudos Literários na UFMG. Diretor, produtor, roteirista. Diretor dos curtas: Caligrafilmes (2008); Making of Dicionário (2012); Pirapora (2012); Konãgxeka: O Dilúvio Maxakali (2016). Membro fundador da produtora Pajé Filmes.",
    // },    
    {
        nome : "Derli Maxakali",
        imagem : "Derli.png",
        biografia : " Liderança e cineasta da Terra Indígena Maxakali do Pradinho. Membro do Coletivo de Cinema Maxakali do Pradinho, desde 2008 atua em oficinas de formação nas aldeias. Atualmente integra o Coletivo de Cinema Maxakali do Pradinho.",
    },    
    {
        nome : "Guigui Maxakali",
        imagem : "Guigui.png",
        biografia : 'Professor, Pajé e Cacique da aldeia Vila Nova, na Terra Indígena Maxakali do Pradinho (MG), vem há quase dez anos realizando inúmeros projetos (na UFMG, no Museu do Índio / FUNAI, na Universidade de São Paulo, dentre outros). Atuou como diretor e realizador de dezenas de filmes, dentre eles o premiado "Tatakox Vila Nova" (2009).',
    },    
    {
        nome : "Isael Maxakali",
        imagem : "isael.png",
        biografia : 'É liderança e professor na Aldeia Nova, comunidade maxakali nas proximidades do município de Ladainha - MG. Membro do coletivo audiovisual Pajé Filmes desde sua fundação em 2008. Seu trabalho audiovisual constitui uma vasta e premiada filmografia. Atualmente é vereador na cidade de Ladainha (MG) e compõe, como professor, o Programa de Formação Transversal em Saberes Tradicionais da UFMG. Participou das exposições VaiVém (Centros Culturais Banco do Brasil de São Paulo, Rio de Janeiro, Brasília e Belo Horizonte, 2019 - 2020) e Mundos Indígenas (Espaço de Conhecimento da UFMG, Belo Horizonte, 2019 - 2020). Em 2020 foi o artista vencedor do Prêmio Pipa Online.',
    },    
    {
        //falta img
        nome : "Ismail Maxakali",
        imagem : "Ismail.png",
        biografia : "Liderança, professor e cineasta da Terra Indígena Maxakali do Pradinho. Atualmente integra o Coletivo de Cinema Maxakali do Pradinho.",
    },    
    {
        nome : "Josemar Maxakali",
        imagem : "josemar.png",
        biografia : 'Josemar Maxakali, da Terra Indígena Maxakali do Pradinho (MG), vem há quase dez anos realizando inúmeros projetos (na UFMG, no Museu do Índio / FUNAI, na Universidade de São Paulo, dentre outros), filmes e fotografias, dentre eles o "Cosmopista" (2013).  Atualmente integra o Coletivo de Cinema Maxakali do Pradinho.',
    },    
    {
        nome : "Juninha Maxakali",
        imagem : "juninha.png",
        biografia : "Participou da primeira oficina de cinema no Pradinho (Terra Indígena Maxakali) em 2008, que resultou em filmes premiados, e dez anos depois, retomou as atividades com o cinema por meio do Coletivo de Cinema Maxakali do Pradinho, na Aldeia Maravilha. Atualmente integra o Coletivo de Cinema Maxakali do Pradinho.",
    },    
    {
        nome : "Marilton Maxakali",
        imagem : "marilton.png",
        biografia : "Professor e cineasta, participou de diversas oficinas de cinema no Pradinho (Terra Indígena Maxakali), Aldeia Verde e comunidade Cachoeirinha, que resultaram em filmes premiados. Realizou trabalhos com o Museu do Índio / FUNAI e diversos projetos com a Universidade Federal de Minas Gerais e a Universidade de São Paulo. Atualmente mantém suas atividades com o cinema por meio do Coletivo de Cinema Maxakali do Pradinho, na Aldeia Maravilha",
    },    
    {
        nome : "Natalino Maxakali",
        imagem : "natalino.png",
        biografia : 'Filho do Pajé Pequi Maxakali, da Terra Indígena Maxakali do Pradinho (MG), Natalino Maxakali é professor, estuda e realiza trabalhos desde 2013. Diretor do longa "Popxop" (2019), dentre outras produções ainda sendo desenvolvidas. Já se apresentou em eventos dedicados ao cinema maxakali e a modos de fala indígenas, na Universidade de São Paulo. Atualmente, mantém suas atividades com o cinema através do Coletivo de Cinema Maxakali do Pradinho, na Aldeia Maravilha.',
    },    
    // {
    //     nome : "Renata Otto",
    //     imagem : "renata.png",
    //     biografia : "Mestre em Antropologia Social pelo Museu Nacional da UFRJ,  doutoranda em antropologia social na UNB. Membro da Filmes de Quintal",
    // },    
    // {
    //     nome : "Roney Freitas",
    //     imagem : "roney.png",
    //     biografia : "Mestrando no Programa de Meios e Processos Audiovisuais e Bacharel em Audiovisual pela ECA-USP, Roney trabalha no mercado audiovisual como roteirista, diretor e produtor. Atuou como diretor e roteirista dos curtas Laurita e Aurora e do documentário Memória de Rio, prestigiados em diversos festivais nacionais e internacionais. Assina o roteiro da animação Canta, TYETÉ, realizado pelo Núcleo Paulistano de Animação (NUPA). Atualmente produz filmes independentes pela Arte in Vitro Filmes, empresa do qual é sócio produtor. Em parceria com o cineasta Isael Maxakali, seu último trabalho Grin recebeu prêmios de melhor filme em festivais nacionais e menção honrosa na 21ª Bienal de Arte Contemporânea Sesc_Videobrasil",
    // },    
    {
        nome : "Santinha Maxakali",
        imagem : "Santinha.png",
        biografia : "Artista e cineasta, realiza suas atividades com o cinema por meio do Coletivo de Cinema Maxakali do Pradinho na Aldeia Maravilha.",
    },    
    {
        nome : "Shawara Maxakali-Pataxó",
        imagem : "shawara.png",
        biografia : "Artista e cineasta em formação. Realiza suas atividades com o cinema por meio do coletivo de cinema Maxakali de Ladainha, em Aldeia Verde. Dirigiu a premiada animação Mãtãnãg, a Encantada (2019) , filme selecionado em diversos festivais nacionais e internacionais.",
    },    
    {
        nome : "Sueli Maxakali",
        imagem : "sueli.png",
        biografia : "É artista, sua produção concentra-se no trabalho com as miçangas, técnicas têxteis, fotografia e cinema. Atua como professora e liderança da Aldeia Nova, comunidade maxakali próxima ao município de Ladainha - MG. Participou dos projetos Hitupmã’ax/Curar (Faculdade de Letras da UFMG e Literaterras, 2009), Koxuk Xop/Imagem (Beco do Azougue Editorial, 2009) com fotografias das mulheres maxakali sobre os rituais e o cotidiano da Aldeia Verde. Faz fotografia still e assistência de direção nos filmes de Isael Maxakali. Participou das exposições VaiVém (Centros Culturais Banco do Brasil de São Paulo, Rio de Janeiro, Brasília e Belo Horizonte, 2019 - 2020) e Mundos Indígenas (Espaço de Conhecimento da UFMG, Belo Horizonte, 2019 - 2020). Atualmente compõe, como professora, o Programa de Formação Transversal em Saberes Tradicionais da UFMG.",
    },    
    
             
];
//fim lista de cineastas


function exibir() {
    
    let lista = cineastas.map(function(realizador){

        return ` 
        <div class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item mx-auto">
                <img class="img-fluid" src="${prefixPath}${realizador.imagem}" alt="${realizador.nome}" title=" ${realizador.nome}" />
                <p></p>
                <h3>${realizador.nome}</h3>
                <p class="text-justify">${realizador.biografia}</p>
            </div>                    
        </div>
        `;
    });
    
    for (let i = 0; i < cineastas.length; i++) {
        document.getElementById('cineastas').innerHTML += lista[i];

    }
}

exibir();

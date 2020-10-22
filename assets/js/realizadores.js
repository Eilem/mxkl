let prefixPath = "./img/realizadores/";

let realizadores = [
    // 1
    {
        nome : "Ademilson Kiki Concianza",
        imagem : "1-Ademilson_Kiki_Concianza.jpg",
        biografia : "Ademilson Kiki Concianza, do povo Kaiowá, é aprendiz de rezador (yvyrayjá), ator, fotógrafo e cineasta da ASCURI (Associação Cultural de Realizadores Indígenas). Desde sua participação como ator no filme “Terra Vermelha” (2008), Kiki se aproximou do cinema, participando de uma série de oficinas de formação audiovisual no Brasil e na Bolívia. Mais recentemente, formou-se em montagem e edição pela Escola de Cinema Darcy Ribeiro (RJ).",
    },   
    //2
    {
        nome : "Ana Estrela",
        imagem : "2-Ana_Estrela.png",
        biografia : "Ana Carolina Estrela da Costa, antropóloga e documentarista e co-fundadora da Rede CineFlecha, desenvolve há cerca de dez anos oficinas de formação audiovisual, além de vídeos, documentários e pesquisas com os Maxakali/Tikmũ´ũn, da região do Vale do Mucuri, em Minas Gerais. Doutoranda em Antropologia Social na Universidade de São Paulo e integrante do Centro de Estudos Ameríndios (CEstA) e do Laboratório de Imagem e Som em Antropologia (LISA), estuda a produção audiovisual indígena também há dez anos, e já realizou inúmeros projetos de produção audiovisual, dentre eles a criação do Coletivo de Cinema Maxakali do Pradinho. Seu projeto de doutorado conta com apoio da FAPESP.",
    },    
    //3
    {
        nome : "André Tupxi Lopes",
        imagem : "3-Andre_Tupxi_Lopes.JPG",
        biografia : "Desde 2008, pesquiso, trabalho e convivo com os povos Manoki e Myky de Mato Grosso, atuando como antropólogo, documentarista e formador de realizadores indígenas. Criamos juntos o coletivo Ijã Mytyli de cinema Manoki e Myky. Estes processos de apropriação de recursos audiovisuais nas aldeias fazem parte de minha pesquisa de doutorado em antropologia pela USP, onde contribuo como pesquisador no CEstA e no LISA. Tive a oportunidade de participar da formação de realizadores indígenas em diversos povos, como Wayana, Apalai, Wajãpi, Tiryó e Guarani. Em 2019 pude conhecer experiências de mídias indígenas na América do Norte, como pesquisador visitante da NYU. Desse período surgiram experiências de colaboração com instituições internacionais de cinema indígena, como Wapikoni Mobile e CLACPI. Sou co-fundador e articulador na Rede CineFlecha e integro a RICAA (Réseau international de création audiovisuelle autochtone).",
    },    
    //4
    {
        nome : "ASCURI (Associação Cultural de Realizadores Indígenas)",
        imagem : "4-ASCURI.jpg",
        biografia : "A ASCURI (Associação Cultural de Realizadores Indígenas) é um coletivo de cineastas dos povos Guarani, Kaiowá e Terena. Idealizada em 2008, a ASCURI vem há mais de uma década oferecendo oficinas de formação audiovisual e produzindo filmes dentro e fora das aldeias sul-mato-grossenses. Através do cinema, a ASCURI busca desenvolver estratégias de formação, resistência e fortalecimento do jeito de ser indígena (ñandereko ou kixovoku). A ASCURI mantém uma estreita relação com o cinema indígena produzido na Bolívia, particularmente através do contato com o cineasta Ivan Molina, do povo Quéchua.",
    },    
    //5
    {
        nome : "Bruno Vasconcelos",
        imagem : "5-Bruno_Vasconcelos.JPG",
        biografia : "É formado em Comunicação Social pela UFMG e em Cinema pela EICTV - Escuela Internacional de Cine y TV, de Cuba. Integra o grupo de curadores e realizadores do forumdoc.bh. Trabalha em produções audiovisuais com desenho de som, montagem e fotografia.",
    },    
    //6
    {
        nome : "Carlos Papá",
        imagem : "6-Carlos_Papa.jpg",
        biografia : "Carlos Papá Mirim Poty é Guarani Mbya, morador da aldeia do Rio Silveira. Trabalha há mais de 20 anos com audiovisual, focando-se em documentários, filmes e oficinas culturais para os jovens. Também atua como líder espiritual em sua comunidade. É presidente do Instituto Guarani da Mata Atlântica (Iguama) e fundador e conselheiro do Instituto Maracá.",
    },    
    //7
    {
        nome : "Charles Bicalho",
        imagem : "7-Charles-Bicalho.jpg",
        biografia : "Superior de Tecnologia em Design Gráfico no Instituto de Arte e Projeto (INAP) em Belo Horizonte. Graduação em Letras na UFMG. Especialização em Pós-Produção para Cinema, TV e Novas Mídias no Centro Universitário UNA-BH. Master of Arts em Estudos Literários na University of New Mexico, EUA. Doutorado em Estudos Literários na UFMG. Diretor, produtor, roteirista. Diretor dos curtas: Caligrafilmes (2008); Making of Dicionário (2012); Pirapora (2012); Konãgxeka: O Dilúvio Maxakali (2016). Membro fundador da produtora Pajé Filmes.",
    },    
    //8
    {
        nome : "Cileuza Quezo Jemiusi",
        imagem : "8-Cileuza_Jemiusi.jpeg",
        biografia : "Nasci na aldeia paredão e sempre frequentei escolas indígenas até o ensino médio. Gosto de trabalhar na comunidade e no movimento indígena, por isso já trabalhei para Associação Manoki Pyta e faço parte da FEPOIMT. Atualmente faço parte do Coletivo Ijã Mytyli de Cinema Manoki e Myky, acreditando que o cinema indígena é um dos meios fundamentais para levar igualdade social ao mundo, é um caminho que tem um potencial revolucionário para os seres humanos. Os tempos em que vivemos, assim como os outros, não são nada fáceis, por isso a importância da visibilidade dos trabalhos indígenas nos meios audiovisuais. Nós, povos indígenas, estamos passando por extremos desafios. Lutar contra esse governo que retrocedeu nossos direitos em pouco tempo do seu mandato, fragilizando todas as nossas atividades, ainda mais em meio a essa pandemia, deixando-nos mais vulneráveis a esse novo vírus. Acreditar em nossos espíritos sagrados está sendo mais do que nunca a sobrevivência do nosso bem estar, é o que nos tem dado esperança e forças para voltar a lutar.",
    },    
    //9
    {
        nome : "Gilearde Barbosa Pedro",
        imagem : "9-Gilearde_Barbosa_Pedro.jpg",
        biografia : "Gilearde Barbosa Pedro, do povo Kaiowá, é ilustrador, fotógrafo e cineasta da ASCURI (Associação Cultural de Realizadores Indígenas). Gilearde vem participando nos últimos anos de uma série de oficinas de formação audiovisual no Brasil e na Bolívia e, mais recentemente, formou-se em roteiro cinematográfico pela Escola de Cinema Darcy Ribeiro (RJ).",
    },    
    //10
    {
        nome : "Gilmar Kiripuku Galache",
        imagem : "10-Gilmar_Galache.jpg",
        biografia : "Gilmar Kiripuku Galache, do povo Terena, é designer, comunicador, fotógrafo e cineasta, além de idealizador e coordenador da ASCURI (Associação Cultural de Realizadores Indígenas). Possui graduação em Design (UCDB), mestrado em Desenvolvimento Sustentável (UNB) e especialização em Cinema pela Escuela de Cine y Arte de La Paz (ECA/Bolívia). Hoje atua também como editor do Programa Copiô Parente, do Instituto Socioambiental. Junto à ASCURI Gilmar vem desde 2008 ministrando oficinas de formação audiovisual nas aldeias sul-mato-grossenses, bem como em outras regiões do país, e participando da realização de uma série de filmes.",
    },    
    //11
    {
        nome : "Guigui Maxakali",
        imagem : "11-Guigui_Maxakali.png",
        biografia : 'Guigui Maxakali, Professor, Pajé e Cacique da aldeia Vila Nova, na Terra Indígena Maxakali do Pradinho (MG), vem há quase dez anos realizando inúmeros projetos (na UFMG, no Museu do Índio / FUNAI, na Universidade de São Paulo, dentre outros). Atuou como diretor e realizador de dezenas de filmes, dentre eles o premiado "Tatakox Vila Nova" (2009).',
    },    
    //12
    {
        nome : "Isael Maxakali",
        imagem : "12-Isael_Maxakali.jpg",
        biografia : "Meu nome é Isael Maxakali, moro na Aldeia Hãm Kutok, município de Ladainha – MG. Já fiz muitos filmes para as pessoas de todos os lugares assistirem e saberem que nós, os Tikmū’ūn, existimos. Eu também gosto muito de fazer desenhos dos bichos, dos peixes, dos espíritos yãmĩyxop e de outras coisas também. Eu penso que, com o meu trabalho, eu cresço e fortaleço os Tikmū’ūn. Se eu fico conhecido, eles ficam também. Se eu ganho um prêmio, eles ganham também!",
    },    
    //13
    {
        nome : "Iván Molina Velasquez",
        imagem : "13-Ivan_Molina.jpeg",
        biografia : "Ivan Molina é um cineasta independente e sociólogo do povo quéchua da Bolívia. É formado pela ICTV em Cuba, foi docente e diretor da Escola de Cinema e Artes (ECA) de La Paz, Bolívia. É membro e mentor da ASCURI - Associação de Realizadores Indígenas de Mato Grosso do Sul. Iván tem realizado workshops de cinema indígena na Bolívia e no Brasil fazendo intercâmbio entre cineastas dos dois países. Seu belo filme Quillpa, na sessão especial, retrata o ritual quéchua de ornamentação das lhamas como forma de agradecer e reverenciar a Mãe Terra (Pachamama) para uma boa colheita.",
    },    
    //14
    {
        nome : "Josemar Maxakali ",
        imagem : "14-Josemar_Maxakali.png",
        biografia : 'Josemar Maxakali, da Terra Indígena Maxakali do Pradinho (MG), vem há quase dez anos realizando inúmeros projetos (na UFMG, no Museu do Índio / FUNAI, na Universidade de São Paulo, dentre outros), filmes e fotografias, dentre eles o "Cosmopista" (2013).',
    },    
             
];
//fim lista de realizadores


function exibir() {
    
    let lista = realizadores.map(function(realizador){

        return ` 
        <div class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item mx-auto">
                <div class="d-flex align-items-center justify-content-center h-100 w-100">
                    <p> </p>
                </div>
                <img class="img-fluid" src="${prefixPath}${realizador.imagem}" alt="${realizador.nome}" title=" ${realizador.nome}" />
                <p></p>
                <h3>${realizador.nome}</h3>
                <p>${realizador.biografia}</p>
            </div>                    
        </div>
        `;
    });
    
    for (let i = 0; i < realizadores.length; i++) {
        document.getElementById('realizadores').innerHTML += lista[i];

    }
}

exibir();

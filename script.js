$(document) .ready(function(){

    function CienciasHumanas() {
        var escolha = prompt("Digite a matéria desejada(filosofia, sociologia, história e geografia.)");

        switch (escolha.toLowerCase()) {
            case "filosofia":
                alert("Você escolheu Filosofia. Esse componente os professores dão juntos, portanto, os resumos do que estamos vendo serão os mesmos. Nós estamos vendo a disputa de terras no Brasil, vendo desde a conolização, com as capitanias hereditárias, até os dias de hoje, com as disputas de dermacações de terras indigenas, a disputa com o Marco Temporal. Nós estamos vendo algumas revoltas, como os cangaços e a guerra dos canudos.");
                break;
            case "Filosofia":
                alert("Você escolheu Filosofia.Esse componente os professores dão juntos, portanto, os resumos do que estamos vendo serão os mesmos. Nós estamos vendo a disputa de terras no Brasil, vendo desde a conolização, com as capitanias hereditárias, até os dias de hoje, com as disputas de dermacações de terras indigenas, a disputa com o Marco Temporal. Nós estamos vendo algumas revoltas, como os cangaços e a guerra dos canudos.");
                break;
            case "geografia":
                alert("Você escolheu Geografia. Esse componente os professores dão juntos, portanto, os resumos do que estamos vendo serão os mesmos. Nós estamos vendo a disputa de terras no Brasil, vendo desde a conolização, com as capitanias hereditárias, até os dias de hoje, com as disputas de dermacações de terras indigenas, a disputa com o Marco Temporal. Nós estamos vendo algumas revoltas, como os cangaços e a guerra dos canudos.");
                break;
            case "Geografia":
                alert("Você escolheu Geografia. Esse componente os professores dão juntos, portanto, os resumos do que estamos vendo serão os mesmos. Nós estamos vendo a disputa de terras no Brasil, vendo desde a conolização, com as capitanias hereditárias, até os dias de hoje, com as disputas de dermacações de terras indigenas, a disputa com o Marco Temporal. Nós estamos vendo algumas revoltas, como os cangaços e a guerra dos canudos.");
                break;
            case "sociologia":
                alert("Você escolheu Sociologia.Esse componente os professores dão juntos, portanto, os resumos do que estamos vendo serão os mesmos. Nós estamos vendo a disputa de terras no Brasil, vendo desde a conolização, com as capitanias hereditárias, até os dias de hoje, com as disputas de dermacações de terras indigenas, a disputa com o Marco Temporal. Nós estamos vendo algumas revoltas, como os cangaços e a guerra dos canudos.");
                break;
            case "Sociologia":
                alert("Você escolheu Sociologia. Esse componente os professores dão juntos, portanto, os resumos do que estamos vendo serão os mesmos. Nós estamos vendo a disputa de terras no Brasil, vendo desde a conolização, com as capitanias hereditárias, até os dias de hoje, com as disputas de dermacações de terras indigenas, a disputa com o Marco Temporal. Nós estamos vendo algumas revoltas, como os cangaços e a guerra dos canudos.");
                break;
            case "história":
                alert("Você escolheu História. Esse componente os professores dão juntos, portanto, os resumos do que estamos vendo serão os mesmos. Nós estamos vendo a disputa de terras no Brasil, vendo desde a conolização, com as capitanias hereditárias, até os dias de hoje, com as disputas de dermacações de terras indigenas, a disputa com o Marco Temporal. Nós estamos vendo algumas revoltas, como os cangaços e a guerra dos canudos.");
                break;
            case "historia":
                    alert("Você escolheu História. Esse componente os professores dão juntos, portanto, os resumos do que estamos vendo serão os mesmos. Nós estamos vendo a disputa de terras no Brasil, vendo desde a conolização, com as capitanias hereditárias, até os dias de hoje, com as disputas de dermacações de terras indigenas, a disputa com o Marco Temporal. Nós estamos vendo algumas revoltas, como os cangaços e a guerra dos canudos.");
                    break;
            case "Historia":
                alert("Você escolheu História.Esse componente os professores dão juntos, portanto, os resumos do que estamos vendo serão os mesmos. Nós estamos vendo a disputa de terras no Brasil, vendo desde a conolização, com as capitanias hereditárias, até os dias de hoje, com as disputas de dermacações de terras indigenas, a disputa com o Marco Temporal. Nós estamos vendo algumas revoltas, como os cangaços e a guerra dos canudos.");
                break;
            case "História":
                alert("Você escolheu História. Esse componente os professores dão juntos, portanto, os resumos do que estamos vendo serão os mesmos. Nós estamos vendo a disputa de terras no Brasil, vendo desde a conolização, com as capitanias hereditárias, até os dias de hoje, com as disputas de dermacações de terras indigenas, a disputa com o Marco Temporal. Nós estamos vendo algumas revoltas, como os cangaços e a guerra dos canudos.");
                break;
            default:
                alert("Isso não existe ou essa matéria não é desse componente");
                break;
        }
    }


    var botaoMateria = document.getElementById("btn_ch");
    botaoMateria.addEventListener("click", CienciasHumanas);

    
    
    
    
    
    
    
    function CienciasDaNatureza() {
        var escolha = prompt("Digite a matéria desejada(fisica, quimica e biologia");

        switch (escolha.toLowerCase()) {
            case "física":
                alert("Você escolheu Física. Nós vimos um pouco sobre movimento, conseguir indentificar, a partir da visão de um objeto, saber o que está em repouso e o que está em movimento. Agora estamos vendo sobre MRU(movimento retilinio uniforme), calculando a distância percorrida de um objeto, ou calculando o tempo que o objeto demorou para percorrer X de distância. Saber diferenciar movimento progressivo de movimento retrógado. Aprendemos a fazer gráficos sobre o MRU, gráficos de movimentos progressivos e graficos de movimentos retrógados.  ");
                break;
            case "fisica":
                alert("Você escolheu Física. Nós vimos um pouco sobre movimento, conseguir indentificar, a partir da visão de um objeto, saber o que está em repouso e o que está em movimento. Agora estamos vendo sobre MRU(movimento retilinio uniforme), calculando a distância percorrida de um objeto, ou calculando o tempo que o objeto demorou para percorrer X de distância. Saber diferenciar movimento progressivo de movimento retrógado. Aprendemos a fazer gráficos sobre o MRU, gráficos de movimentos progressivos e graficos de movimentos retrógados. ");
                break;
            case "Fisica":
                alert("Você escolheu Física. Nós vimos um pouco sobre movimento, conseguir indentificar, a partir da visão de um objeto, saber o que está em repouso e o que está em movimento. Agora estamos vendo sobre MRU(movimento retilinio uniforme), calculando a distância percorrida de um objeto, ou calculando o tempo que o objeto demorou para percorrer X de distância. Saber diferenciar movimento progressivo de movimento retrógado. Aprendemos a fazer gráficos sobre o MRU, gráficos de movimentos progressivos e graficos de movimentos retrógados. ");
                break;
            case "Física":
                alert("Você escolheu Física.  Nós vimos um pouco sobre movimento, conseguir indentificar, a partir da visão de um objeto, saber o que está em repouso e o que está em movimento. Agora estamos vendo sobre MRU(movimento retilinio uniforme), calculando a distância percorrida de um objeto, ou calculando o tempo que o objeto demorou para percorrer X de distância. Saber diferenciar movimento progressivo de movimento retrógado. Aprendemos a fazer gráficos sobre o MRU, gráficos de movimentos progressivos e graficos de movimentos retrógados. ");
                break;
            case "química":
                alert("Você escolheu Química. Nós estamos vendo sobre química inorgânica, saber diferenciar o que é orgânico e o que é inorgânico. Saber quais são as substâncias inorgânicas, e saber quais são as principais teorias e as principais pessoas envolvidas nisso.  ");
                break;
            case "quimica":
                alert("Você escolheu Química. Nós estamos vendo sobre química inorgânica, saber diferenciar o que é orgânico e o que é inorgânico. Saber quais são as substâncias inorgânicas, e saber quais são as principais teorias e as principais pessoas envolvidas nisso.  ");
                break;
            case "Quimica":
                alert("Você escolheu Química. Nós estamos vendo sobre química inorgânica, saber diferenciar o que é orgânico e o que é inorgânico. Saber quais são as substâncias inorgânicas, e saber quais são as principais teorias e as principais pessoas envolvidas nisso.  ");
                break;
            case "Química":
                alert("Você escolheu Química.  Nós estamos vendo sobre química inorgânica, saber diferenciar o que é orgânico e o que é inorgânico. Saber quais são as substâncias inorgânicas, e saber quais são as principais teorias e as principais pessoas envolvidas nisso. ");
                break;
            case "biologia":
                alert("Você escolheu Biologia. Nós vimos um pouco sobre ecologia e sobre pegada ecologica, vimos um pouco de porque a Terra está pedindo socorro. Agora estamos vendo citologia, vendo como as células funcionam, cada uma de suas funções e o que os compõem, como o complexo de golgi, membrana plasmática, etc.");
                break;
            case "Biologia":
                alert("Você escolheu Biologia. Nós vimos um pouco sobre ecologia e sobre pegada ecologica, vimos um pouco de porque a Terra está pedindo socorro. Agora estamos vendo citologia, vendo como as células funcionam, cada uma de suas funções e o que os compõem, como o complexo de golgi, membrana plasmática, etc.  ");
                break;
            default:
                alert("Isso não existe ou essa matéria não é desse componente");
                break;
        }
    }

 
    var botaoMateria = document.getElementById("btn_cn");
    botaoMateria.addEventListener("click", CienciasDaNatureza);

    $("#btn_mat") .click (function(){
        alert ("Estamos vendo equações de segundo grau")
    });

    function linguagens() {
        var escolha = prompt("Digite a matéria desejada(Português, Inglês e Artes)");

        switch (escolha.toLowerCase()) {
            case "português":
                alert("Você escolheu Português. Nós estamos aprendendo sobre genêneros litérarios, aprofundando em genêro drámatico, como poemas ou teatros.");
                break;
            case "portugues":
                alert("Você escolheu Português.  Nós estamos aprendendo sobre genêneros litérarios, aprofundando em genêro drámatico, como poemas ou teatros.");
                break;
            case "Portugues":
                alert("Você escolheu Português.  Nós estamos aprendendo sobre genêneros litérarios, aprofundando em genêro drámatico, como poemas ou teatros.");
                break;
            case "Português":
                alert("Você escolheu Português.  Nós estamos aprendendo sobre genêneros litérarios, aprofundando em genêro drámatico, como poemas ou teatros.");
                break;
            case "inglês":
                alert("Você escolheu Inglês. Nós estamos vendo tipos de futuros(Future Simple, Future Be Going To, Present Continuous for Future, Present Simple for Future, Future Perfect e Future Perfect Continuous) nas formas afirmativas, negativas e interrogativas. ");
                break;
            case "ingles":
                alert("Você escolheu Inglês. Nós estamos vendo tipos de futuros(Future Simple, Future Be Going To, Present Continuous for Future, Present Simple for Future, Future Perfect e Future Perfect Continuous) nas formas afirmativas, negativas e interrogativas.");
                break;
            case "ingles":
                alert("Você escolheu Inglês. Nós estamos vendo tipos de futuros(Future Simple, Future Be Going To, Present Continuous for Future, Present Simple for Future, Future Perfect e Future Perfect Continuous) nas formas afirmativas, negativas e interrogativas.");
                break;
            case "Inglês":
                alert("Você escolheu Inglês. Nós estamos vendo tipos de futuros(Future Simple, Future Be Going To, Present Continuous for Future, Present Simple for Future, Future Perfect e Future Perfect Continuous) nas formas afirmativas, negativas e interrogativas.");
                break;
            case "artes":
                alert("Você escolheu Artes. Nós estamos aprendendo a como produzir um curta, tanto na pré produção (escolha de roteiro, ambiente, tema da história) a produção (direção de camera, atuação, etc) e pós produção (edição de vídeo, adição de trilha sonora, etc)" );
                break;
            case "Artes":
                    alert("Você escolheu Artes. Nós estamos aprendendo a como produzir um curta, tanto na pré produção (escolha de roteiro, ambiente, tema da história) a produção (direção de camera, atuação, etc) e pós produção (edição de vídeo, adição de trilha sonora, etc)");
                    break;
            default:
                alert("Isso não existe ou essa matéria não é desse componente");
                break;
        }
    }

    var botaoConteudo = document.getElementById("btn_ling");
    botaoConteudo.addEventListener("click", linguagens);

    $("#btn_tec") .click (function(){
        alert ("Nós aprendemos a utilizar o bootstrap, como ele facilita e otimiza a velocidade de produção de uma pagina, também começamos a aprender sobre o jQuery, como utilizar o javascript e pra que ele serve")
    });

    $("#btn_pp") .click (function(){
        alert ("Nós estamos organizando para fazer a feira de experimentos")
    });

    $("#btn_pv") .click (function(){
        alert ("Nós estamos dando mini aulas em trios. Meu trio escolheu falar sobre Diógenes e sua corrente filosofica")
    });
    

});
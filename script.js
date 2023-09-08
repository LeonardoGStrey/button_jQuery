$(document) .ready(function(){

    function CienciasHumanas() {
        var escolha = prompt("Digite a matéria desejada");

        switch (escolha.toLowerCase()) {
            case "filosofia":
                alert("Você escolheu Filosofia. Aqui está o texto sobre Filosofia.");
                break;
            case "Filosofia":
                alert("Você escolheu Filosofia. Aqui está o texto sobre Filosofia.");
                break;
            case "geografia":
                alert("Você escolheu Geografia. Aqui está o texto sobre Geografia.");
                break;
            case "Geografia":
                alert("Você escolheu Geografia. Aqui está o texto sobre Geografia.");
                break;
            case "sociologia":
                alert("Você escolheu Sociologia. Aqui está o texto sobre Sociologia.");
                break;
            case "Sociologia":
                alert("Você escolheu Sociologia. Aqui está o texto sobre Sociologia.");
                break;
            case "história":
                alert("Você escolheu História. Aqui está o texto sobre História.");
                break;
            case "historia":
                    alert("Você escolheu História. Aqui está o texto sobre História.");
                    break;
            case "Historia":
                alert("Você escolheu História. Aqui está o texto sobre História.");
                break;
            case "História":
                alert("Você escolheu História. Aqui está o texto sobre História.");
                break;
            default:
                alert("Isso não existe ou essa matéria não é desse componente");
                break;
        }
    }


    var botaoMateria = document.getElementById("btn_ch");
    botaoMateria.addEventListener("click", CienciasHumanas);

    
    
    
    
    
    
    
    function CienciasDaNatureza() {
        var escolha = prompt("Digite a matéria desejada");

        switch (escolha.toLowerCase()) {
            case "física":
                alert("Você escolheu Física. Aqui está o texto sobre Física.");
                break;
            case "fisica":
                alert("Você escolheu Física. Aqui está o texto sobre Física.");
                break;
            case "Fisica":
                alert("Você escolheu Física. Aqui está o texto sobre Física.");
                break;
            case "Física":
                alert("Você escolheu Física. Aqui está o texto sobre Física.");
                break;
            case "química":
                alert("Você escolheu Química. Aqui está o texto sobre Química.");
                break;
            case "quimica":
                alert("Você escolheu Química. Aqui está o texto sobre Química.");
                break;
            case "Quimica":
                alert("Você escolheu Química. Aqui está o texto sobre Química.");
                break;
            case "Química":
                alert("Você escolheu Química. Aqui está o texto sobre Química.");
                break;
            case "biologia":
                alert("Você escolheu Biologia. Aqui está o texto sobre Biologia.");
                break;
            case "Biologia":
                alert("Você escolheu Biologia. Aqui está o texto sobre Biologia.");
                break;
            default:
                alert("Isso não existe ou essa matéria não é desse componente");
                break;
        }
    }

 
    var botaoMateria = document.getElementById("btn_cn");
    botaoMateria.addEventListener("click", CienciasDaNatureza);

    $("#btn_mat") .click (function(){
        alert ("teste3")
    });

    function linguagens() {
        var escolha = prompt("Digite a matéria desejada");

        switch (escolha.toLowerCase()) {
            case "português":
                alert("Você escolheu Português. Aqui está o texto sobre Português.");
                break;
            case "portugues":
                alert("Você escolheu Português. Aqui está o texto sobre Português.");
                break;
            case "Portugues":
                alert("Você escolheu Português. Aqui está o texto sobre Português.");
                break;
            case "Português":
                alert("Você escolheu Português. Aqui está o texto sobre Português.");
                break;
            case "inglês":
                alert("Você escolheu Inglês. Aqui está o texto sobre Inglês.");
                break;
            case "ingles":
                alert("Você escolheu Inglês. Aqui está o texto sobre Inglês.");
                break;
            case "ingles":
                alert("Você escolheu Inglês. Aqui está o texto sobre Inglês.");
                break;
            case "Inglês":
                alert("Você escolheu Inglês. Aqui está o texto sobre Inglês.");
                break;
            case "artes":
                alert("Você escolheu Artes. Aqui está o texto sobre Artes.");
                break;
            case "Artes":
                    alert("Você escolheu Artes. Aqui está o texto sobre Artes.");
                    break;
            default:
                alert("Isso não existe ou essa matéria não é desse componente");
                break;
        }
    }

    var botaoMateria = document.getElementById("btn_ling");
    botaoMateria.addEventListener("click", linguagens);

    $("#btn_tec") .click (function(){
        alert ("teste4")
    });

    $("#btn_pp") .click (function(){
        alert ("teste5")
    });

    $("#btn_pv") .click (function(){
        alert ("teste6")
    });

});
let diaSemana;

const diaHoje = new Date().getDay();

console.log(diaHoje);

switch(diaHoje){
    case 0:
        diaSemana = "Hoje é Domingo."
        break; /* se for verdadeira, pare aqui e não precisa executar os outros */

    case 1:
        diaSemana = "Hoje é Segunda-feira."  
        break;
        
    case 2:
        diaSemana = "Hoje é Terça-feira."
        break;

    case 3:
        diaSemana = "Hoje é Quarta-feira."
        break;

    case 4:
        diaSemana = "Hoje é Quinta-feira."
        break;

    case 5:
        diaSemana = "Hoje é Sexta-feira."
        break;

    case 6:
        diaSemana = "Hoje é Sábado."
        break;
}

console.log(diaSemana);


/* funções */

function comparar(x, y){
    if (x > y){
        return `O maior número entre os números ${x} e ${y} é o número ${x}.`
    } else if (x < y){
        return `O maior número entre os números ${x} e ${y} é o número ${y}.`
    } else {
        return `Os números são iguais!`
    }
}

console.log(comparar(18, 5));

function nota(pontuacao){
    if (pontuacao >= 90){
        return ("Sua nota é A =)")
    } else if (pontuacao >= 80){
        return ("Sua nota é B.")
    } else if (pontuacao >= 70){
        return ("Sua nota é C.")
    } else if (pontuacao >= 65) {
        return ("Sua nota é D.")
    } else {
        return ("Sua nota é F =(");
    }
}

console.log(nota(78));
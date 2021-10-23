const timeum = "Palmeiras";
const timedois = "Santos";

const qtdgolsum = 20;
const qtdgolsdois = 20;

if (qtdgolsum > qtdgolsdois) {
    console.log(`O time vencedor é: ${timeum}`)
} else if (qtdgolsdois < qtdgolsum) {
    console.log(`O time vencedor é: ${timedois}`);
} else {
    console.log("Deu empate");
}

/* Quantidade de macas, valor unitario e o valor total. <12 = 0,30 >12 = 0,25 */

const qtdmacas = 10;
const duzia = 12;

if (qtdmacas >= duzia) {
    var valortotal = qtdmacas * 0.25;

    console.log(`O valor total das macãs é: ${valortotal}`);
} else {
    var valortotal = qtdmacas * 0.30;

    console.log(`O valor total das macãs é: ${valortotal}`);
}

/* De acordo com a pontuacao, de a nota */

const pontuacao = 45;

if (pontuacao >= 90){
    console.log("Sua nota é A =)")
} else if (pontuacao >= 80){
    console.log("Sua nota é B")
} else if (pontuacao >= 70){
    console.log("Sua nota é C")
} else if (pontuacao >= 65) {
    console.log("Sua nota é D")
} else {
    console.log("Sua nota é F =(");
}

/* Retornar o plano referente a idade ou outra mensagem */

var idade = 56;

if (idade >= 12 && idade <= 17){
    console.log("O plano TEEN é ideal para voce! ");
} else if (idade >= 18 && idade <= 29){
    console.log("O plano ideal para voce é o PROFISSIONAL! ")
} else if (idade >= 30){
    console.log("O plano ideal para voce é o EXPERIENTE! ")
} else {
    console.log("Voce pode verificar o nosso plano TEEN =)")
}

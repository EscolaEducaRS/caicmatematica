let grupo1 = {
    nome: "JYLEGH",
    notas: [0, 0.75,1,0.94,0.39,0.39,0.39,0.45,0.45],
    mediaProv: function () {
        let notasM = 0
        if (grupo1.notas[1]>0) {notasM = grupo1.notas[1] }
        if (grupo1.notas[2]>0) {notasM += grupo1.notas[2]}
        if (grupo1.notas[3]>0) {notasM += grupo1.notas[3]}
        if (grupo1.notas[4]>0) {notasM += grupo1.notas[4]}
        if (grupo1.notas[5]>0) {notasM += grupo1.notas[5]}
        if (grupo1.notas[6]>0) {notasM += grupo1.notas[6]}
        if (grupo1.notas[7]>0) {notasM += grupo1.notas[7]}
        if (grupo1.notas[8]>0) {notasM += grupo1.notas[8]}
        if (grupo1.notas[9]>0) {notasM += grupo1.notas[9]}
        if (grupo1.notas[10]>0) {notasM += grupo1.notas[10]}
//
        if (grupo1.notas.length>1){
            notasM = notasM / (grupo1.notas.length - 1)
        }
        return Math.round(notasM * 100) / 100
    }
}
let grupo2 = {
    nome: "Chico Rafael",
    notas: [0, 1,0.9,0.8,0.77,0.77,0.77,0.5,0.5],
    mediaProv: function () {
        let notasM = 0
        if (grupo2.notas[1]>0) {notasM = grupo2.notas[1] }
        if (grupo2.notas[2]>0) {notasM += grupo2.notas[2]}
        if (grupo2.notas[3]>0) {notasM += grupo2.notas[3]}
        if (grupo2.notas[4]>0) {notasM += grupo2.notas[4]}
        if (grupo2.notas[5]>0) {notasM += grupo2.notas[5]}
        if (grupo2.notas[6]>0) {notasM += grupo2.notas[6]}
        if (grupo2.notas[7]>0) {notasM += grupo2.notas[7]}
        if (grupo2.notas[8]>0) {notasM += grupo2.notas[8]}
        if (grupo2.notas[9]>0) {notasM += grupo2.notas[9]}
        if (grupo2.notas[10]>0) {notasM += grupo2.notas[10]}
//
        if (grupo2.notas.length>1){
            notasM = notasM / (grupo2.notas.length - 1)
        }
        return Math.round(notasM * 100) / 100
    }
}
let grupo3 = {
    nome: "Irmandade",
    notas: [0,1,0.77,0.94,0.67,0.67,0.67,0.55,0.55],
    mediaProv: function () {
        let notasM = 0
        if (grupo3.notas[1]>0) {notasM = grupo3.notas[1] }
        if (grupo3.notas[2]>0) {notasM += grupo3.notas[2]}
        if (grupo3.notas[3]>0) {notasM += grupo3.notas[3]}
        if (grupo3.notas[4]>0) {notasM += grupo3.notas[4]}
        if (grupo3.notas[5]>0) {notasM += grupo3.notas[5]}
        if (grupo3.notas[6]>0) {notasM += grupo3.notas[6]}
        if (grupo3.notas[7]>0) {notasM += grupo3.notas[7]}
        if (grupo3.notas[8]>0) {notasM += grupo3.notas[8]}
        if (grupo3.notas[9]>0) {notasM += grupo3.notas[9]}
        if (grupo3.notas[10]>0) {notasM += grupo3.notas[10]}
//
        if (grupo3.notas.length>1){
            notasM = notasM / (grupo3.notas.length - 1)
        }
        return Math.round(notasM * 100) / 100
    }
}
let grupo4 = {
    nome: "Os Intocáveis",
    notas: [0, 0.5,0.68,0.8,0,0,0,0.7,0.7],
    mediaProv: function () {
        let notasM = 0
        if (grupo4.notas[1]>0) {notasM = grupo4.notas[1] }
        if (grupo4.notas[2]>0) {notasM += grupo4.notas[2]}
        if (grupo4.notas[3]>0) {notasM += grupo4.notas[3]}
        if (grupo4.notas[4]>0) {notasM += grupo4.notas[4]}
        if (grupo4.notas[5]>0) {notasM += grupo4.notas[5]}
        if (grupo4.notas[6]>0) {notasM += grupo4.notas[6]}
        if (grupo4.notas[7]>0) {notasM += grupo4.notas[7]}
        if (grupo4.notas[8]>0) {notasM += grupo4.notas[8]}
        if (grupo4.notas[9]>0) {notasM += grupo4.notas[9]}
        if (grupo4.notas[10]>0) {notasM += grupo4.notas[10]}
//
        if (grupo4.notas.length>1){
            notasM = notasM / (grupo4.notas.length - 1)
        }
        return Math.round(notasM * 100) / 100
    }
}
let grupo5 = {
    nome: "Os Elevados",
    notas: [0, 0.75,0.78,0.94,0.6,0.6,0.6,0.7,0.7],
    mediaProv: function () {
        let notasM = 0
        if (grupo5.notas[1]>0) {notasM = grupo5.notas[1] }
        if (grupo5.notas[2]>0) {notasM += grupo5.notas[2]}
        if (grupo5.notas[3]>0) {notasM += grupo5.notas[3]}
        if (grupo5.notas[4]>0) {notasM += grupo5.notas[4]}
        if (grupo5.notas[5]>0) {notasM += grupo5.notas[5]}
        if (grupo5.notas[6]>0) {notasM += grupo5.notas[6]}
        if (grupo5.notas[7]>0) {notasM += grupo5.notas[7]}
        if (grupo5.notas[8]>0) {notasM += grupo5.notas[8]}
        if (grupo5.notas[9]>0) {notasM += grupo5.notas[9]}
        if (grupo5.notas[10]>0) {notasM += grupo5.notas[10]}
//
        if (grupo5.notas.length>1){
            notasM = notasM / (grupo5.notas.length - 1)
        }
        return Math.round(notasM * 100) / 100
    }
}
let grupo6 = {
    nome: "Bolacha com Leite",
    notas: [0,0.75,0.65,0.57,0.37,0.37,0.37,0.8,0.8],
    mediaProv: function () {
        let notasM = 0
        if (grupo6.notas[1]>0) {notasM = grupo6.notas[1] }
        if (grupo6.notas[2]>0) {notasM += grupo6.notas[2]}
        if (grupo6.notas[3]>0) {notasM += grupo6.notas[3]}
        if (grupo6.notas[4]>0) {notasM += grupo6.notas[4]}
        if (grupo6.notas[5]>0) {notasM += grupo6.notas[5]}
        if (grupo6.notas[6]>0) {notasM += grupo6.notas[6]}
        if (grupo6.notas[7]>0) {notasM += grupo6.notas[7]}
        if (grupo6.notas[8]>0) {notasM += grupo6.notas[8]}
        if (grupo6.notas[9]>0) {notasM += grupo6.notas[9]}
        if (grupo6.notas[10]>0) {notasM += grupo6.notas[10]}
//
        if (grupo6.notas.length>1){
            notasM = notasM / (grupo6.notas.length - 1)
        }
        return Math.round(notasM * 100) / 100;
    }
}
let grupo7 = {
    nome: "Ciclone",
    notas: [0,0.75,0.6,0.67,0.49,0.49,0.49,0.7,0.7],
    mediaProv: function () {
        let notasM = 0
        if (grupo7.notas[1]>0) {notasM = grupo7.notas[1] }
        if (grupo7.notas[2]>0) {notasM += grupo7.notas[2]}
        if (grupo7.notas[3]>0) {notasM += grupo7.notas[3]}
        if (grupo7.notas[4]>0) {notasM += grupo7.notas[4]}
        if (grupo7.notas[5]>0) {notasM += grupo7.notas[5]}
        if (grupo7.notas[6]>0) {notasM += grupo7.notas[6]}
        if (grupo7.notas[7]>0) {notasM += grupo7.notas[7]}
        if (grupo7.notas[8]>0) {notasM += grupo7.notas[8]}
        if (grupo7.notas[9]>0) {notasM += grupo7.notas[9]}
        if (grupo7.notas[10]>0) {notasM += grupo7.notas[10]}
//
        if (grupo7.notas.length>1){
            notasM = notasM / (grupo7.notas.length - 1)
        }
        return Math.round(notasM * 100) / 100
    }
}
let grupo8 = {
    nome: "Cocotas",
    notas: [0,0.75,0.65,0.74,0.48,0.48,0.48,0.66,0.66],
    mediaProv: function () {
        let notasM = 0
        if (grupo8.notas[1]>0) {notasM = grupo8.notas[1] }
        if (grupo8.notas[2]>0) {notasM += grupo8.notas[2]}
        if (grupo8.notas[3]>0) {notasM += grupo8.notas[3]}
        if (grupo8.notas[4]>0) {notasM += grupo8.notas[4]}
        if (grupo8.notas[5]>0) {notasM += grupo8.notas[5]}
        if (grupo8.notas[6]>0) {notasM += grupo8.notas[6]}
        if (grupo8.notas[7]>0) {notasM += grupo8.notas[7]}
        if (grupo8.notas[8]>0) {notasM += grupo8.notas[8]}
        if (grupo8.notas[9]>0) {notasM += grupo8.notas[9]}
        if (grupo8.notas[10]>0) {notasM += grupo8.notas[10]}
//
        if (grupo8.notas.length>1){
            notasM = notasM / (grupo8.notas.length - 1)
        }
        return Math.round(notasM * 100) / 100
    }
}
let grupo9 = {
    nome: "Churrasco",
    notas: [0,1,1,0.87,0.84,0.84,0.84,0.84,0.84],
    mediaProv: function () {
        let notasM = 0
        if (grupo9.notas[1]>0) {notasM = grupo9.notas[1] }
        if (grupo9.notas[2]>0) {notasM += grupo9.notas[2]}
        if (grupo9.notas[3]>0) {notasM += grupo9.notas[3]}
        if (grupo9.notas[4]>0) {notasM += grupo9.notas[4]}
        if (grupo9.notas[5]>0) {notasM += grupo9.notas[5]}
        if (grupo9.notas[6]>0) {notasM += grupo9.notas[6]}
        if (grupo9.notas[7]>0) {notasM += grupo9.notas[7]}
        if (grupo9.notas[8]>0) {notasM += grupo9.notas[8]}
        if (grupo9.notas[9]>0) {notasM += grupo9.notas[9]}
        if (grupo9.notas[10]>0) {notasM += grupo9.notas[10]}
//
        if (grupo9.notas.length>1){
            notasM = notasM / (grupo9.notas.length - 1)
        }
        return Math.round(notasM * 100) / 100
    }
}
let grupo10 = {
    nome: "PUMA",
    notas: [0,1,0.5,0.6,0.4,0.4,0.4,0.6,0.6],
    mediaProv: function () {
        let notasM = 0
        if (grupo10.notas[1]>0) {notasM = grupo10.notas[1] }
        if (grupo10.notas[2]>0) {notasM += grupo10.notas[2]}
        if (grupo10.notas[3]>0) {notasM += grupo10.notas[3]}
        if (grupo10.notas[4]>0) {notasM += grupo10.notas[4]}
        if (grupo10.notas[5]>0) {notasM += grupo10.notas[5]}
        if (grupo10.notas[6]>0) {notasM += grupo10.notas[6]}
        if (grupo10.notas[7]>0) {notasM += grupo10.notas[7]}
        if (grupo10.notas[8]>0) {notasM += grupo10.notas[8]}
        if (grupo10.notas[9]>0) {notasM += grupo10.notas[9]}
        if (grupo10.notas[10]>0) {notasM += grupo10.notas[10]}
//
        if (grupo10.notas.length>1){
            notasM = notasM / (grupo10.notas.length - 1)
        } else {
            return 0
        }
        return Math.round(notasM * 100) / 100
    }
}

//nomes da notas 1 a 5
const NGrupo1 = document.getElementById('nGrupo1').innerText = grupo1.nome;
const NGrupo2 = document.getElementById('nGrupo2').innerText = grupo2.nome;
const NGrupo3 = document.getElementById('nGrupo3').innerText = grupo3.nome;
const NGrupo4 = document.getElementById('nGrupo4').innerText = grupo4.nome;
const NGrupo5 = document.getElementById('nGrupo5').innerText = grupo5.nome;
const NGrupo6 = document.getElementById('nGrupo6').innerText = grupo6.nome;
const NGrupo7 = document.getElementById('nGrupo7').innerText = grupo7.nome;
const NGrupo8 = document.getElementById('nGrupo8').innerText = grupo8.nome;
const NGrupo9 = document.getElementById('nGrupo9').innerText = grupo9.nome;
const NGrupo10 = document.getElementById('nGrupo10').innerText = grupo10.nome;
//nomes da notas 6 a 10
const NGrupo11 = document.getElementById('nGrupo11').innerText = grupo1.nome;
const NGrupo20 = document.getElementById('nGrupo20').innerText = grupo2.nome;
const NGrupo30 = document.getElementById('nGrupo30').innerText = grupo3.nome;
const NGrupo40 = document.getElementById('nGrupo40').innerText = grupo4.nome;
const NGrupo50 = document.getElementById('nGrupo50').innerText = grupo5.nome;
const NGrupo60 = document.getElementById('nGrupo60').innerText = grupo6.nome;
const NGrupo70 = document.getElementById('nGrupo70').innerText = grupo7.nome;
const NGrupo80 = document.getElementById('nGrupo80').innerText = grupo8.nome;
const NGrupo90 = document.getElementById('nGrupo90').innerText = grupo9.nome;
const NGrupo100 = document.getElementById('nGrupo100').innerText = grupo10.nome;


document.getElementById('NotaG1_1').innerText = grupo1.notas[1];
document.getElementById('NotaG2_1').innerText = grupo2.notas[1];
document.getElementById('NotaG3_1').innerText = grupo3.notas[1];
document.getElementById('NotaG4_1').innerText = grupo4.notas[1];
document.getElementById('NotaG5_1').innerText = grupo5.notas[1];
document.getElementById('NotaG6_1').innerText = grupo6.notas[1];
document.getElementById('NotaG7_1').innerText = grupo7.notas[1];
document.getElementById('NotaG8_1').innerText = grupo8.notas[1];
document.getElementById('NotaG9_1').innerText = grupo9.notas[1];
document.getElementById('NotaG10_1').innerText = grupo10.notas[1];

document.getElementById('NotaG1_2').innerText = grupo1.notas[2];
document.getElementById('NotaG2_2').innerText = grupo2.notas[2];
document.getElementById('NotaG3_2').innerText = grupo3.notas[2];
document.getElementById('NotaG4_2').innerText = grupo4.notas[2];
document.getElementById('NotaG5_2').innerText = grupo5.notas[2];
document.getElementById('NotaG6_2').innerText = grupo6.notas[2];
document.getElementById('NotaG7_2').innerText = grupo7.notas[2];
document.getElementById('NotaG8_2').innerText = grupo8.notas[2];
document.getElementById('NotaG9_2').innerText = grupo9.notas[2];
document.getElementById('NotaG10_2').innerText = grupo10.notas[2];

document.getElementById('NotaG1_3').innerText = grupo1.notas[3];
document.getElementById('NotaG2_3').innerText = grupo2.notas[3];
document.getElementById('NotaG3_3').innerText = grupo3.notas[3];
document.getElementById('NotaG4_3').innerText = grupo4.notas[3];
document.getElementById('NotaG5_3').innerText = grupo5.notas[3];
document.getElementById('NotaG6_3').innerText = grupo6.notas[3];
document.getElementById('NotaG7_3').innerText = grupo7.notas[3];
document.getElementById('NotaG8_3').innerText = grupo8.notas[3];
document.getElementById('NotaG9_3').innerText = grupo9.notas[3];
document.getElementById('NotaG10_3').innerText = grupo10.notas[3];

document.getElementById('NotaG1_4').innerText = grupo1.notas[4];
document.getElementById('NotaG2_4').innerText = grupo2.notas[4];
document.getElementById('NotaG3_4').innerText = grupo3.notas[4];
document.getElementById('NotaG4_4').innerText = grupo4.notas[4];
document.getElementById('NotaG5_4').innerText = grupo5.notas[4];
document.getElementById('NotaG6_4').innerText = grupo6.notas[4];
document.getElementById('NotaG7_4').innerText = grupo7.notas[4];
document.getElementById('NotaG8_4').innerText = grupo8.notas[4];
document.getElementById('NotaG9_4').innerText = grupo9.notas[4];
document.getElementById('NotaG10_4').innerText = grupo10.notas[4];

document.getElementById('NotaG1_5').innerText = grupo1.notas[5];
document.getElementById('NotaG2_5').innerText = grupo2.notas[5];
document.getElementById('NotaG3_5').innerText = grupo3.notas[5];
document.getElementById('NotaG4_5').innerText = grupo4.notas[5];
document.getElementById('NotaG5_5').innerText = grupo5.notas[5];
document.getElementById('NotaG6_5').innerText = grupo6.notas[5];
document.getElementById('NotaG7_5').innerText = grupo7.notas[5];
document.getElementById('NotaG8_5').innerText = grupo8.notas[5];
document.getElementById('NotaG9_5').innerText = grupo9.notas[5];
document.getElementById('NotaG10_5').innerText = grupo10.notas[5];

document.getElementById('NotaG11_1').innerText = grupo1.notas[6];
document.getElementById('NotaG20_1').innerText = grupo2.notas[6];
document.getElementById('NotaG30_1').innerText = grupo3.notas[6];
document.getElementById('NotaG40_1').innerText = grupo4.notas[6];
document.getElementById('NotaG50_1').innerText = grupo5.notas[6];
document.getElementById('NotaG60_1').innerText = grupo6.notas[6];
document.getElementById('NotaG70_1').innerText = grupo7.notas[6];
document.getElementById('NotaG80_1').innerText = grupo8.notas[6];
document.getElementById('NotaG90_1').innerText = grupo9.notas[6];
document.getElementById('NotaG100_1').innerText = grupo10.notas[6];

document.getElementById('NotaG11_2').innerText = grupo1.notas[7];
document.getElementById('NotaG20_2').innerText = grupo2.notas[7];
document.getElementById('NotaG30_2').innerText = grupo3.notas[7];
document.getElementById('NotaG40_2').innerText = grupo4.notas[7];
document.getElementById('NotaG50_2').innerText = grupo5.notas[7];
document.getElementById('NotaG60_2').innerText = grupo6.notas[7];
document.getElementById('NotaG70_2').innerText = grupo7.notas[7];
document.getElementById('NotaG80_2').innerText = grupo8.notas[7];
document.getElementById('NotaG90_2').innerText = grupo9.notas[7];
document.getElementById('NotaG100_2').innerText = grupo10.notas[7];

document.getElementById('NotaG11_3').innerText = grupo1.notas[8];
document.getElementById('NotaG20_3').innerText = grupo2.notas[8];
document.getElementById('NotaG30_3').innerText = grupo3.notas[8];
document.getElementById('NotaG40_3').innerText = grupo4.notas[8];
document.getElementById('NotaG50_3').innerText = grupo5.notas[8];
document.getElementById('NotaG60_3').innerText = grupo6.notas[8];
document.getElementById('NotaG70_3').innerText = grupo7.notas[8];
document.getElementById('NotaG80_3').innerText = grupo8.notas[8];
document.getElementById('NotaG90_3').innerText = grupo9.notas[8];
document.getElementById('NotaG100_3').innerText = grupo10.notas[8];

document.getElementById('NotaG11_4').innerText = grupo1.notas[9];
document.getElementById('NotaG20_4').innerText = grupo2.notas[9];
document.getElementById('NotaG30_4').innerText = grupo3.notas[9];
document.getElementById('NotaG40_4').innerText = grupo4.notas[9];
document.getElementById('NotaG50_4').innerText = grupo5.notas[9];
document.getElementById('NotaG60_4').innerText = grupo6.notas[9];
document.getElementById('NotaG70_4').innerText = grupo7.notas[9];
document.getElementById('NotaG80_4').innerText = grupo8.notas[9];
document.getElementById('NotaG90_4').innerText = grupo9.notas[9];
document.getElementById('NotaG100_4').innerText = grupo10.notas[9];

document.getElementById('NotaG11_5').innerText = grupo1.notas[10];
document.getElementById('NotaG20_5').innerText = grupo2.notas[10];
document.getElementById('NotaG30_5').innerText = grupo3.notas[10];
document.getElementById('NotaG40_5').innerText = grupo4.notas[10];
document.getElementById('NotaG50_5').innerText = grupo5.notas[10];
document.getElementById('NotaG60_5').innerText = grupo6.notas[10];
document.getElementById('NotaG70_5').innerText = grupo7.notas[10];
document.getElementById('NotaG80_5').innerText = grupo8.notas[10];
document.getElementById('NotaG90_5').innerText = grupo9.notas[10];
document.getElementById('NotaG100_5').innerText = grupo10.notas[10];

let rankV1 = 
    [
    {nome: grupo1.nome, valor: grupo1.mediaProv()},
    {nome: grupo2.nome, valor: grupo2.mediaProv()},
    {nome: grupo3.nome, valor: grupo3.mediaProv()},
    {nome: grupo4.nome, valor: grupo4.mediaProv()},
    {nome: grupo5.nome, valor: grupo5.mediaProv()},
    {nome: grupo6.nome, valor: grupo6.mediaProv()},
    {nome: grupo7.nome, valor: grupo7.mediaProv()},
    {nome: grupo8.nome, valor: grupo8.mediaProv()},
    {nome: grupo9.nome, valor: grupo9.mediaProv()},
    {nome: grupo10.nome, valor: grupo10.mediaProv()}
    ];

    rankV1.sort(function (a, b) {
    if (a.valor < b.valor) {
      return 1;
    }
    if (a.valor > b.valor) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  
let rankOrdem = rankV1

//nomes dos grupos do rank
const NGrupo12 = document.getElementById('nGrupo12').innerText = rankOrdem[0].nome;
const NGrupo21 = document.getElementById('nGrupo21').innerText = rankOrdem[1].nome;
const NGrupo31 = document.getElementById('nGrupo31').innerText = rankOrdem[2].nome;
const NGrupo41 = document.getElementById('nGrupo41').innerText = rankOrdem[3].nome;
const NGrupo51 = document.getElementById('nGrupo51').innerText = rankOrdem[4].nome;
const NGrupo61 = document.getElementById('nGrupo61').innerText = rankOrdem[5].nome;
const NGrupo71 = document.getElementById('nGrupo71').innerText = rankOrdem[6].nome;
const NGrupo81 = document.getElementById('nGrupo81').innerText = rankOrdem[7].nome;
const NGrupo91 = document.getElementById('nGrupo91').innerText = rankOrdem[8].nome;
const NGrupo101 = document.getElementById('nGrupo101').innerText = rankOrdem[9].nome;

//média dos grupos do rank
document.getElementById("NotaG101_1").innerText = rankOrdem[0].valor;
document.getElementById("NotaG102_1").innerText = rankOrdem[1].valor;
document.getElementById("NotaG103_1").innerText = rankOrdem[2].valor;
document.getElementById("NotaG104_1").innerText = rankOrdem[3].valor;
document.getElementById("NotaG105_1").innerText = rankOrdem[4].valor;
document.getElementById("NotaG106_1").innerText = rankOrdem[5].valor;
document.getElementById("NotaG107_1").innerText = rankOrdem[6].valor;
document.getElementById("NotaG108_1").innerText = rankOrdem[7].valor;
document.getElementById("NotaG109_1").innerText = rankOrdem[8].valor;
document.getElementById("NotaG110_1").innerText = rankOrdem[9].valor;


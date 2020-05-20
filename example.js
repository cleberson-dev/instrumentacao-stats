// Exemplo utiliza uma questão da prova de Instrumentação Eletroeletrônica
const InstrumentacaoStats = require('./src/InstrumentacaoStats');



let cpd = 80577;
// A função de formatação .toFixed retorna uma String
cpd = Number((cpd * Math.pow(10, -4)).toFixed(4));  

const i = [3.0887, 3.8047, 4.5201];
const v = [6.7950, cpd, 9.9456];

const statsI = new InstrumentacaoStats(i);
const statsV = new InstrumentacaoStats(v);

statsI.info();
console.log();
statsV.info();
import '../styles/main.scss';

AOS.init();

const dataDoEvento = new Date("Dec 26, 2026 21:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function (){
const agora = new Date();
const timeStampAtual = agora.getTime();

const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

const diasEmMs = 1000 * 60 * 60 *24;
const horaEmMs = 1000 * 60 * 60;
const minutosEmMs = 1000 * 60;

const dias = Math.floor(distanciaAteOEvento / diasEmMs);
const horas = Math.floor((distanciaAteOEvento % diasEmMs) / horaEmMs);
const minutos = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmMs);
const segundos = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

if(distanciaAteOEvento < 0){
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML = 'O feitiço Acabou!'
}


}, 1000);
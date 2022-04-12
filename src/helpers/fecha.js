let d = new Date();
let hora = d.getHours() <= 9 ? "0" + d.getHours() : d.getHours();
let minutos = d.getMinutes() <= 9 ? "0" + d.getMinutes() : d.getMinutes();
let segundos = d.getSeconds() <= 9 ? "0" + d.getSeconds() : d.getSeconds();
let dia = d.getDate();
let numDia = d.getDay();
let mes = d.getMonth();
let anio = d.getFullYear();
const semana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const fecha = () => {
  return `${semana[numDia]} ${dia} de ${meses[mes]} del ${anio} - ${hora}:${minutos}:${segundos}`;
};

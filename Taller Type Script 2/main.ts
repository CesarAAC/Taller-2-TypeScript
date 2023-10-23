import {Serie} from "./Serie.js"

import {dataSeries} from "./dataSeries.js"

const seriesTbody: HTMLElement= document.getElementById("tabla")!;
const averageTp:HTMLElement= document.getElementById("average")!;
const cardImagen: HTMLImageElement = document.getElementById(
  "image"
)! as HTMLImageElement;
const cardTitulo: HTMLElement = document.getElementById("nombre")!;
const cardDescripcion: HTMLElement =
  document.getElementById("description")!;
const cardEnlace: HTMLAnchorElement = document.getElementById(
  "link"
)! as HTMLAnchorElement;

  function hacerTabla(series: Serie[]): void {
    dataSeries.forEach((serie) => {
      let trElement = document.createElement("tr");
  
      trElement.className = "serie_tabulada";
  
      trElement.innerHTML = `<td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.platform}</td>
      <td>${serie.seasons}</td>`;
  
      var Clickeable = function (row: HTMLTableRowElement) {
        return function () {
          cardImagen.src = `${serie.image}`;
          cardTitulo.innerHTML = `${serie.name}`;
          cardDescripcion.innerHTML = `${serie.description}`;
          cardEnlace.href = `${serie.link}`;
          cardEnlace.innerHTML = `${serie.link}`;
        };
      };
  
      trElement.onclick = Clickeable(trElement);
      seriesTbody.appendChild(trElement);
    });
  }
  
  hacerTabla(dataSeries)

  function averageSeason(series: Serie[]): number {
    let totalSeasons: number= 0;
    let cont: number= 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons, cont+=1);
    let averageSeasons: number =totalSeasons/cont;
    return averageSeasons;
  }
  averageTp.innerHTML = `${averageSeason(dataSeries)}`;
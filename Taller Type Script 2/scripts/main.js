import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById("tabla");
var averageTp = document.getElementById("average");
var cardImagen = document.getElementById("imagen_serie");
var cardTitulo = document.getElementById("titulo_serie");
var cardDescripcion = document.getElementById("descripcion_serie");
var cardEnlace = document.getElementById("enlace_serie");
/*function renderSeriesInTable(series: Serie[]): void {
    series.forEach(c => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${c.id}</td>
                             <td>${c.name}</td>
                             <td>${c.platform}</td>
                             <td>${c.seasons}</td>`;
      seriesTbody.appendChild(trElement);
    });
  }*/
function renderSeriesInTable(series) {
    dataSeries.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.className = "serie_tabulada";
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n      <td>").concat(serie.name, "</td>\n      <td>").concat(serie.platform, "</td>\n      <td>").concat(serie.seasons, "</td>");
        var createClickHandler = function (row) {
            return function () {
                cardImagen.src = "".concat(serie.image);
                cardTitulo.innerHTML = "".concat(serie.name);
                cardDescripcion.innerHTML = "".concat(serie.description);
                cardEnlace.href = "".concat(serie.link);
                cardEnlace.innerHTML = "".concat(serie.link);
            };
        };
        var changeBg = function (row) {
            return function () {
                row.style.cursor = "pointer";
                row.style.backgroundColor = "#d1d1d1";
            };
        };
        var restoreBg = function (row) {
            return function () {
                row.style.cursor = "default";
                row.style.backgroundColor = "initial";
            };
        };
        trElement.onclick = createClickHandler(trElement);
        trElement.onmouseenter = changeBg(trElement);
        trElement.onmouseout = restoreBg(trElement);
        seriesTbody.appendChild(trElement);
    });
}
renderSeriesInTable(dataSeries);
function averageSeason(series) {
    var totalSeasons = 0;
    var cont = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; }, cont += 1);
    var averageSeasons = totalSeasons / cont;
    return averageSeasons;
}
averageTp.innerHTML = "".concat(averageSeason(dataSeries));

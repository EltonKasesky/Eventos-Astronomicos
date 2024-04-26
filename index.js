import data from "./app/data/data.js";
import { setFilterDateActual, setFilterDateTwoMonths } from "./app/core/core.js";
import { showRainList, showWelcome } from "./app/interface/interface.js";

//Filtragem para aparecem apenas os eventos desejados
let filteredDateActual = setFilterDateActual(data);
let filteredDateTwoMonths = setFilterDateTwoMonths(data);

showWelcome();

if (filteredDateActual.length > 0) {
    let msg = "\nEncontramos ";
    msg += filteredDateActual.length == 1
        ? '1 chuva de meteoros que pode ser vista hoje'
        : filteredDateActual.length + ' chuvas de meteoros que podem ser vistas hoje';
    console.log(msg);

    showRainList(filteredDateActual);
} else {
    console.log('\nNenhuma chuva de meteoros passando no momento');
}

console.log('\n\nNão perca as próximas chuvas de meteoros:');
showRainList(filteredDateTwoMonths);
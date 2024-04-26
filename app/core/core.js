// Função para formatar a data
const formatDate = (date, year) => {
    let month = date.getMonth();
    let day = date.getDate();

    //Cria uma nova data com o ano fornecido e o mês e dia da data original
    let dateFormated = new Date(year, month, day);

    return dateFormated;
};

//Função para obter a data atual
const getCurrentDate = () => {
    return new Date();
}

//Função para obter o início da chuva
const getStartRain = (data) => {
    const currentDate = getCurrentDate();
    const currentYear = currentDate.getFullYear();

    //Formata a data de início da chuva com o ano atual e a data fornecida
    const startRain = formatDate(new Date(`${currentYear}/${data.InicioDaChuva}`), currentYear);

    return startRain;
}

//Função para obter o fim da chuva
const getEndRain = (data) => {
    const currentDate = getCurrentDate();
    const currentYear = currentDate.getFullYear();

    //Formata a data de fim da chuva com o ano atual e a data fornecida
    const endRain = formatDate(new Date(`${currentYear}/${data.fimDaChuva}`), currentYear);

    return endRain;
}

//Função para filtrar os eventos que ocorrem no período atual
const getFilterDateActual = (event) => {
    let today = getCurrentDate();
    let year = today.getFullYear();
    let startRain = getStartRain(event);
    let endRain = getEndRain(event);

    //Se o mês atual for maior que o mês de início da chuva
    if (today.getMonth() + 1 > startRain.getMonth() + 1){
        const finalYear = startRain.getFullYear();
        startRain.setFullYear(finalYear + 1); //Adiciona um ano à data de início da chuva
    }

    let todayFormated = formatDate(today, year); //Formata a data atual

    return todayFormated >= startRain && todayFormated <= endRain;
}

//Função para filtrar os eventos que ocorrem nos próximos dois meses
const getFilterDateTwoMonths = (event) => {
    let today = getCurrentDate();
    let monthLater = today.getMonth() + 2;
    let year = today.getFullYear();
    let startRain = getStartRain(event);

    //Se o mês atual for maior que o mês de início da chuva
    if (today.getMonth() + 1 > startRain.getMonth() + 1){
        const finalYear = startRain.getFullYear(); //Obtém o ano final
        startRain.setFullYear(finalYear + 1); //Adiciona um ano à data de início da chuva
    }

    //Cria uma nova data para daqui a dois meses
    let twoMonthsLater = new Date(year, monthLater, today.getDate());

    return today < startRain && startRain < twoMonthsLater;
}

//Função para filtrar os eventos que ocorrem no período atual
const setFilterDateActual = (registers) => {
    //Filtra os registros de eventos com base na função getFilterDateActual
    let filteredDate = registers.filter(event => getFilterDateActual(event));
    return filteredDate;
}

//Função para filtrar os eventos que ocorrem nos próximos dois meses
const setFilterDateTwoMonths = (registers) => {
    //Filtra os registros de eventos com base na função getFilterDateTwoMonths
    let filteredDate = registers.filter(event => getFilterDateTwoMonths(event));
    return filteredDate;
}

export { setFilterDateActual, setFilterDateTwoMonths };

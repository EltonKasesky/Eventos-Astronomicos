//Função para formatar a intensidade da chuva
const formatIntensity = (string) => {
    let textIntensity;

    if (string.indexOf('Fraca') !== -1) {
        textIntensity = '1 (Fraca)';
    } else if (string.indexOf('Média') !== -1) {
        textIntensity = '2 (Média)';
    } else if (string.indexOf('Forte') !== -1) {
        textIntensity = '3 (Forte)';
    } else {
        textIntensity = 'Irregular';
    }

    return textIntensity;
};

//Função para formatar o hemisfério com base na declinação
const formatHemisphere = (declination) => declination >= 0 ? 'Norte' : 'Sul';

//Função para reverter o formato de mês/ano para ano/mês
const reverseMonthYear = (date) => {
    const reversedDate = date.split('/'); //Divide a data pelo caractere '/'

    return reversedDate[1] + '/' + reversedDate[0];
}

export { formatIntensity, formatHemisphere, reverseMonthYear };
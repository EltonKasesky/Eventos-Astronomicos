import { formatIntensity, formatHemisphere, reverseMonthYear } from "../format/format.js";

//Função para exibir uma lista de chuvas
const showRainList = (list) => {
    console.log('\nNOME DA CHUVA               - INTENSIDADE - HEMISFÉRIO - PERÍODO');
    
    list.forEach(showRain);
};

//Função para exibir detalhes de uma chuva
const showRain = (data) => {
    const name = data.nome.padEnd(27, ' ');
    let intensity = formatIntensity(data.intensidadeDaChuva);
    let hemisphere = formatHemisphere(data.declinacaoDe);

    intensity = intensity.padEnd(11, ' ');
    hemisphere = hemisphere.padEnd(10, ' ');

    const startDate = reverseMonthYear(data.InicioDaChuva); //Inverte o formato da data de início da chuva
    const endDate = reverseMonthYear(data.fimDaChuva); //Inverte o formato da data de fim da chuva

    console.log(`${name} - ${intensity} - ${hemisphere} - ${startDate} à ${endDate} `);
};

//Função para exibir uma mensagem de boas-vindas
const showWelcome = () => {
    console.log(`---------- Chuva de Meteoros ----------`);
}

export { showRainList, showWelcome };

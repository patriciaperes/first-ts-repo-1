//Percentagem rapazes:

export function calcularPercentagemRapazes(rapazes: number, raparigas: number): number {
    let total: number;
    let percentagemRapazes: number;
    total = rapazes + raparigas;
    percentagemRapazes = (rapazes / total) * 100;
    return percentagemRapazes;
}


let percentagemRapazes = calcularPercentagemRapazes(10, 15);
console.log("percentagem de rapazes = " + percentagemRapazes);




//Percentagem raparigas:

export function calcularPercentagemRaparigas(rapazes: number, raparigas: number): number {
    let total: number;
    let percentagemRaparigas: number;
    total = rapazes + raparigas;
    percentagemRaparigas = (raparigas / total) * 100;
    return percentagemRaparigas;
}


let percentagemRaparigas = calcularPercentagemRaparigas(10, 15);
console.log("percentagem de raparigas = " + percentagemRaparigas);
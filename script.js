const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const trocarDica = document.getElementById("trocarDica");
const dicaTexto = document.getElementById("dicaTexto");

calcular.addEventListener("click", function() {
    const restos = Number(document.getElementById("restos").value);
    const folhas = Number(document.getElementById("folhas").value);
    const cascas = Number(document.getElementById("cascas").value);

    const totalSemana = restos + folhas + cascas;
    const totalMes = totalSemana * 4;
    const aduboEstimado = totalMes * 0.4;

    let mensagem = "";

    if (totalSemana === 0) {
        mensagem = "Digite pelo menos um valor para calcular.";
    } else {
        let classificacao = "";

        if (totalSemana < 10) {
            classificacao = "Pequena composteira: ideal para hortas e jardins menores.";
        } else if (totalSemana < 25) {
            classificacao = "Composteira média: boa para uma propriedade com produção familiar.";
        } else {
            classificacao = "Composteira grande: ótima para aproveitar bastante resíduo orgânico.";
        }

        mensagem =
            "<h3>Resultado da Compostagem</h3>" +
            "<p><strong>Resíduos por semana:</strong> " + totalSemana + " kg</p>" +
            "<p><strong>Resíduos por mês:</strong> " + totalMes + " kg</p>" +
            "<p><strong>Adubo estimado:</strong> aproximadamente " + aduboEstimado.toFixed(1) + " kg por mês</p>" +
            "<p><strong>Classificação:</strong> " + classificacao + "</p>" +
            "<p>🍃 Ao compostar, menos lixo vai para descarte e mais nutrientes voltam para o solo.</p>";
    }

    resultado.style.display = "block";
    resultado.innerHTML = mensagem;
});

const dicas = [
    "Misture resíduos úmidos com folhas secas para evitar mau cheiro.",
    "Revire a composteira algumas vezes por semana para entrar oxigênio.",
    "Evite colocar óleo, carnes e produtos químicos na compostagem.",
    "A compostagem ajuda a melhorar o solo da horta e reduzir desperdícios.",
    "Mantenha a composteira em local arejado e protegido de chuva forte.",
    "Folhas secas ajudam a equilibrar a umidade da compostagem."
];

let indice = 0;

trocarDica.addEventListener("click", function() {
    indice++;

    if (indice >= dicas.length) {
        indice = 0;
    }

    dicaTexto.textContent = dicas[indice];
});

function calculaTabuada() {
    //Obtendo elementos da DOM
    let tabuada = document.querySelector("#tabuada tbody");
    let valorA = document.querySelector("#valorA");

    //Validando Inputs
    if (valorA.value.length == 0) {
        window.alert("Por favor digite um numero valido");
        return;
    }

    let numero = parseInt(valorA.value);

    //Limpando Tabuada

    tabuada.innerHTML = "";

    for (let valorB = 0; valorB <= 10; valorB++) {

        let resultado = numero * valorB;

        let template = `
        <td>${numero}</td>
        <td>x</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${resultado}</td>
        `;

        let tr = document.createElement("tr");
        tr.innerHTML = template;

        tr.addEventListener("mouseover", function () {
            tr.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
        });
        tr.addEventListener("mouseout", function () {
            tr.style.backgroundColor = "";
        });

        tabuada.appendChild(tr);
    }
}
calculaTabuada();

document.querySelector("#valorA").addEventListener("change", calculaTabuada);
document.querySelector("#valorA").addEventListener("input", calculaTabuada);

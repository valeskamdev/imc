const resetButton = document.querySelector(".reset-button");
const calculateButton = document.querySelector(".calculate-button");

const inputWeight = document.querySelector('.weight');
const inputHeight = document.querySelector('.height');
const result = document.querySelector(".result");

const calculateIMC = () => {
    const weight = parseFloat(inputWeight.value);
    const height = parseFloat(inputHeight.value);
    const imc = (weight / (height * height)).toFixed(2);

    if (!isNaN(imc)) {
        if (imc > 0.00 && imc <= 18.49) {
            result.innerHTML = `<h2 style="text-align: center; margin-top: 35px; color: #FF6666; font-size: 15px"><strong>Seu IMC é ${imc}</strong></h2><h1 style="color:#FF6666; text-align: center;">&#x1F915 Abaixo do peso!</h1> <p style="color:#FF6666; text-align: center;">Cuidado! Seu IMC está abaixo do recomendado. É importante equilibrar sua alimentação e consultar um profissional de saúde para avaliar sua situação.</p>`
        } else if (imc <= 24.99) {
            result.innerHTML = `<h2 style="text-align: center; margin-top: 35px; color: #32CD32; font-size: 15px"><strong>Seu IMC é ${imc}</strong></h2><h1 style="color:#32CD32; text-align: center;">&#x1F609 Peso normal!</h1> <p style="color:#32CD32; text-align: center;">Parabéns! Seu IMC está dentro do intervalo considerado saudável. Mantenha uma alimentação equilibrada e pratique atividades físicas regularmente para manter sua saúde em dia.</p>`
        } else if (imc <= 29.99) {
            result.innerHTML = `<h2 style="text-align: center; margin-top: 35px; color: #e6af38; font-size: 15px"><strong>Seu IMC é ${imc}</strong></h2><h1 style="color:#e6af38; text-align: center;">&#x1F62F Sobrepeso!</h1> <p style="color:#e6af38; text-align: center;">Atenção! Seu IMC está acima do recomendado. É importante equilibrar sua alimentação, praticar atividades físicas regularmente e, se necessário, consultar um profissional de saúde para avaliar sua situação.</p>`
        } else if (imc <= 39.99) {
            result.innerHTML = `<h2 style="text-align: center; margin-top: 35px; color: #fa8116; font-size: 15px"><strong>Seu IMC é ${imc}</strong></h2><h1 style="color:#fa8116; text-align: center;">&#x1F62C Obesidade!</h1> <p style="color:#fa8116; text-align: center;">Urgente! Seu IMC indica obesidade. É importante procurar imediatamente um profissional de saúde para avaliar sua situação e prescrever as medidas necessárias para cuidar de sua saúde.</p>`
        } else {
            result.innerHTML = `<h2 style="text-align: center; margin-top: 35px; color: #c91e12; font-size: 15px"><strong>Seu IMC é ${imc}</strong></h2><h1 style="color:#c91e12; text-align: center;">&#x1F6A8 Obesidade grave!</h1> <p style="color:#c91e12; text-align: center;">Emergência! Seu IMC indica obesidade grave. É de extrema importância procurar imediatamente um profissional de saúde para avaliar sua situação e prescrever as medidas necessárias para cuidar de sua saúde antes que seja tarde demais.</p>`

        }
    } else {
        alert("Prencha todos os dados!")
    }
}

const resetData = () => {
    inputWeight.value = "";
    inputHeight.value = "";
    result.innerHTML = "";
}

calculateButton.addEventListener('click', calculateIMC);
resetButton.addEventListener('click', resetData);
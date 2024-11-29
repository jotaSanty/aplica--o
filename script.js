const convertButton = document.querySelector(".convert-button")
const valueSelect = document.querySelector(".convert-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-text").value
    const currencyValueToConverted = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(valueSelect.value)
    const dolarValue = 5.8
    const euroValue = 6.09
    const librasValue = 7.50
    const bitcoinValue = 575740


    if (valueSelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarValue)

    }

    else if (valueSelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroValue)

    }

    else if (valueSelect.value == "libras") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / librasValue)

    }

    else if (valueSelect.value == "bitcoin") {
    // Conversão de BRL para Bitcoin (1 BTC = 575740 BRL)
    const bitcoinAmount = inputCurrencyValue / bitcoinValue;
    const bitcoinFormatted = bitcoinAmount.toFixed(2); // Limita a 8 casas decimais
    currencyValueConverted.innerHTML = `${bitcoinFormatted} BTC`; // Exibe o valor em Bitcoin
    }

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (valueSelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (valueSelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (valueSelect.value == "libras") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if (valueSelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

valueSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
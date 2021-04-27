let currencyElOne = document.getElementById('currency-one')
let amountElOne = document.getElementById('amount-one')
let currencyElTwo = document.getElementById('currency-two')
let amountElTwo = document.getElementById('amount-two')

let rateEl = document.getElementById('rate')
let swap = document.getElementById('swap')

// https://v6.exchangerate-api.com/v6/4e79f8c72bbbe8c6a38c1494/latest/USD
// `https://prime.exchangerate-api.com/v5/${myKey}/latest/${currency_one}

function calculate() {
    let myKey = '4e79f8c72bbbe8c6a38c1494'
    let currency_one = currencyElOne.value
    let currency_two = currencyElTwo.value
    fetch(`https://v6.exchangerate-api.com/v6/${myKey}/latest/${currency_one}`)
        .then(res => res.json())
        .then(x => {
            console.log(x)

            // let rate = x.conversion_rates[currency_two]

            // rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`

            // amountElTwo.value = (amountElOne.value * rate).toFixed(2)
        })
}

currencyElOne.addEventListener('change', calculate);
amountElOne.addEventListener('input', calculate);
currencyElTwo.addEventListener('change', calculate);
amountElTwo.addEventListener('input', calculate);

swap.addEventListener('click', function () {
    let temporary = currencyElOne.value;
    currencyElOne.value = currencyElTwo.value;
    currencyElTwo.value = temporary;
})

calculate()
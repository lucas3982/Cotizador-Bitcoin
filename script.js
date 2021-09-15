const dollarContainer = document.getElementById('Dolar');
const usdAmount = document.getElementById('usd-amount');


fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => displayData(data));

    const displayData = data => {
        const usd = data.bpi.USD.rate_float;
        usdAmount.textContent = `$${usd} USD`;
        const totalDolarItems = Math.trunc(usd / 1000);
        for(let i = 0; i < totalDolarItems; i++) {
            const newDolar = document.createElement('div');
            newDolar.setAttribute("style", `animation-delay:.${10 + i}$;`);
            newDolar.textContent = '$';
            newDolar.setAttribute('class', 'coin dolar-item');
            dollarContainer.appendChild(newDolar);
        }
    }
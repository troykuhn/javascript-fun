let bill = 10;

function getTipValue(bill) {
    let tip = bill*(0.18);

    return tip;

}

let tipAmount = getTipValue(bill);
console.log(`You should tip $${tipAmount}`);

let tip = (total) => total*.20;
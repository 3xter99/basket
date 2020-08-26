'use strict'

function sale(sum, count, promo) {

    let discount1 = count >= 5 && count < 10 ? sum * 0.05 : count >= 10 ? sum * 0.1 : 0;

    let discount2 = sum > 100000 ? (sum - 100000) * 0.2 : 0;

    let discount3 = 0;
    if (promo === 15) {
        if (sum >= 25000) {
            discount3 = sum * 0.15
        }
    }

    let discount4 = promo === 100 ? 100 : 0

    return sum > 100 ? sum - discount1 - discount2 - discount3 - discount4 : 0
}

console.log(sale(190, 10, 15));

